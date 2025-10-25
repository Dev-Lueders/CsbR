// src/components/Molecules/UGC/UGC_Card_FBottom.jsx
import React, { memo } from "react";
import PropTypes from "prop-types";

/**
 * Front bottom bar for the public UGC card (MVP-safe):
 * - LEFT: views count (read-only)
 * - RIGHT: (optional) extraSlot for chips/badges later — stays empty by default
 * NO save, NO flag, NO share here (those belong on the back face).
 *
 * Render as a child of UGC_Card_Base.
 */
function UGC_Card_FBottom({
  views,
  viewsIconSrc, // optional custom icon; defaults to 👁
  compact,
  extraSlot, // optional React node for future-safe additions
  style,
}) {
  const wrap = {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    pointerEvents: "none",
  };

  const bar = {
    pointerEvents: "auto",
    display: "flex",
    alignItems: "center",
    gap: 10,
    padding: compact ? "6px 10px" : "8px 12px",
    background:
      "linear-gradient(0deg, rgba(0,0,0,.55) 0%, rgba(0,0,0,.25) 100%)",
    color: "#fff",
    borderBottomLeftRadius: "inherit",
    borderBottomRightRadius: "inherit",
    backdropFilter: "blur(2px)",
    WebkitBackdropFilter: "blur(2px)",
    ...style,
  };

  const icon = {
    width: compact ? 18 : 20,
    height: compact ? 18 : 20,
    objectFit: "contain",
    display: "block",
  };
  const pill = {
    display: "inline-flex",
    alignItems: "center",
    gap: 6,
    padding: compact ? "4px 8px" : "6px 10px",
    borderRadius: 999,
    border: "1px solid rgba(255,255,255,.35)",
    background: "rgba(255,255,255,.08)",
    color: "#fff",
    userSelect: "none",
    cursor: "default",
  };

  const count = { fontSize: compact ? 12 : 13, fontWeight: 600 };

  return (
    <div className="ugc-fBottom" style={wrap}>
      <div style={bar}>
        {/* Views (read-only) */}
        <div
          aria-label={`${views ?? 0} views`}
          title={`${views ?? 0} views`}
          style={pill}
          data-testid="views-pill"
        >
          {viewsIconSrc ? (
            <img src={viewsIconSrc} alt="" aria-hidden="true" style={icon} />
          ) : (
            <span aria-hidden="true">👁</span>
          )}
          <span style={count}>{views ?? 0}</span>
        </div>

        {/* Spacer */}
        <div style={{ flex: 1 }} />

        {/* Optional right-side slot (chips/badges later). Keep empty by default. */}
        {extraSlot ? <div data-testid="fbottom-extra">{extraSlot}</div> : null}
      </div>
    </div>
  );
}

UGC_Card_FBottom.propTypes = {
  views: PropTypes.number,
  viewsIconSrc: PropTypes.string,
  compact: PropTypes.bool,
  extraSlot: PropTypes.node,
  style: PropTypes.object,
};

UGC_Card_FBottom.defaultProps = {
  views: 0,
  viewsIconSrc: undefined,
  compact: false,
  extraSlot: null,
  style: {},
};

export default memo(UGC_Card_FBottom);
