import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';

const NavBar = () => (
    <Navbar expand="lg" className="site-navbar" variant="dark">
        <Container>
            <Navbar.Brand as={Link} to="/" className="site-brand">
                nyolo<span>pilem</span>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="main-navigation" />
            <Navbar.Collapse id="main-navigation">
                <Nav className="ms-auto site-navigation">
                    <Nav.Link as={NavLink} to="/" end>Beranda</Nav.Link>
                    <Nav.Link as={NavLink} to="/trending">Trending</Nav.Link>
                    <Nav.Link as={NavLink} to="/superhero">Superhero</Nav.Link>
                    <Nav.Link as={NavLink} to="/listfilm">Semua film</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
);

export default NavBar;


