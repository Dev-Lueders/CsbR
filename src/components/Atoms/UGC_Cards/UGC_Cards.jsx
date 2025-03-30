import React from 'react';
import { useSelector } from 'react-redux'

import PropTypes from 'prop-types';

const UGC_Card =({UGC_Style, children, mediaSrc, alt, gridPosition }) => {

    return(
        <div className="UGC_Content"
            style={{ ...UGC_Style, gridArea: gridPosition }}
        role="marquee"
        aria-label="User Generated Content"
        >
            <img src={mediaSrc} alt={alt || "User Generated Content"} loading="lazy" />
            {children}

        
        </div>
    );
};

UGC_Card.propTypes = {
    UGC_Style: PropTypes.object,
    children: PropTypes.node,
    mediaSrc: PropTypes.oneOfType([PropTypes.string,PropTypes.object]), 
    alt: PropTypes.string,
    gridPosition: PropTypes.string.isRequired,
}
UGC_Card.defaultProps ={
    UGC_Style: {},
    alt: 'User Generated Content',
    children:[]
};

export default UGC_Card