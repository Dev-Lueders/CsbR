import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import "../../components_styles.css";
import PropTypes from "prop-types"
const B_Navbar = ({ links = [], children, gridPosition = {}, style=[] }) => {
    return (
        <Navbar 
            className="b_NavBar"
            bg="dark" 
            variant="dark"
            style={{
                zIndex: 1,
                ...gridPosition,
                ...style,
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
B_Navbar.propTypes = {
    links: PropTypes.array,
    children: PropTypes.node,
    gridPosition: PropTypes.object,
    style:PropTypes.object,
};
B_Navbar.defaultProps = {
    links: [],
    children: null,
    gridPosition: {
        gridColumn: "1/38",
        gridRow: "35/38"
    },
    style: {}
};
export default B_Navbar;