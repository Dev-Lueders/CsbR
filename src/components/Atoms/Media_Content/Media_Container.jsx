import React from 'react';
import { useSelector } from 'react-redux';
import "bootstrap/dist/css/bootstrap.min.css";
import "../../components_styles.css";
import PropTypes from 'prop-types';

const Media_Container = ({ ME_Style, children }) => {
  const selector_Media_Container = useSelector(state => state.ME_Box || []);

  return (
    <div className="Media_Content"
      style={ME_Style}
      role="region"
      aria-label="Media Section">

      <h3 className="ME_class">Media Content</h3>
      {children}
    </div>
  );
};

Media_Container.propTypes = {
  ME_Style: PropTypes.object,
  children: PropTypes.node,
  mediaType: PropTypes.oneOf(['map', 'image', 'video'])

};

Media_Container.defaultProps = {
  ME_Style: {},
};

export default Media_Container;