import React, { memo } from "react";
import PropTypes from "prop-types";

/**
 * Back-face base shell.
 * - If used inside the Flipper's stage, pass asFace={true} (default).
 * - If you want to place the back face by itself in a grid cell, set asFace={false}
 *   and provide gridPosition.
 *
 * NOTE: Keep radius & aspectRatio in sync with the front face for perfect edges.
 */
function UGC_Card_BBase({
  id,
  gridPosition, // { colStart, colEnd, rowStart, rowEnd }
  asFace = true, // true -> absolute inset:0 for stacking
  zIndex = 200,
  radius = 16,
  aspectRatio = "16/9",
  background = "#0f1115",
  borderColor = "#23262d",
  elevation = true,
  ariaLabel = "UGC card (back)",
  children,
  style = {},
  className = "",
}) {
  const layout = asFace
    ? { position: "absolute", inset: 0, zIndex }
    : gridPosition
    ? {
        gridColumn: `${gridPosition.colStart} / ${gridPosition.colEnd}`,
        gridRow: `${gridPosition.rowStart} / ${gridPosition.rowEnd}`,
        position: "relative",
        zIndex,
      }
    : { position: "relative", zIndex };

  const card = {
    position: "absolute",
    inset: 0,
    width: "100%",
    height: "100%",
    borderRadius: radius,
    overflow: "hidden",
    background,
    border: `1px solid ${borderColor}`,
    boxShadow: elevation ? "0 8px 24px rgba(0,0,0,.12)" : "none",
    color: "#fff",
    touchAction: "manipulation",
    WebkitTapHighlightColor: "transparent",
    // the enclosing flipper provides the actual ratio-height via ratio box
    // this face simply fills that box; aspectRatio is kept for parity
    ...(aspectRatio ? { aspectRatio } : {}),
    ...style,
  };

  return (
    <article
      id={id}
      className={`ugc-card-bbase ${className}`}
      role="region"
      aria-label={ariaLabel}
      tabIndex={-1}
      style={layout}
    >
      <div style={card}>{children}</div>
    </article>
  );
}

UGC_Card_BBase.propTypes = {
  id: PropTypes.string.isRequired,
  gridPosition: PropTypes.shape({
    colStart: PropTypes.number,
    colEnd: PropTypes.number,
    rowStart: PropTypes.number,
    rowEnd: PropTypes.number,
  }),
  asFace: PropTypes.bool,
  zIndex: PropTypes.number,
  radius: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  aspectRatio: PropTypes.string,
  background: PropTypes.string,
  borderColor: PropTypes.string,
  elevation: PropTypes.bool,
  ariaLabel: PropTypes.string,
  children: PropTypes.node,
  style: PropTypes.object,
  className: PropTypes.string,
};

export default memo(UGC_Card_BBase);
