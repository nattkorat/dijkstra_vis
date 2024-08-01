import './App.css';
import Navigation from './components/NavigationBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col } from 'react-bootstrap';
import DataInput from './components/DataInput';
import Visualization from './components/Visualization';
import CalculateResult from './components/CalculationResult';


function App() {
  return (
    <div>
      <Navigation />
        <Row>
          <Col className='border-end'>
            <DataInput />
          </Col>
          <Col xs={5}>
            <Visualization />
          </Col>
          <Col >
            <CalculateResult />
          </Col>
        </Row>
    </div>
    
  );
}

export default App;
