import "../components_styles.css";
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const T_Navbar = ({ links = [], children }) => {
  return (
    <Navbar
      bg="dark"
      variant="dark"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "8vh",
        zIndex: 2, // Ensure it's above other content
        display: "flex",
        justifyContent: "center", // Center items
      }}
    >
      <Nav
        className="t_NavBar"
        style={{
          display: "flex",
          flexDirection: "row",
          width: "100%",
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

export default T_Navbar;