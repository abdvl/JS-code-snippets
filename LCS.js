var longestCommonSubsequence = function(text1, text2) {
    let memo = Array(text1.length).fill("_").map(_=>[]);
    const source= text1;//.split('');
    const target = text2;//.split('');
    
    const DP = (i,j ) =>{
      if(i == source.length || j == target.length) return ''
      if( memo[i][j]) return memo[i][j]

      if(source[i] == target[j]) {
          memo[i][j] = source[i] + DP(i+1, j+1)
      }else{
        const moveI = DP(i+1, j);
        const moveJ = DP(i, j+1);
        memo[i][j] =  moveI.length > moveJ.length ? moveI : moveJ
      }
      return  memo[i][j]
    }

    const lcs =  DP( 0, 0, memo);
    return lcs.length;
  
};
