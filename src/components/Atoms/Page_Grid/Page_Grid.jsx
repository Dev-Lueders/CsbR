import PropTypes from 'prop-types';
const Page_Grid = ({ children, className = '', role ='main', style={}, ...props }) => {
    return (
        <div className={`Page_Grid ${className}`} role={role} style={style} {...props}>
            {children}

        </div>
    );
};
    Page_Grid.propTypes = {
        children: PropTypes.node.isRequired,
        className: PropTypes.string,
        role: PropTypes.string,
        style: PropTypes.object,
    
}
Page_Grid.defaultProps = {
    className: '',
    role: 'main',
    style: {},

};


export default Page_Grid;