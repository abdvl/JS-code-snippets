// This is the class for the node
// you can use this directly as it is bundled with your code

class Node {
  // value: number
  // left: null | Node
  // right: null | Node
  constructor(val) {
    this.value = val
    this.left = null
    this.right = null
  }
}

/**
 * @param {Node} root
 * @return {string}
 */
function serialize(root) {
  if(!root){
    return '';
  }
  const res = [];
  const queue = [root];
  while(queue.length) {
    const item = queue.shift();
    res.push(item ? item.value : null);
    if(item){
      queue.push(item.left)
      queue.push(item.right)
    }
  }
  return JSON.stringify(res )
}

/**
 * @param {string} str
 * @return {Node}
 */
function deserialize(str) {
  if(!str){
    return null
  }
  const arr = JSON.parse(str);
  const val = arr.shift();
  const root = new Node(val);
  const queue = [root];
  
  while(queue.length){
    const node = queue.shift()
    
    //
    const leftValue = arr.shift();
    if(leftValue){
      const leftNode = new Node(leftValue)
      node.left = leftNode;
      queue.push(leftNode)
    }
    
    const rightValue = arr.shift();
    if(rightValue){
      const rightNode = new Node(rightValue)
      node.right = rightNode;
      queue.push(rightNode)
    }
    
  }
  
  return root;
  
}

const s = '[1,2,3,4,null,null,5,6,7,8,null,null,null,null,9]'
const tree1 = deserialize(s)
console.log(tree1)
console.log(serialize(tree1))
