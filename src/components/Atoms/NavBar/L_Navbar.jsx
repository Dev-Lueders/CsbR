import "../components_styles.css";
import { Link } from "react-router-dom"; // Fixed import
import { Navbar, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const L_Navbar = ({ links = [], children }) => {
  return (
    <>
      {/* Left Navbar */}
      <Navbar
        bg="dark"
        variant="dark"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "20vw",
          height: "100vh",
          zIndex: 1,
        }}
      >
        {children}
        <Nav
          className="l_NavBar"
          style={{
            display: "flex",
            flexDirection: "column",
            height: "100%",
            paddingTop: "1rem",
          }}
        >
          {links.map((link, index) => (
            <Nav.Link key={index} as={Link} to={link.path}>
              {link.label}
            </Nav.Link>
          ))}
        </Nav>
        
      </Navbar>
    </>
  );
};

export default L_Navbar;