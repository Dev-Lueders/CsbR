import {
  useEffect,
  useId,
  useMemo,
  useRef,
  useState,
  useCallback,
} from "react";

/* ---------- tiny helpers ---------- */
export function mergeRefs(...refs) {
  return (node) =>
    refs.forEach((r) => {
      if (!r) return;
      if (typeof r === "function") r(node);
      else r.current = node;
    });
}
export function composeHandlers(...fns) {
  return (e) => fns.forEach((fn) => fn && fn(e));
}
export function isFocusable(el) {
  if (!el) return false;
  return el.matches?.(
    'a[href],button,textarea,input,select,[tabindex]:not([tabindex="-1"])'
  );
}
export function focusFirst(container) {
  if (!container) return;
  const el = container.querySelector?.(
    'button,[href],input,select,textarea,[tabindex]:not([tabindex="-1"])'
  );
  el?.focus();
}

/* ---------- 1) Form field builder ---------- */
/** Returns labeled props for label/input/description/error with stable ids */
export function useFormField({
  id,
  label,
  describedBy,
  error,
  required = false,
}) {
  const reactId = useId();
  const baseId = id || `ff-${reactId}`;
  const labelId = `${baseId}-label`;
  const descId = describedBy
    ? describedBy
    : error
    ? `${baseId}-err`
    : `${baseId}-desc`;

  const labelProps = {
    id: labelId,
    htmlFor: baseId,
    children: label,
  };
  const inputProps = {
    id: baseId,
    "aria-labelledby": labelId,
    "aria-describedby": descId,
    "aria-invalid": !!error || undefined,
    required,
  };
  const descriptionProps = error
    ? { id: descId, role: "alert", children: error }
    : { id: descId };
  return {
    ids: { baseId, labelId, descId },
    labelProps,
    inputProps,
    descriptionProps,
  };
}

/* ---------- 2) Disclosure (accordion/expander) ---------- */
export function useDisclosure({ defaultOpen = false, id } = {}) {
  const reactId = useId();
  const [open, setOpen] = useState(defaultOpen);
  const triggerId = id ? `${id}-btn` : `disc-${reactId}-btn`;
  const panelId = id ? `${id}-panel` : `disc-${reactId}-panel`;

  const toggle = useCallback(() => setOpen((v) => !v), []);
  const close = useCallback(() => setOpen(false), []);

  const triggerProps = {
    id: triggerId,
    type: "button",
    "aria-expanded": String(open),
    "aria-controls": panelId,
    onClick: toggle,
  };
  const panelProps = {
    id: panelId,
    role: "region",
    "aria-labelledby": triggerId,
    hidden: !open,
  };

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, close]);

  return { open, setOpen, toggle, close, triggerProps, panelProps };
}

/* ---------- 3) Listbox Dropdown (trigger + popup + options) ---------- */
export function useListbox({
  options = [], // [{label, value, disabled?}]
  value = null, // controlled selected value
  defaultValue = null, // uncontrolled
  onChange, // (value) => void
  id,
} = {}) {
  const reactId = useId();
  const baseId = id || `lb-${reactId}`;
  const listboxId = `${baseId}-listbox`;
  const buttonRef = useRef(null);
  const popupRef = useRef(null);

  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(-1);
  const [internal, setInternal] = useState(defaultValue);
  const selectedValue =
    value !== null && value !== undefined ? value : internal;

  const indexOf = useMemo(
    () => new Map(options.map((o, i) => [o.value, i])),
    [options]
  );
  useEffect(() => {
    if (!open) return;
    // Close on outside click
    const onDocClick = (e) => {
      const t = e.target;
      if (!popupRef.current?.contains(t) && !buttonRef.current?.contains(t)) {
        setOpen(false);
      }
    };
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onDocClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDocClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const commitChange = useCallback(
    (val) => {
      if (onChange) onChange(val);
      else setInternal(val);
      setOpen(false);
      // return focus to trigger
      buttonRef.current?.focus();
    },
    [onChange]
  );

  const openAndFocus = useCallback(() => {
    setOpen(true);
    // focus selected or first
    const idx = indexOf.get(selectedValue) ?? 0;
    setActive(idx);
    requestAnimationFrame(() => {
      const el = popupRef.current?.querySelector?.(
        `[role="option"][data-idx="${idx}"]`
      );
      el?.focus();
    });
  }, [indexOf, selectedValue]);

  const moveActive = useCallback(
    (delta) => {
      if (!options.length) return;
      let i = active;
      do {
        i = (i + delta + options.length) % options.length;
      } while (options[i]?.disabled && i !== active);
      setActive(i);
      const el = popupRef.current?.querySelector?.(
        `[role="option"][data-idx="${i}"]`
      );
      el?.focus();
    },
    [active, options.length, options]
  );

  /* trigger (button) */
  const triggerProps = {
    id: `${baseId}-button`,
    ref: buttonRef,
    type: "button",
    role: "button",
    "aria-haspopup": "listbox",
    "aria-expanded": String(open),
    "aria-controls": listboxId,
    onClick: () => (open ? setOpen(false) : openAndFocus()),
    onKeyDown: (e) => {
      if (e.key === "ArrowDown" || e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        if (!open) openAndFocus();
      }
    },
  };

  /* popup listbox */
  const listboxProps = {
    id: listboxId,
    ref: popupRef,
    role: "listbox",
    tabIndex: -1,
    "aria-labelledby": triggerProps.id,
    hidden: !open,
    onKeyDown: (e) => {
      if (e.key === "ArrowDown") {
        e.preventDefault();
        moveActive(1);
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        moveActive(-1);
      } else if (e.key === "Home") {
        e.preventDefault();
        setActive(0);
      } else if (e.key === "End") {
        e.preventDefault();
        setActive(options.length - 1);
      } else if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        const opt = options[active];
        if (opt && !opt.disabled) commitChange(opt.value);
      }
    },
  };

  /* per-option props */
  function getOptionProps(i, opt) {
    const selected = selectedValue === opt.value;
    return {
      id: `${baseId}-opt-${i}`,
      role: "option",
      tabIndex: i === active ? 0 : -1,
      "aria-selected": String(selected),
      "aria-disabled": opt.disabled ? "true" : undefined,
      "data-idx": i,
      onClick: () => !opt.disabled && commitChange(opt.value),
      onMouseMove: () => setActive(i),
    };
  }

  return {
    open,
    setOpen,
    active,
    setActive,
    value: selectedValue,
    triggerProps,
    listboxProps,
    getOptionProps,
  };
}
