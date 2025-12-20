import React from "react";
import PropTypes from "prop-types";

export default function UGC_Card_FBase({
  id,
  aspectRatio = "16/9",
  radius = 16,
  background = "#0f172a",
  borderColor = "transparent",
  elevation = false,
  onOpen,
  children,
}) {
  return (
    <div
      id={id}
      role="article"
      onClick={onOpen}
      data-ugc-face="front"
      style={{
        position: "relative",
        width: "100%",
        aspectRatio, // keeps proportions
        borderRadius: radius, // full rounded corners
        overflow: "hidden", // enforces round corners for children
        background,
        border: `1px solid ${borderColor}`,
        boxShadow: elevation ? "0 10px 30px rgba(0,0,0,.35)" : "none",
        transformStyle: "preserve-3d",
        backfaceVisibility: "hidden",
      }}
    >
      {children}
    </div>
  );
}

UGC_Card_FBase.propTypes = {
  id: PropTypes.string,
  aspectRatio: PropTypes.string,
  radius: PropTypes.number,
  background: PropTypes.string,
  borderColor: PropTypes.string,
  elevation: PropTypes.bool,
  onOpen: PropTypes.func,
  children: PropTypes.node,
};
