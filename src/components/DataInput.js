import React, { useState } from 'react';
import matrixToVis from '../algorithms/node_normalize';

function DataInput({setGraph}) {
  const [numNodes, setNumNodes] = useState(3); // Default value is 3
  const [matrix, setMatrix] = useState(
    Array(3).fill(Array(3).fill(0))
  );

  const handleNumNodesChange = (e) => {
    const newNumNodes = parseInt(e.target.value, 10);
    setNumNodes(newNumNodes);
    setMatrix(Array(newNumNodes).fill(Array(newNumNodes).fill(0)));
  };

  const handleInputChange = (row, col, value) => {
    const newMatrix = matrix.map((rowData, rowIndex) => 
      rowIndex === row
        ? rowData.map((cellData, colIndex) =>
            colIndex === col ? value : cellData
          )
        : rowData
    );
    setMatrix(newMatrix);
  };

  const getHeader = (index) => {
    return String.fromCharCode('A'.charCodeAt(0) + index);
  };

  const convertMatrixToGraph = () => {
    const graph = {};
    matrix.forEach((row, rowIndex) => {
      const rowHeader = getHeader(rowIndex);
      graph[rowHeader] = {};
      row.forEach((cell, colIndex) => {
        if (cell > 0) {
          const colHeader = getHeader(colIndex);
          graph[rowHeader][colHeader] = parseInt(cell, 10);
        }
      });
    });
    return graph;
  };

  const HandleShowGraph = () => {
    const newGraphData = convertMatrixToGraph();
    console.log("Graph data:", newGraphData);
    setGraph(matrixToVis(newGraphData))
    // Implement further logic to use graphData with other components
  };

  return (
    <div className="Data-input">
      <header className="Data-input-header">
        <h2>Data Input Section</h2>
        <label>
          Number of nodes:
          <input
            type="number"
            value={numNodes}
            onChange={handleNumNodesChange}
            min="1"
          />
        </label>
        <table>
          <thead>
            <tr>
              <th></th>
              {Array.from({ length: numNodes }).map((_, index) => (
                <th key={index}>{getHeader(index)}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {matrix.map((row, rowIndex) => (
              <tr key={rowIndex}>
                <th>{getHeader(rowIndex)}</th>
                {row.map((cell, colIndex) => (
                  <td key={colIndex}>
                    <input
                      type="number"
                      value={cell}
                      onChange={(e) =>
                        handleInputChange(rowIndex, colIndex, e.target.value)
                      }
                    />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
        <button className="Show-graph-button"onClick={HandleShowGraph}>Show graph</button>
      </header>
    </div>
  );
}

export default DataInput;