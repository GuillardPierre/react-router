import { Col, Container, Row } from 'react-bootstrap';

export default function Home() {
  return (
    <Container>
      <Row>
        <Col as={'h1'}>Welcome Home !</Col>
      </Row>
    </Container>
  );
}
