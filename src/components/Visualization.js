import React from "react";
import Graph from "react-vis-network-graph"
import array_to_nodes from "../algorithms/array_to_nodes";

function Visualization({graph}){
        // const nodes = array_to_nodes(['A', 'B', 'C', 'D', 'E', 'F'])
        // const graph = {
        //     nodes: nodes,
        //     edges: [
        //       { from: 0, to: 1},
        //       { from: 0, to: 2},
        //     ],
        //   };
        const graphKey = JSON.stringify(graph.nodes) + JSON.stringify(graph.edges)
        
          const options = {
            // physics: {
            //   enabled: false,
            // },
            interaction: {
              navigationButtons: true,
            },
            edges: {
              color: "blue",
              width: 2,
              // Disable the arrows for undirected graph
              arrows: {
                to: { enabled: false }, 
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
              <Graph key={graphKey} graph={graph} options={options} />
            </div>
          );
}

export default Visualization;