import React from "react";
import Graph from "react-vis-network-graph"
function Visualization(){
        const graph = {
            nodes: [
              { id: 1, label: "Node 1", shape: "circle" },
              { id: 2, label: "Node 2", shape: "circle" },
              { id: 3, label: "Node 3", shape: "circle" },
            ],
            edges: [
              { from: 1, to: 2, id: 1 },
              { from: 1, to: 3, id: 2 },
            ],
          };
        
          const options = {
            // physics: {
            //   enabled: false,
            // },
            interaction: {
              navigationButtons: true,
            },
            edges: {
              color: "blue",
            //   smooth: {
            //     enabled: true,
            //     type: "diagonalCross",
            //     roundness: 0.5,
            //   },
              width: 2,
              arrows: {
                to: { enabled: false }, // Disable the arrows for undirected graph
              },
            },
            height: "650px",
            nodes: {
              color: {
                background: "blue",
              },
              font: {
                color: "white",
              },
            },
          };
        
          return (
            <div className="container border-end">
              <Graph graph={graph} options={options} />
            </div>
          );
}

export default Visualization;