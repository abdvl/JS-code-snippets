var largestRectangleArea = function(heights) {
    if(!heights || !heights.length){
        return null
    }
    let res = Number.MIN_VALUE
    for(let left = 0; left < heights.length; left++){
        for(let right = heights.length; right >=0; right--){
            if(left <= right && (left > 1 && heights[left-1] !== heights[left]){
                res = Math.max(res, calcRectangleArea(heights.slice(left, right)))    
            }
            
        }
    }
    return res;
};

var calcRectangleArea = function(heights){
    if(!heights.length){
    	return null
    }
    const min_height = Math.min.apply(null, heights);
    if(!min_height){
    	return null
    }
    return min_height * heights.length;
}



console.log(largestRectangleArea([9,0]))
