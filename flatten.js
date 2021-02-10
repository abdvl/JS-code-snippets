const flatten = (ary) => ary.reduce((a, b) => a.concat(Array.isArray(b) ? flatten(b) : b), [])

function flatten(a) {
    var queue = a.slice();
    var result = [];
    while(queue.length) {
        let curr = queue.pop();
        if(Array.isArray(curr)) {
            queue.push(...curr);
        }else{
          result.push(curr);
         }
    }
    return result;
}
