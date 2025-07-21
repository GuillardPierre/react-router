import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router';

export default function Category() {
  const { category } = useParams();

  return (
    <Container>
      <Row>
        <Col as={'h1'}>{category}</Col>
      </Row>
    </Container>
  );
}
