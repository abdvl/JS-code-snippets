var findOrder = function(numCourses, prerequisites) {
    if(numCourses ==1 ) return [0]
    const id = Array(numCourses).fill(0);
    const vectors = Array(numCourses).fill("").map(_=>[]);
    prerequisites.forEach(([a, b])=>{
        id[a]++;
        vectors[b].push(a)
    })
    // topo sorting
    const stack = id.reduce((acc, count, index) => {
        if(!count) acc.push(index);
        return acc;
    }, []);
    
    const res = [];
    while(stack.length){
        const item = stack.pop();
        res.push(item);
        vectors[item].forEach(a => {
            id[a]--;
            if(!id[a]) stack.push(a)
        })
    }
    return res.length == id.length ? res : [];   
}
