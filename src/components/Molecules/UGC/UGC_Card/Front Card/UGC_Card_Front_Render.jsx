import React from "react";
import PropTypes from "prop-types";

import UGC_Card_FBase from "../Front Card/UGC_Card_FBase";
import UGC_Card_FTop from "../Front Card/UGC_Card_FTop";
import UGC_Card_FBottom from "../Front Card/UGC_Card_FBottom";

/**
 * Renders the **front face** of the UGC card.
 * Keep this dumb: pure presentational. All state/handlers come from parent.
 */
const UGC_Card_Front_Render = ({
  rating = 0,
  ratingMax = 5,
  ratingCount,
  gameName = "",
  creatorName = "",
  onTip,
  onDig,
  onBury,
  views = 0,
  digCount = 0,
  buryCount = 0,
}) => {
  const media = (
    <div
      aria-label="UGC media placeholder"
      style={{
        position: "absolute",
        inset: 0,
        display: "grid",
        placeItems: "center",
        color: "#cfe3ff",
        fontWeight: 600,
        fontSize: 18,
        letterSpacing: 0.25,
        userSelect: "none",
        background:
          "linear-gradient(135deg, rgba(255,255,255,.08), rgba(255,255,255,.02))",
      }}
    >
      UGC MEDIA
    </div>
  );

  return (
    <UGC_Card_FBase
      id="front-base"
      aspectRatio="16/9"
      elevation
      background="#0f172a"
      borderColor="#1f2937"
      onOpen={() => {}}
    >
      <div style={{ position: "relative", width: "100%", height: "100%" }}>
        {media}

        <UGC_Card_FTop
          rating={rating}
          ratingMax={ratingMax}
          ratingCount={ratingCount}
          gameName={gameName}
          creatorName={creatorName}
          onTip={onTip}
        />

        {/* Quick actions (front: social signals only) */}
        <div
          aria-label="Actions"
          style={{
            position: "absolute",
            left: 12,
            bottom: 56,
            display: "flex",
            gap: 10,
            zIndex: 3,
          }}
        >
          <button type="button" onClick={onDig} aria-label="Dig this">
            👍 {digCount}
          </button>
          <button type="button" onClick={onBury} aria-label="Bury this">
            👎 {buryCount}
          </button>
          <button type="button" onClick={onTip} aria-label="Tip creator">
            💰
          </button>
        </div>

        <UGC_Card_FBottom views={views} />
      </div>
    </UGC_Card_FBase>
  );
};

UGC_Card_Front_Render.propTypes = {
  rating: PropTypes.number,
  ratingMax: PropTypes.number,
  ratingCount: PropTypes.number,
  gameName: PropTypes.string,
  creatorName: PropTypes.string,
  onTip: PropTypes.func,
  onDig: PropTypes.func,
  onBury: PropTypes.func,
  views: PropTypes.number,
  digCount: PropTypes.number,
  buryCount: PropTypes.number,
};

export default UGC_Card_Front_Render;