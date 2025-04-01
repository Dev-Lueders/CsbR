import "../../components_styles.css";
import { Link } from "react-router-dom"; // Fixed import
import { Navbar, Nav } from "react-bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";
import PropTypes from "prop-types";
const L_Navbar = ({ links = [], children, gridPosition = {}, style = [] }) => {
  return (
    <>
      {/* Left Navbar */}
      <Navbar
        className="l_NavBar"
        style={{
          zIndex: 1,
          ...gridPosition,
          ...style,
          color: 'white'
        }}>
          {children}
        <Nav style={{ display: 'flex', flexDirection: 'column', color: 'white' }}>

          {links.map((link, index) => (
          
        <Nav.Link key={index} as={Link} to={link.path} className="Link" style={{color:'white'}}>
              {link.label}
        </Nav.Link>
          ))}
        </Nav>
      </Navbar>
    </>
  );
};


L_Navbar.propTypes = {
  links: PropTypes.array,
  children: PropTypes.node,
  gridPosition:PropTypes.object,
  style: PropTypes.object,
};
L_Navbar.defaultProps = {
  links: [],
  children: null,
  gridPosition: {
    gridColumn: "1/6",
    gridRow:"4/36"
  },
  style: {},
};

export default L_Navbar;
