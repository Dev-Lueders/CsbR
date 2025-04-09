import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import "../../components_styles.css";
import PropTypes from "prop-types"
const B_Navbar = ({ links = [], children }) => {
    return (
        <Navbar 
            className="b_NavBar"
            bg="dark" 
            variant="dark"
            style={{
             
                zIndex: 1
            }}
        >
            <Nav >
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