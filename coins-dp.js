const log = console.log;

const coins = [1,2,5]
const target = 11

const dp = (coins, target) => {
  
  if(target == 0) {
    return 0
  }
  
  if(target < 0) {
  
    return -1
  }
  
  let res = Number.MAX_VALUE;
  
  coins.forEach(coin =>{
    
    const subRes = dp(coins, target - coin);
    
    if(subRes == -1) {
      return;
    }
    
  
    res = Math.min(res, subRes +1);
    
  })
  

  
  if (res == Number.Max_value) {
    res = -1
  }

  
  return res
  

}

log(dp(coins,target))
