class MyPromise {
  
  states = {
    "pending" : {
      state :"pending",
      then : (fn) => {
        this.thenQueueFns.push(fn)
        return this 
      },
      catch : (fn) => {
        this.catchQueueFns.push(fn)
        return this;
      },
    },
    "fullfilled" : {
      state : "fullfilled",
      then : fn => MyPromise.try(()=>fn(this.value)),
      catch : _ => this
    },
    "rejected" : {
        state : "rejected",
        then : _ => this,
        catch : fn => {
          fn(this.value)
          return this;
        }
      }
  
  }
  
  state = "pending";
  
  value = null;
  
  thenQueueFns = [];
  
  catchQueueFns = [];
  
  constructor(executor){
    
    Object.assign(this, this.states[this.state])
    
    try{
      executor(this.onResolve, this.onReject);
    }catch(e){
      this.onReject(e)
    }
  }
  
  onResolve = (value)=>{
    if(this.state !== "pending") {
      return 
    }
    console.debug("resolve",value)
    this.value = value;
    
    //update then/catch function
    Object.assign(this, this.states["fullfilled"])
    
    // execute queued then functions
    this.thenQueueFns.reduce((res,fn)=>{
      this.value = fn(res);
      return this.value;
    },this.value)
    
  }
  
  onReject = (value)=>{
    
    if(this.state !== "pending") {
      return 
    }
    
    console.log("reject",value);
    //
    this.value = value;
    
    //
    Object.assign(this, this.states["rejected"])
    
    for(const fn of this.catchQueueFns){
      fn(this.value);
    }
    
  }
  

  static resolve(value){
    return new MyPromise((resolve, _) => resolve(value));  
  }
  
  static reject(value){
    return new MyPromise((_, reject) => reject(value));
  }
  
  static try(callback) {
    return new MyPromise(res => res(callback()))
  }

}

const x = new MyPromise((resolve, reject)=> {
  // setTimeout(()=>{
    if(Math.random() > 0.1) {
      resolve(1)
    }else{
      reject(2)
    }
  // },1000)
});

x.then(res=>{
  console.log(res)
  return res * 2
}).then(res=>{
  console.log(res)
  return res * 2
}).catch(err=>{
  console.log("cache 1",err)
}).catch(err=>{
  console.log("catche 2", err)
}).then(res=>{
  throw new Error('Something went wrong...');
}).catch(err=>{
  console.log("catche 3", err)
})


const x2 = new MyPromise((resolve, reject)=> {
  setTimeout(()=>{
    if(Math.random() > 0.17) {
      resolve(1)
    }else{
      reject(2)
    }
   },1000)
});

x2.then(res=>{
  console.log(res)
  return res * 2
}).then(res=>{
  console.log(res)
  return res * 2
}).catch(err=>{
  console.log("cache 1",err)
}).catch(err=>{
  console.log("catche 2", err)
})
