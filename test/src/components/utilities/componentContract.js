import { expect, vi } from "vitest";

export function assertAriaLabel(el, expected) {
  expect(el).toHaveAttribute("aria-label", expected);
}

export function assertStyleAndClass(el, { className, styleKv }) {
  if (className) expect(el).toHaveClass(className);
  if (styleKv) expect(el).toHaveStyle(styleKv);
}

export function assertGridAttrs(el, { cols, rows }) {
  if (cols != null)
    expect(el).toHaveAttribute("data-grid-columns", String(cols));
  if (rows != null) expect(el).toHaveAttribute("data-grid-rows", String(rows));
}

export function assertHiddenWhenFalse(el) {
  expect(el).toHaveAttribute("hidden");
  expect(el).toHaveAttribute("aria-hidden", "true");
}

// Capture React PropTypes warnings during render
export function withPropTypeSpy(run) {
  const spy = vi.spyOn(console, "error").mockImplementation(() => {});
  try {
    run();
    return spy.mock.calls.map((c) => (c?.[0] ?? "").toString()).join("\n");
  } finally {
    spy.mockRestore();
  }
}
