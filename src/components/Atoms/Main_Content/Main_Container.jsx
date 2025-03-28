import React from 'react';
import { useSelector } from 'react-redux';
import "../../components_styles.css";
import PropTypes from 'prop-types';

const Main_Container = ({ MC_Style, children }) => {
  const selector_Main_Container = useSelector(state => state.MC_Box || []);
  return (
    <div className="Main_Content"
      style={MC_Style}
      role="region"
      aria-label="Main Content">

      <h3 className="MC_class"></h3>
      {children}
    </div>
  );
};

Main_Container.propTypes = {
  MC_Style: PropTypes.object,
  children: PropTypes.node,
  mediaType: PropTypes.oneOf(['map', 'image', 'video'])

};

Main_Container.defaultProps = {
  MC_Style: {},
};

export default Main_Container;