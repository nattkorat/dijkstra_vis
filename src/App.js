import './App.css';
import { useState } from 'react';
import Navigation from './components/NavigationBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col } from 'react-bootstrap';
import DataInput from './components/DataInput';
import Visualization from './components/Visualization';
import CalculateResult from './components/CalculationResult';


function App() {
  const [graph, setGraph] = useState({
    nodes: [],
    edges: []
  })
  return (
    <div>
      <Navigation />
        <Row>
          <Col className='border-end'>
            <DataInput setGraph={setGraph}/>
          </Col>
          <Col xs={5}>
            <Visualization graph={graph}/>
          </Col>
          <Col >
            <CalculateResult />
          </Col>
        </Row>
    </div>
    
  );
}

export default App;
