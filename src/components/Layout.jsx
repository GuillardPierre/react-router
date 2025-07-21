import { Outlet } from 'react-router';
import Header from './Header';
import Footer from './Footer';
import { Container } from 'react-bootstrap';

export default function Layout() {
  return (
    <>
      <Header />
      <Container as='main' className='my-3'>
        <Outlet />
      </Container>
      <Footer />
    </>
  );
}
