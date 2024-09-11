import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

const styles = {
    logoStyle: {
        textDecoration: "none",
        color: "black",
        marginRight: "1rem",
        fontSize: "1.25rem",
    },
    linkStyle: {
        textDecoration: "none",
        color: "dimgray",
        marginRight: "1rem",
    },
};

function MyNavbar() {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Link to="/" style={styles.logoStyle}>
                    React-Routing
                </Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Link to="/" style={styles.linkStyle}>
                            Home
                        </Link>
                        <Link to="/contact" style={styles.linkStyle}>
                            Contact
                        </Link>
                        <Link to="/about" style={styles.linkStyle}>
                            About
                        </Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default MyNavbar;