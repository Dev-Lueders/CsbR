import React, { useRef, useLayoutEffect, useState } from "react";
import PropTypes from "prop-types";


export default function Page_Grid({
  children,
  className = "",
  role = "main",
  style = {},
  cols = 36,
  rowsTarget, // how many track rows to show
  fit = "contain",
  gap = "1px",
  maxWidth = "1400px",
  padding = "1px",
  cellAspect = 1,
  rows, // if given, we skip auto sizing and use this template
  ...props
}) {
  const ref = useRef(null);
  const [tile, setTile] = useState(null); // pixel height of each row (and width per column)

  // Normalize cols and derive a numeric column count
  const colsValue =
    typeof cols === "number"
      ? `repeat(${cols}, 1fr)`
      : cols || "repeat(36, 1fr)";
  const colCount = (() => {
    if (typeof cols === "number") return cols;
    const m = /repeat\(\s*(\d+)/i.exec(colsValue);
    return m ? parseInt(m[1], 10) : 36;
  })();

  const rowsCount = rowsTarget ?? colCount; // default to NxN

  const parsePx = (v) => {
    if (typeof v === "number") return v;
    const m = /^(\d+(?:\.\d+)?)px$/.exec(String(v || ""));
    return m ? parseFloat(m[1]) : 0;
  };

  useLayoutEffect(() => {
    if (!ref.current || rows) return; // explicit rows template => skip autosize

    const ro = new ResizeObserver(() => {
      const el = ref.current;
      if (!el) return;

      // Container sizes (border-box)
      const clientW = el.clientWidth;
      const clientH = el.clientHeight;

      const pad = parsePx(padding) * 2;
      const gapPx = parsePx(gap);

      // Content box estimate
      const contentW = Math.max(clientW - pad, 0);
      const contentH = Math.max(clientH - pad, 0);

      // Available width for tracks after gaps
      const totalColGaps = gapPx * Math.max(colCount - 1, 0);
      const totalRowGaps = gapPx * Math.max(rowsCount - 1, 0);

      const widthForCols = Math.max(contentW - totalColGaps, 0);
      const heightForRows = Math.max(contentH - totalRowGaps, 0);

      // Cell width/height if we fitted by width only / height only
      const cellFromWidth = colCount > 0 ? widthForCols / colCount : 0;
      // Keep cells square (or chosen aspect): width/height = cellAspect
      // Width is determined by track width; height = width / aspect.
      const rowFromWidth = cellFromWidth / (cellAspect || 1);

      const cellFromHeight = rowsCount > 0 ? heightForRows / rowsCount : 0;
      // If we set height first, the equivalent width would be height * aspect
      const rowFromHeight = cellFromHeight; // already the row height we need

      let chosenRow;
      switch (fit) {
        case "cover":
          // Larger of the two so we fill both axes (may overflow)
          chosenRow = Math.max(rowFromWidth, rowFromHeight);
          break;
        case "width":
          chosenRow = rowFromWidth;
          break;
        case "contain":
        default:
          // Smaller so we never overflow (may leave letterbox space)
          chosenRow = Math.min(rowFromWidth, rowFromHeight);
          break;
      }

      setTile(Math.max(Math.floor(chosenRow), 1));
    });

    // Observe own size; also force an initial pass by setting a size
    ro.observe(ref.current);
    return () => ro.disconnect();
  }, [gap, padding, colCount, rowsCount, cellAspect, fit, rows]);

  const gridStyle = {
    display: "grid",
    gridTemplateColumns: colsValue,
    // Explicit rows template if provided; otherwise set repeat(rowsCount, tile)
    ...(rows
      ? { gridTemplateRows: rows }
      : tile
      ? { gridTemplateRows: `repeat(${rowsCount}, ${tile}px)` }
      : {}),
    gap,
    width: "100%",
    height: "100dvh", // fill viewport height
    padding,
    boxSizing: "border-box",
    margin: "0 auto",
    maxWidth,
    // When contain leaves spare space, center it
    justifyContent: "center",
    alignContent: "center",
    ...style,
  };

  return (
    <main
      ref={ref}
      className={`csbr-page-grid ${className}`}
      role={role}
      style={gridStyle}
      {...props}
    >
      {children}
    </main>
  );
}

Page_Grid.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  role: PropTypes.string,
  style: PropTypes.object,
  cols: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  rowsTarget: PropTypes.number,
  fit: PropTypes.oneOf(["contain", "cover", "width"]),
  gap: PropTypes.string,
  maxWidth: PropTypes.string,
  padding: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  cellAspect: PropTypes.number,
  rows: PropTypes.string,
};
