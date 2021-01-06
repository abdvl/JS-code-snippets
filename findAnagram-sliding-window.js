const source = "cbaebabacd";
const target = "abc";

const findAnagram =  (s,t) =>{
  const needed = t.split("").reduce((acc,i)=> {
    acc[i] = 1;
    return acc;
  },{})
  
  let left = 0, right = 0, valid = 0;
  const window = {}
  const res = [];
  while(right < s.length) {
    const c = s.charAt(right,1);
    
    right++
    
    if(needed[c]) {
      if(!window[c]){
        window[c] = 0
      }
      
      window[c]++;
      
      if(window[c] == needed[c]) {
        valid++
      }
    }
    
    // find all macthed, shirnk the window
    while(right - left >= t.length) {
      
      
      if(valid == t.length) {
        res.push(left)
      }
      
      const lc = s.substr(left,1)
      
      left++;
    
      
      if(needed[lc]) {
        
        // if the left charartec's count is equal to the target, then reduct the valid count
        if(window[lc] == needed[lc]) {
          valid--
        }
        
        // 
        window[lc]--;
        
        
      }
      
    }
    
    
    
    
  }
  
  
  console.log(needed,res)
  return res
}


console.assert(findAnagram(source, target) == [0,6]);
  
