import PropTypes from 'prop-types'
import grid_Props from '../Props/def_Props/grid_Props'

const Modular_Wrapper = ({id, className, style, children, gridProps, gridColumn, gridRow, zIndex, opacity, isVisible, passProps, mergedProps}) => {
    
    return (
        <div style={{...gridProps}}>
            {children}
   
    
        </div>
 
        
    )
}

     Modular_Wrapper.propTypes = {
       id: PropTypes.string.isRequired,
       className: PropTypes.string,
       style: PropTypes.object,
       children: PropTypes.node.isRequired,
       gridProps: PropTypes.string.isRequired,
       gridColumn: PropTypes.string,
       gridRow: PropTypes.string,
       zIndex: PropTypes.number,
       opacity: PropTypes.number,
       isVisible: PropTypes.bool,
       passProps: PropTypes.object,
       mergedProps: PropTypes.object,
     };

     Modular_Wrapper.defaultProps = {
       id: "IDdef_comp",
       className: "clsNMdef_comp",
         style: {},
    //    grid: ,
       gridColumn: 10 / 20,
       gridRow: 10 / 20,
       zIndex: 42,
       opacity: 1,
       isVisible: false,
       passProps: {},
       mergedProps: {},
     };

export default Modular_Wrapper;