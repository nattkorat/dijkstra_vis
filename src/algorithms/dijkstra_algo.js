
function dijkstra(graph, start) {
    // Create an object to store the shortest distance from the start node to every other node
    let distances = {};
    let previous_node = {}

    // A set to keep track of all visited nodes
    let visited = new Set();

    // Get all the nodes of the graph
    let nodes = Object.keys(graph);

    // Initially, set the shortest distance to every node as Infinity
    for (let node of nodes) {
        distances[node] = Infinity;
        previous_node[node] = Infinity;
    }

    // The distance from the start node to itself is 0
    distances[start] = 0;
    previous_node[start] = start

    // Loop until all nodes are visited
    while (nodes.length) {
        // Sort nodes by distance and pick the closest unvisited node
        // which is initailly the start node with distances = 0, and other infinity
        nodes.sort((a, b) => distances[a] - distances[b]);
        let closestNode = nodes.shift();

        // If the shortest distance to the closest node is still Infinity, then remaining nodes are unreachable and we can break
        if (distances[closestNode] === Infinity) break;

        // Mark the chosen node as visited
        visited.add(closestNode);

        // For each neighboring node of the current node
        for (let neighbor in graph[closestNode]) {
            // If the neighbor hasn't been visited yet
            if (!visited.has(neighbor)) {
                // Calculate tentative distance to the neighboring node
                let newDistance = distances[closestNode] + graph[closestNode][neighbor];
                
                // If the newly calculated distance is shorter than the previously known distance to this neighbor
                if (newDistance < distances[neighbor]) {
                    // Update the shortest distance to this neighbor
                    distances[neighbor] = newDistance;
                    previous_node[neighbor] = closestNode
                }
            }
        }
    }
    //Format data before return
    result = {
        "distances": {},
        "path": {}
    }
    for (let node in graph){
        result["distances"][node] = {
            "distance": distances[node],
            "previous": previous_node[node]
        }
        let reserve_node = previous_node[node]
        result["path"][node] = [reserve_node]
        while(reserve_node != start && reserve_node != Infinity){
            reserve_node = previous_node[reserve_node]
            result["path"][node].push(reserve_node)
        }
    }
    // Return the shortest distance from the start node to all nodes
    return result;
}

// Example
// Define a graph using an adjacency list
const graph = {
    A: { B: 1, C: 4 },       // Node A is connected to Node B with a weight of 1 and Node C with a weight of 4
    B: { A: 1, C: 2, D: 5 }, // ... and so on for other nodes
    C: { A: 4, B: 2, D: 1 },
    D: { B: 5, C: 1 }
};
// Example: Find shortest distances from node A to all other nodes in the graph
console.log(dijkstra(graph, "C")); // Outputs: { A: 0, B: 1, C: 3, D: 4 }