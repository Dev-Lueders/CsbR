
import React, {useCallback, useMemo, useState} from "react";
import PropTypes from "prop-types";

import UGC_Card_Back_Render from "../Molecules/UGC/UGC_Card/Back_Card/UGC_Card_Back_Render";
import UGC_Card_Front_Render from "../Molecules/UGC/UGC_Card/Front_Card/UGC_Card_Front_Render";
import UGC_Card_Flipper from "../Molecules/UGC/UGC_Card/UGC_Card_Flipper";

const DEFAULT_COUNTS = { dig: 0, bury: 0, tips: 0 };



const normalizeCounts = (counts) =>({
    dig: Number(counts?.dig ?? DEFAULT_COUNTS.dig),
    bury: Number(counts?.bury ?? DEFAULT_COUNTS.bury),
    tips: Number(counts?.tips ?? DEFAULT_COUNTS.tips),
})

const UGC_Card_Render = ({
cardId,
gridPosition,
cardWidth,
aspectRatio,
radius,
durationMs,
rating,
ratingMax,
ratingCount,
gameName,
creatorName,
views,
creatorId,
ugcNumber,
initialSaved,
initialCounts,
onShare,
onFlag,
onToggle,
}) => {
    const [saved, setSaved] = useState(initialSaved);
    const [counts, setCounts] = useState(() => normalizeCounts(initialCounts));

    const handleDig = useCallback(
        () => setCounts((prev) => ({ ...prev, dig: prev.dig + 1 })),
        []
);
const handleBury = useCallback(
    () => setCounts((prev) => ({ ...prev, bury: prev.bury + 1 })),
    []
);

const handleTip = useCallback(() => {
    alert("Tip jar opens(mock)");
    setCounts((prev) => ({ ...prev, tips: prev.tips + 1 }));
}, []);

const frontFace = useMemo(
    () => (
        <UGC_Card_Front_Render
            rating={rating}
            ratingMax={ratingMax}
            ratingCount={ratingCount}
            gameName={gameName}
            creatorName={creatorName}
            onTip={handleTip}
            onDig={handleDig}
            onBury={handleBury}
            views={views}
            digCount={counts.dig}
            buryCount={counts.bury}
        />
    ),
    [
        creatorName,
        gameName,
        handleBury,
        handleDig,
        handleTip,
        rating,
        ratingCount,
        ratingMax,
        views,
        counts.dig,
        counts.bury,
    ]
);

const backFace = useMemo(
    () => (
        <UGC_Card_Back_Render
            creatorId={creatorId}
            creatorName={creatorName}
            ugcNumber={ugcNumber}
            saved={saved}
            onToggleSave={() => setSaved((prev) => !prev)}
            onShare={onShare}
            onFlag={onFlag}
        />
    ),
    [creatorId, creatorName, onFlag, onShare, saved, ugcNumber]
);


return (
    <UGC_Card_Flipper
        id={cardId}
        gridPosition={gridPosition}
        cardWidth={cardWidth}
        aspectRatio={aspectRatio}
        radius={radius}
        durationMs={durationMs}
        onToggle={onToggle}
        front={frontFace}
        back={backFace}
    />
);
};

UGC_Card_Render.propTypes = {
    cardId: PropTypes.string,
    gridPosition: PropTypes.shape({
        colStart: PropTypes.number,
        colEnd: PropTypes.number,
        rowStart: PropTypes.number,
        rowEnd: PropTypes.number,
    }),
    cardWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    aspectRatio: PropTypes.string,
    radius: PropTypes.number,
    durationMs: PropTypes.number,
    rating: PropTypes.number,
    ratingMax: PropTypes.number,
    ratingCount: PropTypes.number,
    gameName: PropTypes,
    creatorName: PropTypes.string,
    views: PropTypes.number,
    creatorId: PropTypes.string,
    ugcNumber: PropTypes.string,
    initialSaved: PropTypes.bool,
    initialCounts: PropTypes.shape({
        dig: PropTypes.number,
        bury: PropTypes.number,
        tips: PropTypes.number,
    }),
    onShare: PropTypes.func,
    onFlag: PropTypes.func,
    onToggle: PropTypes.func,

};

UGC_Card_Render.defaultProps = {
    gridPosition: {
        colStart: 7,
        colEnd: 15,
        rowStart: 6,
        rowEnd: 15,
    },
    cardWidth: "520px",
    aspectRatio: "16/9",
    radius: 16,
    durationMs: 420,
    rating: 4.5,
    ratingCount: 128,
    gameName: "PGA 2K23",
    creatorName: "LocknKey",
    views: 1337,
    creatorId: "c-locknkey",
    ugcNumber: "UGC-00420",
    initialSaved: false,
    initialCounts: { dig: 42, bury: 3, tips: 0 },
    onShare: () => alert("share (mock)"),
    onFlag: () => alert("Report(mock)"),
    onToggle: () => { },
};

export default UGC_Card_Render;

