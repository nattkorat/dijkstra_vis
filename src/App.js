import './App.css';
import { useState } from 'react';
import Navigation from './components/NavigationBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col } from 'react-bootstrap';
import DataInput from './components/DataInput';
import Visualization from './components/Visualization';
import CalculateResult from './components/CalculationResult';


function App() {
  const [graph, setGraph] = useState({nodes: [
    { id: 1, label: "Node " + "A", shape: "circle" },
    { id: 2, label: "Node " + "B", shape: "circle" },
    { id: 3, label: "Node " + "C", shape: "circle" },
  ],
  edges: [
    { from: 1, to: 2, label: '1', weight: 1, id: 1 },
    { from: 1, to: 3, label: '4', weight: 4, id: 2 },
    { from: 3, to: 4, label: '2', weight: 2, id: 3 },
    { from: 5, to: 1, label: '5', weight: 5, id: 4 },
  ]
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
