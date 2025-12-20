// src/Pages/Test Page/Component_Testing.jsx
import React, { useMemo, useState } from "react";

import Page_Frame from "../../components/Organism/Page_Frame.jsx";
import UGC_Card_Flipper from "../../components/Molecules/UGC/UGC_Card/UGC_Card_Flipper.jsx";

// >>> Only these two faces <<<
import UGC_Card_Front_Render from "../../components/Molecules/UGC/UGC_Card/Front_Card/UGC_Card_Front_Render.jsx";
import UGC_Card_Back_Render from "../../components/Molecules/UGC/UGC_Card/Back_Card/UGC_Card_Back_Render.jsx";

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

  const frontFace = (
    <UGC_Card_Front_Render
      rating={4.5}
      ratingMax={5}
      ratingCount={128}
      gameName="PGA 2K23"
      creatorName="LocknKey"
      onTip={handleTip}
      onDig={handleDig}
      onBury={handleBury}
      views={1337}
      digCount={counts.dig}
      buryCount={counts.bury}
    />
  );

  const backFace = (
    <UGC_Card_Back_Render
      creatorId="c-locknkey"
      creatorName="LocknKey"
      ugcNumber="UGC-00420"
      saved={saved}
      onToggleSave={() => setSaved((s) => !s)}
      onShare={() => alert("Share (mock)")}
      onFlag={() => alert("Report (mock)")}
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
            zIndex: "0",
          }}
        >
          <UGC_Card_Flipper
            id="demo-ugc-420"
            gridPosition={area}
            cardWidth="520px"
            aspectRatio="16/9"
            radius={16}
            durationMs={420}
            onToggle={(next) => console.log("flip:", next)}
            front={frontFace}
            back={backFace}
          />
        </div>
      }
      mediaContent={null}
      statsContent={null}
    />
  );
}
