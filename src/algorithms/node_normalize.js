const matrixToVis = (graphData) => {
    let graph = {
        nodes: [], edges: [],
    }
    let node_names = Object.keys(graphData)
    node_names.forEach(node => {
        graph.nodes.push({
            id: node, label: "Node "+ node, shape: "circle"
        })
        let edge = graphData[node]
        Object.keys(edge).forEach(ed => {
            graph.edges.push({
                from: node,
                to: ed,
                label: String(edge[ed]),
                weight: edge[ed]
            })
        })
    })
    console.log(graph)
    return graph
}

export default matrixToVis;