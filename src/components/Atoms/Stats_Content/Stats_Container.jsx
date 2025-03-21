import React from 'react';
import { useSelector } from 'react-redux';
import "bootstrap/dist/css/bootstrap.min.css";
import "../../components_styles.css";
import PropTypes from 'prop-types';

const Stats_Container = ({ SC_Style, children }) => {
  const selector_Stats_Container = useSelector(state => state.SC_Box || []);

  return (
    <div className="Stats_Content"
      style={SC_Style}
      role="region"
      aria-label="Statistics Section">

      <h3 className="SC_class">Stats Content</h3>
      {children}
    </div>
  );
};

Stats_Container.propTypes = {
  SC_Style: PropTypes.object,
  children: PropTypes.node,
  mediaType: PropTypes.oneOf(['map', 'image', 'video'])

};

Stats_Container.defaultProps = {
  SC_Style: {},
};

export default Stats_Container;