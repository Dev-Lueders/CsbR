import React from 'react';
import { useSelector } from 'react-redux';
import "../../components_styles.css";
import PropTypes from 'prop-types';

const Main_Container = ({  style, children }) => {
  const selector_Main_Container = useSelector(state => state.MC_Box || []);
  return (
    <div className="Main_Content"
      style={style}
      role="region"
      aria-label="Main Content">

      <h3 className="MC_class"></h3>
      {children}
    </div>
  );
};

Main_Container.propTypes = {
  
  children: PropTypes.node,
  mediaType: PropTypes.oneOf(['map', 'image', 'video']),
  style: PropTypes.object,
};

Main_Container.defaultProps = {
  style: {},
};

export default Main_Container;