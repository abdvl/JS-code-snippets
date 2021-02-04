var wiggleSort = function(nums) {
    const sorted = nums.slice().sort((a,b)=> a-b)
    let len = sorted.length;
    // let mid = (sorted.length-1) >> 1;
    for(let i = 1; i < sorted.length; i+=2){
       nums[i] = sorted[--len];
    }
    for(let i = 0; i < sorted.length; i+=2){
       nums[i] = sorted[--len];
    }
    
//     for(let i = 0; i < sorted.length; i++){
//         if(i % 2) {
//             nums[i] = sorted[len--]
//         }else{
//             nums[i] = sorted[mid--]
//         }
//     }
    
    // if(sorted.length % 2) {
    //     nums[sorted.length -1] = sorted[0]
    // }
};
