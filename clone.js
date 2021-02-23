var obj = {
    a : 1,
    b:"b",
    c:this,
    x:function(){
        
        console.log(this,this.a)
    },
    y:()=>{
        console.log(this,this.a)
    }
}

console.log(obj)
obj.x()
obj.y()