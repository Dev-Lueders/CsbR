// UGC_Card_Flipper.jsx
import React, { useMemo, useState } from "react";
import PropTypes from "prop-types";

export default function UGC_Card_Flipper({
  id,
  className = "",
  style = {},

  // adjust the width here
  cardWidth = "520px",
  aspectRatio = "16 / 9",
  radius = 16,
  elevation = "md",

  gridPosition,
  zIndex,

  durationMs = 420,
  flipped,
  defaultFlipped = false,
  onToggle,
  toggleOnClick = false,
  toggleOnDblClick = true,
  toggleOnKeys = true,

  front,
  back,
  ariaLabel = "UGC card",
}) {
  const [uFlip, setUFlip] = useState(defaultFlipped);
  const isFlipped = typeof flipped === "boolean" ? flipped : uFlip;
  const setFlipped = (next) => {
    if (typeof flipped !== "boolean") setUFlip(next);
    onToggle?.(next);
  };

  const gridStyles = useMemo(() => {
    if (!gridPosition) return {};
    const { colStart, colEnd, rowStart, rowEnd } = gridPosition;
    return {
      gridColumn: colStart && colEnd ? `${colStart} / ${colEnd}` : undefined,
      gridRow: rowStart && rowEnd ? `${rowStart} / ${rowEnd}` : undefined,
    };
  }, [gridPosition]);

  const boxShadow =
    !elevation || elevation === false
      ? "none"
      : elevation === "lg"
      ? "0 18px 40px rgba(0,0,0,.35), 0 1px 0 rgba(255,255,255,.04) inset"
      : elevation === "sm"
      ? "0 6px 14px rgba(0,0,0,.25), 0 1px 0 rgba(255,255,255,.04) inset"
      : "0 12px 24px rgba(0,0,0,.30), 0 1px 0 rgba(255,255,255,.04) inset";

  const outerStyle = {
    ...gridStyles,
    zIndex,
    justifySelf: "center",
    alignSelf: "center",
    position: "relative",
    ...style,
  };

  // ⬇️ KEY PART: never exceed `cardWidth`
  const sizerStyle = {
    width: `min(100%, ${cardWidth})`,
    aspectRatio,
    borderRadius: radius,
    boxShadow,
    position: "relative",
    perspective: "1200px",
    overflow: "visible",
  };

  const stageStyle = {
    position: "relative",
    width: "100%",
    height: "100%",
    transformStyle: "preserve-3d",
    transition: `transform ${Math.max(
      1,
      durationMs
    )}ms cubic-bezier(.2,.8,.2,1)`,
    transform: isFlipped ? "rotateY(180deg)" : "none",
    borderRadius: "inherit",
  };

  const faceCommon = {
    position: "absolute",
    inset: 0,
    borderRadius: "inherit",
    overflow: "hidden",
    backfaceVisibility: "hidden",
    WebkitBackfaceVisibility: "hidden",
  };

  const handlers = {
    onClick: toggleOnClick ? () => setFlipped(!isFlipped) : undefined,
    onDoubleClick: toggleOnDblClick ? () => setFlipped(!isFlipped) : undefined,
    onKeyDown: toggleOnKeys
      ? (e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            setFlipped(!isFlipped);
          }
        }
      : undefined,
    role:
      toggleOnClick || toggleOnDblClick || toggleOnKeys ? "button" : "group",
    tabIndex: toggleOnClick || toggleOnDblClick || toggleOnKeys ? 0 : -1,
    "aria-pressed": isFlipped,
  };

  return (
    <div
      id={id}
      className={`ugc-card-flipper ${className}`}
      aria-label={ariaLabel}
      style={outerStyle}
    >
      <div style={sizerStyle} {...handlers}>
        <div style={stageStyle}>
          <div className="ugc-face-front" style={faceCommon}>
            {front}
          </div>
          <div
            className="ugc-face-back"
            style={{ ...faceCommon, transform: "rotateY(180deg)" }}
          >
            {back}
          </div>
        </div>
      </div>
    </div>
  );
}

UGC_Card_Flipper.propTypes = {
  id: PropTypes.string.isRequired,
  className: PropTypes.string,
  style: PropTypes.object,
  cardWidth: PropTypes.string, // ⬅️ new
  aspectRatio: PropTypes.string,
  radius: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  elevation: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.oneOf(["sm", "md", "lg"]),
  ]),
  gridPosition: PropTypes.shape({
    colStart: PropTypes.number,
    colEnd: PropTypes.number,
    rowStart: PropTypes.number,
    rowEnd: PropTypes.number,
  }),
  zIndex: PropTypes.number,
  durationMs: PropTypes.number,
  flipped: PropTypes.bool,
  defaultFlipped: PropTypes.bool,
  onToggle: PropTypes.func,
  toggleOnClick: PropTypes.bool,
  toggleOnDblClick: PropTypes.bool,
  toggleOnKeys: PropTypes.bool,
  front: PropTypes.node.isRequired,
  back: PropTypes.node.isRequired,
  ariaLabel: PropTypes.string,
};
