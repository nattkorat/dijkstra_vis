import './App.css';
import { useState } from 'react';
import Navigation from './components/NavigationBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col } from 'react-bootstrap';
import DataInput from './components/DataInput';
import Visualization from './components/Visualization';
import CalculateResult from './components/CalculationResult';


function App() {
  const [graph, setGraph] = useState({});
  const [data, setData] = useState({distances: {}, path: {}});
  return (
    <div className='container-fluid'>
      <Navigation />
        <Row className='row'>
          <Col className='col-scrollable border-end'>
            <DataInput setGraph={setGraph} setData={setData}/>
          </Col>
          <Col xs={5} className='col-full-height'>
            <Visualization graph={graph}/>
          </Col>
          <Col className='col-scrollable'>
            <CalculateResult data={data}/>
          </Col>
        </Row>
    </div>
    
  );
}

export default App;
