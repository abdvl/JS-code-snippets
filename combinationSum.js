/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    const ans = [];
    
    const dfs = (remain, comb, index) =>{
//         if(remain == 0){
//             ans.push(comb)
//             return 
//         }
        
//         if(index == candidates.length){
//             return
//         }
        
//         dfs(remain, comb, index + 1);
        
//         if(remain - candidates[index] >= 0) {
//             dfs(remain - candidates[index], [...comb,candidates[index]], index)
//         }
        
        if(remain == 0) {
            ans.push([...comb])
            return
        }
        
        for (let i = index; i < candidates.length; i++) {
            let current = candidates[i];
            if(current <= remain){
                comb.push(current)
                dfs(remain - current, comb, i)
                comb.pop()
            }
                
        }
        

        
        
    }
    
    dfs(target, [], 0)
    
    return ans
    
    
};
