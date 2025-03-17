import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import "../components_styles.css";

const B_Navbar = ({ links = [], children }) => {
    return (
        <Navbar 
            bg="dark" 
            variant="dark"
            style={{
                position: "fixed",
                bottom: 0,
                left: "0vw",
                width: "100vw",
                zIndex: 1
            }}
        >
            <Nav className="ms-auto b_NavBar">
                {links.map((link, index) => (
                    <Nav.Link key={index} as={Link} to={link.path}>
                        {link.label}
                    </Nav.Link>
                ))}
            </Nav>
            {children}
        </Navbar>
    );
}

export default B_Navbar;