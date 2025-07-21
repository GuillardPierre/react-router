import { Button, Col, Row } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router';

export default function Category() {
  const { category } = useParams();
  const navigate = useNavigate();

  const redirect = () => navigate('/');

  return (
    <Row className='align-items-center'>
      <Col>
        <h1 className='mb-0'>{category}</h1>
      </Col>
      <Col className='text-end'>
        <Button onClick={redirect}>Retour à la page d'accueil</Button>
      </Col>
    </Row>
  );
}
