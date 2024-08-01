import { useState } from "react";
import numberToString from "../algorithms/num_to_string";
import array_to_nodes from "../algorithms/array_to_nodes";

function DataInput({setGraph}) {
  const [number, setNumber] = useState(0);
  const [list, setList] = useState([]);

  const handleChange = (event) => {
    setNumber(parseInt(event.target.value))
  }

  const handleClick = () => {
    const newList = Array.from({length: number}, (_, index) => numberToString(index))
    setList(newList);
    setGraph({
      nodes: array_to_nodes(newList),
      edges: []
    })
  }

  return (
    <div className="p-3 row g-3">
      <div class="col">
        <input type="number" class="form-control" id="numOfNode" placeholder="Number of nodes" onChange={handleChange} />
      </div>
      <div class="col-auto">
        <button class="btn btn-primary mb-3" onClick={handleClick}>Generate</button>
      </div>
      {/* <p>{list.length > 0 ? array_to_nodes(list).toString(): ""}</p> */}
    </div>
  
  );
}

export default DataInput;