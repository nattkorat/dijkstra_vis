const array_to_nodes = (array) => {
    let nodes = [];
    for(let i = 0; i < array.length; i++){
        nodes.push(
            {id: i, label: array[i], shape: "circle"}
        )
    }
    return nodes
}

/**
 [
     { id: 0, label: 'A', shape: 'circle' },
     { id: 1, label: 'B', shape: 'circle' },
     { id: 2, label: 'C', shape: 'circle' }
    ]
    */
console.log((array_to_nodes([1,2,3])));
export default array_to_nodes;