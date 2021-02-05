var findSmallestRegion = function(regions, region1, region2) {
    let map = {}
    regions.forEach(region => {
        const parent = region.shift()
        region.forEach(item => map[item] = parent)
    })
    
    let p1 = region1;
    const path1 = [p1];
    
    while(map[p1]){
        path1.push(map[p1])
        p1 = map[p1]
    }

    let p2 = region2
    while(!path1.includes(p2) && map[p2]){
        p2 = map[p2]
    }
    
    return p2
    
};
