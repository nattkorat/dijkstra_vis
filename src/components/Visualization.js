import React from "react";
import Graph from "react-vis-network-graph"
import { useEffect, useState } from "react";
function Visualization({graph}){
    const [currentGraph, setCurrentGraph] = useState(graph);

    useEffect(() => {
      setCurrentGraph(graph);
    }, [graph]);
          const graphKey = JSON.stringify(currentGraph.nodes) + JSON.stringify(currentGraph.edges)
          const options = {
            physics: {
              enabled: true,
            },
            interaction: {
              navigationButtons: true,
            },
            edges: {
              color: "blue",
              width: 2,
              // Disable the arrows for undirected graph
              arrows: {
                to: { enabled: true }, // Disable the arrows for undirected graph
              },
            },
            height: "650px",
            nodes: {
              color: {
                background: "blue",
              },
              font: {
                color: "white"
              },
            },
          };
        
          return (
            <div className="container border-end">
              {/* <Graph key={graphKey} graph={graph} options={options} /> */}
              <Graph key={graphKey} graph={currentGraph} options={options} />
            </div>
          );
}

export default Visualization;