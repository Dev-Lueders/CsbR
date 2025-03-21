import React from 'react';
import { useSelector } from 'react-redux'
import "bootstrap/dist/css/bootstrap.min.css"
import PropTypes from 'prop-types';

const UGC_Card =({UGC_Style, children }) => {

    return(
        <div className="UGC_Content"
        style={UGC_Style}
        role="marquee"
        aria-label="User Generated Content"
        >
        
        </div>
    );
};

UGC_Card.propTypes = {
    UGC_Style: PropTypes.object,
    children: PropTypes.node,
    mediaType: PropTypes.oneOf (['image','video'])
}
UGC_Card.defaultProps ={
    UGC_Style: {},
};

export default UGC_Card