// Page_Grid.jsx
import React from "react";
import PropTypes from "prop-types";

// Minimal MVP Grid Wrapper
const Page_Grid = ({
  id,
  className,
  style,
  children,
  gridColumn,
  gridRow,
  zIndex,
  opacity,
  isVisible,
}) => {
  if (!isVisible) return null;

  return (
    <div
      id={id}
      className={className}
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(100px, 1fr))",
        gridTemplateRows: "repeat(auto-fit, minmax(100px, 1fr))",
        width: "100vw",
        height: "100vh",
        ...style,
      }}
    >
      <div
        style={{
          gridColumn: gridColumn || "auto",
          gridRow: gridRow || "auto",
          zIndex: zIndex || 1,
          opacity: opacity || 1,
          position: "relative",
        }}
      >
        {children}
      </div>
    </div>
  );
};

Page_Grid.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.object,
  children: PropTypes.node.isRequired,
  gridColumn: PropTypes.string,
  gridRow: PropTypes.string,
  zIndex: PropTypes.number,
  opacity: PropTypes.number,
  isVisible: PropTypes.bool,
};

Page_Grid.defaultProps = {
  gridColumn: "auto",
  gridRow: "auto",
  zIndex: 1,
  opacity: 1,
  isVisible: true,
  style: {},
};

export default Page_Grid;
