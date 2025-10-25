import React, { useRef, useLayoutEffect, useState } from "react";
import PropTypes from "prop-types";
import { propTypes } from "react-bootstrap/esm/Image";

export default function Panel_Grid({
    children,
    className = "",
    role = "region",
    style = {},
    cols = 36,
    rowsTarget,
    fit = "contain",
    gap = "1px",
    cellAspect = 1,
    rows,
    debug = false,
    ...propTypes
}) {
    const ref = useRef(null);
    const [tile, stTile] = useState(null);

    const colValue =
        typeof cols === "number" ? `repeat(${cols}, 1fr)` : cols || "repeat(36,1fr)"; 
    
    const colCount = (() => {
        if (typeof cols === "number") return cols;
        const m = /repeat\(\s*(d+)/i.exec(colsValue);
        return m ? parseInt(m[1, 10) : 36;
    })();

    
    })
    }