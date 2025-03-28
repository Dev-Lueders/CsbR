import React from "react";
import PropTypes from "prop-types";
import "../../components_styles.css";

const Scroll_Bar = ({ height, width, children, gridPosition }) => {
  // Define grid styles using optional chaining
  const gridStyles = {
    gridColumn: gridPosition?.col || "auto",
    gridRow: gridPosition?.row || "auto",
  };

  return (
    <div
      className="custom-scrollbar"
      style={{
        ...gridStyles,
        height,
        width,
        overflowY: "auto",
        overflowX: "hidden", // Prevent horizontal overflow
        display: "grid",
        WebkitOverflowScrolling: "touch", // Smooth scrolling on iOS
      }}
      aria-label="Scrollable container"
      aria-live="polite" // Accessibility for dynamic content
    >
      {children}
    </div>
  );
};

Scroll_Bar.propTypes = {
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  children: PropTypes.node.isRequired,
  gridPosition: PropTypes.shape({
    col: PropTypes.string,
    row: PropTypes.string,
  }),
};

Scroll_Bar.defaultProps = {
  gridPosition: {
    col: "auto",
    row: "auto",
  },
};

export default Scroll_Bar;
