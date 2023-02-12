import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "@fortawesome/react-fontawesome"
import"@fortawesome/free-solid-svg-icons" 
import LocationDisplay from './components/LocationDisplay';
import { Col, Container, Row } from 'react-bootstrap';



function App() {
  return (
    <Container className='d-flex justify-content-center align-items-center border border-dark rounded' style={{width: '100%', height: '100vh'}}>
      <Row>
        <Col className='d-flex justify-content-center align-items-center border border-light rounded p-4'><LocationDisplay/></Col>
      </Row>
    </Container>

  );
}
export default App;
