import { Container, Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router';

export default function Header() {
  return (
    <Navbar expand='lg' className='bg-body-tertiary '>
      <Container>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='ms-auto'>
            <Nav.Link as={Link} to='/'>
              Accueil
            </Nav.Link>
            <Nav.Link as={Link} to='categorie/vêtements'>
              Vêtements
            </Nav.Link>
            <Nav.Link as={Link} to='categorie/chaussures'>
              Chaussures
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
