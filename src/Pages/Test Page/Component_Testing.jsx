// src/Pages/Test Page/Component_Testing.jsx
import React, { useMemo, useState } from "react";

import Page_Frame from "../../components/Organism/Page_Frame.jsx";
import UGC_Card_Flipper from "../../components/Molecules/UGC/UGC_Card/UGC_Card_Flipper.jsx";
import UGC_Card_FBase from "../../components/Molecules/UGC/UGC_Card/UGC_Card_FBase.jsx";
import UGC_Card_FTop from "../../components/Molecules/UGC/UGC_Card/UGC_Card_FTop.jsx";
import UGC_Card_FBottom from "../../components/Molecules/UGC/UGC_Card/UGC_Card_FBottom.jsx";
import UGC_Card_BBase from "../../components/Molecules/UGC/UGC_Card/UGC_Card_BBase.jsx";
import UGC_Card_BTop from "../../components/Molecules/UGC/UGC_Card/UGC_Card_BTop.jsx";
import UGC_Card_BBottom from "../../components/Molecules/UGC/UGC_Card/UGC_Card_BBottom.jsx";

export default function Testing_Components() {
  const [saved, setSaved] = useState(false);
  const [counts, setCounts] = useState({ dig: 42, bury: 3, tips: 0 });

  const handleDig = () => setCounts((c) => ({ ...c, dig: c.dig + 1 }));
  const handleBury = () => setCounts((c) => ({ ...c, bury: c.bury + 1 }));
  const handleTip = () => {
    alert("Tip jar opens (mock)");
    setCounts((c) => ({ ...c, tips: c.tips + 1 }));
  };

  // ~8 columns wide x 9 rows tall in a 36×36 grid
  const area = useMemo(
    () => ({ colStart: 7, colEnd: 15, rowStart: 6, rowEnd: 15 }),
    []
  );

  // Replace with <img> or <video> when you have media
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

  const frontFace = (
    <UGC_Card_FBase
      id="front-base"
      gridPosition={area}
      aspectRatio="16/9"
      elevation
      background="#0f172a"
      borderColor="#1f2937"
      onOpen={() => {}}
    >
      <div style={{ position: "relative", width: "100%", height: "100%" }}>
        {media}

        <UGC_Card_FTop
          rating={4.5}
          ratingMax={5}
          ratingCount={128}
          gameName="PGA 2K23"
          creatorName="LocknKey"
          onTip={handleTip}
        />

        {/* Action buttons (unstyled) */}
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
          <button type="button" onClick={handleDig} aria-label="Dig this">
            👍 {counts.dig}
          </button>
          <button type="button" onClick={handleBury} aria-label="Bury this">
            👎 {counts.bury}
          </button>
          <button type="button" onClick={handleTip} aria-label="Tip creator">
            💰 {counts.tips}
          </button>
        </div>

        <UGC_Card_FBottom views={1337} />
      </div>
    </UGC_Card_FBase>
  );

  const backFace = (
    <UGC_Card_BBase
      id="back-base"
      gridPosition={area}
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
          creatorId="c-locknkey"
          creatorName="LocknKey"
          ugcNumber="UGC-00420"
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
          onToggleSave={() => setSaved((s) => !s)}
          onShare={() => alert("Share (mock)")}
          onFlag={() => alert("Report (mock)")}
        />
      </div>
    </UGC_Card_BBase>
  );

  const mainCard = (
    <UGC_Card_Flipper
      id="demo-ugc-420"
      gridPosition={area}
      radius={16}
      durationMs={420}
      onToggle={(next) => console.log("flip:", next)}
      front={frontFace}
      back={backFace}
    />
  );

  return (
    <Page_Frame
      topNavbar={null}
      leftNavbar={null}
      bottomNavbar={null}
      mainContent={
        <div
          style={{
            position: "relative",
            display: "grid",
            gridTemplateColumns: "repeat(36, 1fr)",
            gridAutoRows: "minmax(24px, 1fr)",
            minHeight: "70vh",
            zIndex:"1",
          }}
        >
          {mainCard}
        </div>
      }
      mediaContent={null}
      statsContent={null}
    />
  );
}
