
const log = console.log

class LFUCache {

  constructor(capcity){
    this.capcity = capcity;
    this.size = 0;
    this.keyToValue = {};
    this.keyToFreq = {};
    this.freqToKey = new Map();
  }
  
  put(key,value) {
    
    if(this.keyToValue[key]){
    
      this.keyToValue[key] = value;
    
      this._updateKeyFreq(key);
    }else{
      
      if(this.size == this.capcity){
        this._removeLU();

      }
      
      this.keyToValue[key] = value;
      
      this.size++;
      
      this._updateKeyFreq(key);
    
    }
    
    
    return value;
  
  }
  
  
  get(key) {
    
    if(this.keyToValue[key]){
      this._updateKeyFreq(key)
      return this.keyToValue[key];
    }
    
    return null
  }
  
  
  _removeLU(){
    
    let lastFreq;
    
    for(const [key, freq] of this.freqToKey){
    
      if(freq.size != 0) {
        lastFreq = freq;
        break;
      }
    }
    
    
    const oldKey = Array.from(lastFreq.keys())[0]
    
    lastFreq.delete(oldKey);
    
    delete this.keyToValue[oldKey];
    delete this.keyToFreq[oldKey];
    
    this.size--;
    
    
  }
  
  _updateKeyFreq(key){
    
    if(!this.keyToFreq[key]){
      this.keyToFreq[key] = 0;
    }
    
    const freq = ++this.keyToFreq[key];
    
    
    // update freqToKey
    if(!this.freqToKey.has(freq)){
      this.freqToKey.set(freq, new Map())
    }
    
    
    this.freqToKey.get(freq).set(key, freq);    
  
    
    //remove old reference
    if(this.freqToKey.has(freq -1)) {
      if(this.freqToKey.get(freq -1).has(key)){
        this.freqToKey.get(freq -1).delete(key)
      }
      
    }
  
  }
  

}


const LFU = new LFUCache(2)

LFU.put(1,10)
LFU.put(2,20)
LFU.put(1,11)
console.assert(LFU.get(1) == 11)
LFU.put(3,10)

console.log(LFU.freqToKey)

console.assert(LFU.size == 2)

log(LFU)
