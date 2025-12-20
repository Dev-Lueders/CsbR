// src/components/Molecules/UGC/UGC_Card_TopBar.jsx
import React, { memo } from "react";
import PropTypes from "prop-types";

/** Tiny star renderer (★ ☆) */
function Stars({ value, max }) {
  const v = Math.max(0, Math.min(max, Number.isFinite(value) ? value : 0));
  const full = Math.floor(v);
  const half = v - full >= 0.5 ? 1 : 0;
  const empty = max - full - half;
  return (
    <span aria-hidden="true" style={{ letterSpacing: 1 }}>
      {"★".repeat(full)}
      {half ? "⯨" : "" /* fallback half star */}
      {"☆".repeat(empty)}
    </span>
  );
}
Stars.propTypes = { value: PropTypes.number, max: PropTypes.number };
Stars.defaultProps = { value: 0, max: 5 };

function UGC_Card_TopBar({
  rating, // 0..5 (supports halves)
  ratingMax,
  ratingCount, // optional, not shown if undefined
  gameName,
  creatorName,
  onTip, // open your tip flow
  compact, // smaller paddings/text if true
  style,
}) {
  // Container overlays the top edge of UGC_Card_Base
  const wrap = {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    pointerEvents: "none", // so clicks pass through except on inner content
  };
  const bar = {
    pointerEvents: "auto",
    display: "flex",
    alignItems: "center",
    gap: 8,
    padding: compact ? "6px 10px" : "8px 12px",
    background:
      "linear-gradient(180deg, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.25) 100%)",
    color: "#fff",
    borderTopLeftRadius: "inherit",
    borderTopRightRadius: "inherit",
    backdropFilter: "blur(2px)",
    WebkitBackdropFilter: "blur(2px)",
    ...style,
  };
  const text = {
    margin: 0,
    lineHeight: 1.1,
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
  };
  const meta = {
    fontSize: compact ? 11 : 12,
    opacity: 0.85,
    display: "flex",
    gap: 6,
    alignItems: "center",
  };
  const tipBtn = {
    marginLeft: "auto",
    padding: compact ? "6px 10px" : "8px 12px",
    borderRadius: 999,
    border: "1px solid rgba(255,255,255,.35)",
    background: "rgba(255,255,255,.08)",
    color: "#fff",
    cursor: "pointer",
  };

  return (
    <div className="ugc-topbar" style={wrap}>
      <div style={bar}>
        {/* Rating */}
        <div
          role="img"
          aria-label={`Rating ${rating}/${ratingMax}${
            ratingCount ? ` from ${ratingCount} ratings` : ""
          }`}
          title={`${rating}/${ratingMax}${
            ratingCount ? ` • ${ratingCount}` : ""
          }`}
          style={{
            display: "flex",
            alignItems: "center",
            gap: 6,
            fontSize: compact ? 12 : 14,
          }}
        >
          <Stars value={rating} max={ratingMax} />
          <span style={{ fontWeight: 600 }}>
            {Number(rating ?? 0).toFixed(1)}
          </span>
          {Number.isFinite(ratingCount) && (
            <span style={{ opacity: 0.75 }}>({ratingCount})</span>
          )}
        </div>

        {/* Names */}
        <div style={{ ...meta, marginLeft: 8 }}>
          <h4 style={{ ...text, fontSize: compact ? 12 : 13, maxWidth: 160 }}>
            {gameName}
          </h4>
          <span aria-hidden="true">•</span>
          <h4 style={{ ...text, fontSize: compact ? 12 : 13, maxWidth: 140 }}>
            {creatorName}
          </h4>
        </div>

        {/* Tip */}
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onTip?.();
          }}
          aria-label="Open tip"
          style={tipBtn}
        >
          💰 Tip
        </button>
      </div>
    </div>
  );
}

UGC_Card_TopBar.propTypes = {
  rating: PropTypes.number,
  ratingMax: PropTypes.number,
  ratingCount: PropTypes.number,
  gameName: PropTypes.string.isRequired,
  creatorName: PropTypes.string.isRequired,
  onTip: PropTypes.func,
  compact: PropTypes.bool,
  style: PropTypes.object,
};

UGC_Card_TopBar.defaultProps = {
  rating: 0,
  ratingMax: 5,
  ratingCount: undefined,
  onTip: undefined,
  compact: false,
  style: {},
};

export default memo(UGC_Card_TopBar);
