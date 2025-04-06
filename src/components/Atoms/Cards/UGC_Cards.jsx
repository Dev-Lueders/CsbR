import React from 'react';
import { useSelector } from 'react-redux'

import PropTypes from 'prop-types';

const UGC_Card =({UGC_Style, children, mediaSrc, alt, gridPosition }) => {

    return (
        console.log('UGC_Card', children, mediaSrc,alt, gridPosition),
        <div className="Class_UGC_Card"
            style={{ ...UGC_Style, gridArea: gridPosition, opacity:.75, zIndex: 1 }}
            role="marquee"
            aria-label="User Generated Content Card"
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
    isVisible: PropTypes.bool,
    zIndex: PropTypes.number,
    opacity: PropTypes.number,
    passProps: PropTypes.object
}
UGC_Card.defaultProps = {
    
    UGC_Style: {},
    alt: 'User Generated Content',
    children: [],
    gidPosition: '20/36',
    isVisible: false,
    opacity: 1,
    zIndex:1,
    passProps: []
    

};

export default UGC_Card