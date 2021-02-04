function doesCircleExist(commands) {
    console.log(commands)
    // Write your code here
    const res = [];
    for(const command of commands){
        let dir = 1 // 1 is north, 2 is west, 3 is south, 0 is east
        const startingPoint = [0, 0];
        for(let i = 0; i < 4; i++){
            for(const action of command){
                if(action == "G"){
                    switch(dir){
                        case 0 : 
                        startingPoint[0]++;
                        break;
                        case 1 : 
                        startingPoint[1]++;
                        break;
                        case 2 : 
                        startingPoint[0]--;
                        break;
                        case 3 : 
                        startingPoint[1]--;
                        break;
                    }
                }
                if(action == "L") {
                    dir = (dir+1) %4;
                }
                if(action == "R") {
                    dir = dir == 0 ? 3 : (dir-1) %4;
                }
            }
            
            
        }
        
        
        res.push(startingPoint[0] == 0 && startingPoint[1] == 0 && dir == 1 ? "YES" : "NO")
        
    }
    
    return res;
}
