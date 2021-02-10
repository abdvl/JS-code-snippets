var cloneGraph = node => {
    if (!node) return node

    let queue = [node],
        hash = {}
    hash[node.val] = new Node(node.val)

    while (queue.length) {
        const curr = queue.shift();
        curr.neighbors.forEach(n => {
            // if n is not yet visited
            if (hash[n.val] === undefined) {
                // copy n to the new graph
                hash[n.val] = new Node(n.val);
                // enqueue n
                queue.push(n);
            }
            // connect the current new node with its neighbors in the new graph
            hash[curr.val].neighbors.push(hash[n.val]);
        })
    }
    return hash[node.val];
