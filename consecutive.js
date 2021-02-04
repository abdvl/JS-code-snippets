function consecutive(num) {
    // Write your code here
    let res = 0;
    let i = 1, j = 1;
    let temp = 0;

    while(j < num){
        // expand right side
       if(temp < num){
           temp += j;
       }     
       
       while(temp > num){
            temp -= i;
            i++;
        }
           
        if(temp == num){
            j!= i && res++;
            temp += j+1;
        }
       
        j++;
       
    }
    
    return res

}
