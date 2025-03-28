// Still needs functionality


import React from "react";
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../components_styles.css';

const Scroll_Bar = ({ height, width, children, gridPosition }) => {
  return (
    <div
      className="custom-scrollbar"
      style={{
        height,
        width,
        overflowY: 'auto',
        display: 'grid',
        gridColumn: gridPosition?.col || 'auto',
        gridRow: gridPosition?.row || 'auto',
      }}
      aria-label="Scrollable container"
    >
      {children}
    </div>
  );
};

Scroll_Bar.propTypes = {
  height: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  gridPosition: PropTypes.shape({
    col: PropTypes.string,
    row: PropTypes.string,
  }),
};

Scroll_Bar.defaultProps = {
  gridPosition: {
    col: 'auto',
    row: 'auto',
  },
};

export default Scroll_Bar;
