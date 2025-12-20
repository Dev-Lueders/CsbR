// src/components/Molecules/UGC/UGC_Card_BBottom.jsx
import React, { memo } from "react";
import PropTypes from "prop-types";

/**
 * Back bottom bar (actions live on the back):
 *  - LEFT: optional leftSlot (chips/badges if you ever want them)
 *  - RIGHT: Save (toggle), Share, Flag
 *
 * Notes:
 *  - Clicks stopPropagation so they don't trigger the flipper.
 *  - Uses a dark gradient & blur to match other overlays.
 *  - Keep actions here (back face). Front keeps read-only stats like views.
 */
function UGC_Card_BBottom({
  saved, // boolean state for Save toggle
  onToggleSave, // () => void
  onShare, // optional override handler
  shareHref, // URL to share/copy/open if no onShare
  copyOnShare = true, // copy to clipboard when Share is clicked (fallback if no navigator.share)
  onFlag, // () => void
  compact = false,
  leftSlot = null, // optional content on the left
  rightSlot = null, // optional content on the far right (after buttons)
  style = {},
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
    background: "linear-gradient(0deg, rgba(0,0,0,.60), rgba(0,0,0,.28))",
    color: "#fff",
    borderBottomLeftRadius: "inherit",
    borderBottomRightRadius: "inherit",
    backdropFilter: "blur(2px)",
    WebkitBackdropFilter: "blur(2px)",
    ...style,
  };

  const pillBtn = {
    display: "inline-flex",
    alignItems: "center",
    gap: 8,
    padding: compact ? "6px 10px" : "8px 12px",
    borderRadius: 999,
    border: "1px solid rgba(255,255,255,.35)",
    background: "rgba(255,255,255,.08)",
    color: "#fff",
    cursor: "pointer",
    userSelect: "none",
    fontSize: compact ? 12 : 13,
    lineHeight: 1,
  };

  const btnIcon = { fontSize: compact ? 14 : 16 };

  async function handleShare(e) {
    e.stopPropagation();
    if (onShare) {
      onShare();
      return;
    }
    const url =
      shareHref || (typeof window !== "undefined" ? window.location.href : "");
    try {
      if (navigator?.share && url) {
        await navigator.share({ url });
        return;
      }
    } catch {
      // ignore and fall through to copy/open fallback
    }
    if (copyOnShare && navigator?.clipboard && url) {
      try {
        await navigator.clipboard.writeText(url);
        return;
      } catch {
        // ignore and fall through
      }
    }
    if (url) window.open(url, "_blank", "noopener,noreferrer");
  }

  return (
    <div className="ugc-bbottom" style={wrap}>
      <div style={bar}>
        {/* Left side (optional) */}
        {leftSlot}

        {/* Spacer */}
        <div style={{ flex: 1 }} />

        {/* Save toggle */}
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onToggleSave?.();
          }}
          aria-pressed={!!saved}
          aria-label={saved ? "Unsave" : "Save"}
          title={saved ? "Unsave" : "Save"}
          style={pillBtn}
          data-testid="bbottom-save"
        >
          <span aria-hidden="true" style={btnIcon}>
            {saved ? "✅" : "🔖"}
          </span>
          <span>{saved ? "Saved" : "Save"}</span>
        </button>

        {/* Share */}
        <button
          type="button"
          onClick={handleShare}
          aria-label="Share"
          title="Share"
          style={pillBtn}
          data-testid="bbottom-share"
        >
          <span aria-hidden="true" style={btnIcon}>
            📤
          </span>
          <span>Share</span>
        </button>

        {/* Flag */}
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onFlag?.();
          }}
          aria-label="Report / Flag"
          title="Report / Flag"
          style={pillBtn}
          data-testid="bbottom-flag"
        >
          <span aria-hidden="true" style={btnIcon}>
            🚩
          </span>
          <span>Flag</span>
        </button>

        {/* Optional far-right slot */}
        {rightSlot}
      </div>
    </div>
  );
}

UGC_Card_BBottom.propTypes = {
  saved: PropTypes.bool,
  onToggleSave: PropTypes.func,
  onShare: PropTypes.func,
  shareHref: PropTypes.string,
  copyOnShare: PropTypes.bool,
  onFlag: PropTypes.func,
  compact: PropTypes.bool,
  leftSlot: PropTypes.node,
  rightSlot: PropTypes.node,
  style: PropTypes.object,
};

UGC_Card_BBottom.defaultProps = {
  saved: false,
  onToggleSave: undefined,
  onShare: undefined,
  shareHref: undefined,
  copyOnShare: true,
  onFlag: undefined,
  compact: false,
  leftSlot: null,
  rightSlot: null,
  style: {},
};

export default memo(UGC_Card_BBottom);
