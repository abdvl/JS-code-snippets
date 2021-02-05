function* search (node){
    if(!node)return ;
    yield node;
    yield* search(node.firstChild);
    yield* search(node.nextSibling);
}


function getElementsByClassName(cn){
    let res = [];
    for(let node of search(document)){
        if(node.nodeType == 1 && node.classList.contains(cn)){
            res.push(node)
        }
        // if(node.nodeType == 1 && cn.split(" ").every(c => node.classList.contains(c))){
        //     res.push(node)
        // }
    }
    return res
}
