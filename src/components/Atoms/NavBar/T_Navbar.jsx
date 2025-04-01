import "../../components_styles.css";
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";
import PropTypes from "prop-types";

const T_Navbar = ({ links = [], children, gridPosition = {}, style=[] }) => {
  return (
    <Navbar
      className="t_NavBar"
      bg="dark"
      variant="dark"
      style={{
        zIndex: 2, // Ensure it's above other content
        justifyContent: "center", // Center items
        ...gridPosition,
        ...style,
      }}
    >
      <Nav
      
        style={{
          justifyContent: "center",
        }}
      >
        {links.map((link, index) => (
          <Nav.Link key={index} as={Link} to={link.path} className="mx-3">
            {link.label}
          </Nav.Link>
        ))}
      </Nav>
      {children}
    </Navbar>
  );
};
T_Navbar.propTypes = {
  links: PropTypes.array,
  children: PropTypes.node,
  gridPosition: PropTypes.object,
  style:PropTypes.object,
};
T_Navbar.defaultProps = {
  links: [],
  children: null,
  gridPosition: {
    gridColumn: "4/38",
    gridRow: "1/4"
  },
  style: {}
};


export default T_Navbar;