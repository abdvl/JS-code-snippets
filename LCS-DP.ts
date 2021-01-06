const log = console.log;
const source:string = "zabcde"
const target:string = "acez"



let memo: string[][] = Array(source.length).fill([])

const LCS  =  (source:string,target:string): string  => {
  
  const sourceArray : string[] = source.split('');
  const targetArray : string[] = target.split('');
  
  


  // DP
  return LCSDP(sourceArray, 0, targetArray, 0);

}

const LCSDP = (source: string[], i : number, target:string[], j : number) : string =>{

  if(i == source.length || j == target.length) {
    return '';
  }
  
  if( memo[i][j]) {
    return memo[i][j]
  }
  

  
  if(source[i] == target[j]) {
      memo[i][j] = source[i] + LCSDP(source, i+1, target, j+1)
  }else{
  
    const moveI: string = LCSDP(source, i+1, target, j);
    const moveJ: string = LCSDP(source, i, target, j+1);
    
     memo[i][j] =  moveI.length > moveJ.length ? moveI : moveJ
  
  }
  
  return  memo[i][j]
  

}

log(LCS(source,target))
