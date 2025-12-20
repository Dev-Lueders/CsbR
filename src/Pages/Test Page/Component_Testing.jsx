// src/Pages/Test Page/Component_Testing.jsx
import React, { useMemo} from "react";

import Page_Frame from "../../components/Organism/Page_Frame.jsx";
import UGC_Card_Render from "../../components/Organism/UGC_Card_Render.jsx";

export default function Testing_Components() {
 
  // ~8 columns wide x 9 rows tall in a 36×36 grid
  const area = useMemo(
    () => ({ colStart: 7, colEnd: 15, rowStart: 6, rowEnd: 15 }),
    []
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
            zIndex: "1",
          }}
        >
          <UGC_Card_Render
            cardId="demo-ugc-420"
            gridPosition={area}
            onToggle={(next) => console.log("flip:", next)}
          
          />
        </div>
      }
      mediaContent={null}
      statsContent={null}
    />
  );
}
