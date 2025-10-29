import React from "react";
import PropTypes from "prop-types";

import UGC_Card_BBase from "../Back Card/UGC_Card_BBase";
import UGC_Card_BTop from "../Back Card/UGC_Card_BTop";
import UGC_Card_BBottom from "../Back Card/UGC_Card_BBottom";

/**
 * Renders the **back face** of the UGC card.
 * Keep pure/presentational; state/handlers come from parent.
 */
const UGC_Card_Back_Render = ({
  creatorId = "",
  creatorName = "",
  ugcNumber = "",
  saved = false,
  onToggleSave,
  onShare,
  onFlag,
}) => {
  return (
    <UGC_Card_BBase
      id="back-base"
      aspectRatio="16/9"
      elevation
      background="#0f1115"
      ariaLabel="UGC card details"
      asFace
    >
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "100%",
          color: "#e6eef6",
        }}
      >
        <UGC_Card_BTop
          creatorId={creatorId}
          creatorName={creatorName}
          ugcNumber={ugcNumber}
          angleDeg={40}
        />

        <section
          style={{
            position: "absolute",
            inset: 56,
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 16,
            background: "rgba(255,255,255,0.02)",
            border: "1px solid rgba(255,255,255,0.06)",
            borderRadius: 12,
            padding: 16,
          }}
        >
          <div>
            <h3 style={{ margin: 0, fontSize: 16 }}>About this UGC</h3>
            <p style={{ margin: "8px 0 0", fontSize: 13, color: "#c8d2df" }}>
              Short description, tags, and creator notes go here. Keep this back
              face focused on management and deeper info.
            </p>
          </div>
          <div>
            <h3 style={{ margin: 0, fontSize: 16 }}>Stats</h3>
            <ul
              style={{
                margin: "8px 0 0",
                paddingLeft: 18,
                fontSize: 13,
                color: "#c8d2df",
              }}
            >
              <li>Dig/Bury breakdown (future)</li>
              <li>Tip jar history (future)</li>
              <li>Creation date + last update</li>
            </ul>
          </div>
        </section>

        <UGC_Card_BBottom
          saved={saved}
          onToggleSave={onToggleSave}
          onShare={onShare}
          onFlag={onFlag}
        />
      </div>
    </UGC_Card_BBase>
  );
};

UGC_Card_Back_Render.propTypes = {
  creatorId: PropTypes.string,
  creatorName: PropTypes.string,
  ugcNumber: PropTypes.string,
  saved: PropTypes.bool,
  onToggleSave: PropTypes.func,
  onShare: PropTypes.func,
  onFlag: PropTypes.func,
};

export default UGC_Card_Back_Render;
