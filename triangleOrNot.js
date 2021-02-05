function triangleOrNot(a, b, c) {
    return a.map((side_a,index) => {
        const side_b = b[index];
        const side_c = c[index];
        const sides = [side_a,side_b,side_c].sort((n,m) => n - m);
        return sides[2] < sides[0] + sides[1] ? "Yes" : "No"
    })
    
    

}
