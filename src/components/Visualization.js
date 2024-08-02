import React from "react";
import Graph from "react-vis-network-graph"
function Visualization(){
        const graph = {
          nodes: [
            { id: 1, label: "Node 1", shape: "circle" },
            { id: 2, label: "Node 2", shape: "circle" },
            { id: 3, label: "Node 3", shape: "circle" },
            { id: 4, label: "Node 4", shape: "circle" },
            { id: 5, label: "Node 5", shape: "circle" },
          ],
          edges: [
            { from: 1, to: 2, label: '1', weight: 1, id: 1 },
            { from: 1, to: 3, label: '4', weight: 4, id: 2 },
            { from: 3, to: 4, label: '2', weight: 2, id: 3 },
            { from: 5, to: 1, label: '5', weight: 5, id: 4 },
            { from: 4, to: 1, label: '7', weight: 7, id: 6 },
            { from: 2, to: 5, label: '10', weight: 10, id: 8 },
            { from: 4, to: 2, label: '10', weight: 3, id: 10 },
          ],
          
          // const graph = {
          //   nodes: nodes,
          //   edges: edges.map(edge => ({
          //     from: edge.from,
          //     to: edge.to,
          //     label: edge.label,
          //     color: edge.color || 'black',
          //     arrows: { to: { enabled: true } }, // Show arrow for directed edges
          //   })),
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
                to: { enabled: true }, // Disable the arrows for undirected graph
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