var longestCommonSubsequence = function(source, target) {
    let memo = Array(source.length).fill("_").map(_=>[]);
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
