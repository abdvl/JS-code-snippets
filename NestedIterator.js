function* search(nestedList){
    if(!nestedList){
        return 
    }
    if(!Array.isArray(nestedList)){
        yield nestedList
    }else{
       for(let item of nestedList){
          yield* search(item)
      }
    }    
}

var NestedIterator = function(nestedList) {
    this.list = search(nestedList)
    this.currentItem = this.list.next();
}


/**
 * @this NestedIterator
 * @returns {boolean}
 */
NestedIterator.prototype.hasNext = function() {
    return !this.currentItem.done
};

/**
 * @this NestedIterator
 * @returns {integer}
 */
NestedIterator.prototype.next = function() {
    const res = this.currentItem.value;
    this.currentItem = this.list.next();
    return res;
};

const x = [[1,1],2,[1,1]];
var i = new NestedIterator(x), a = [];
while (i.hasNext()){

a.push(i.next());
} 

console.log(a)


