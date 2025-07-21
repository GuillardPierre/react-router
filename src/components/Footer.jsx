import { Col, Container, Row } from 'react-bootstrap';

export default function Footer() {
  return (
    <footer className='bg-black text-white w-100 '>
      <Container fluid>
        <Row>
          <Col className='text-center py-1'>Footer</Col>
        </Row>
      </Container>
    </footer>
  );
}
