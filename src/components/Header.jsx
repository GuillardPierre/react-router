import { Container, Navbar, Nav } from 'react-bootstrap';
import { NavLink, useMatch, useParams } from 'react-router';
import '../styles/header.scss';

export default function Header() {
  const match = useMatch('/categorie/:category');
  const { category } = useParams();

  return (
    <header>
      <Navbar expand='lg' className='bg-body-tertiary '>
        <Container>
          {match && (
            <Navbar.Brand href='#home'>Catégorie: {category}</Navbar.Brand>
          )}
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ms-auto'>
              <Nav.Link as={NavLink} to='/'>
                Accueil
              </Nav.Link>
              <Nav.Link as={NavLink} to='categorie/vêtements'>
                Vêtements
              </Nav.Link>
              <Nav.Link as={NavLink} to='categorie/chaussures'>
                Chaussures
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}
