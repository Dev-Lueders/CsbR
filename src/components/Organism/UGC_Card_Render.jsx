import UGC_Card_Back_Render from "../Molecules/UGC/UGC_Card/Back_Card/UGC_Card_Back_Render"
import UGC_Card_Front_Render from "../Molecules/UGC/UGC_Card/Front_Card/UGC_Card_Front_Render"
import UGC_Card_Flipper from "../Molecules/UGC/UGC_Card/UGC_Card_Flipper";
import React, {memo, useState, useCallback} from "react";
import PropTypes from "prop-types";

const UGC_Card_Render = () => {

    return (
        <>
            <UGC_Card_Flipper>
            <UGC_Card_Front_Render />
            <UGC_Card_Back_Render />
            </UGC_Card_Flipper>
            
        </>
    )
}



export default UGC_Card_Render;