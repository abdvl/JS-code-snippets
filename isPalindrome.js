var isPalindrome = function(s) {
    if(!s) return true;
    const chars = s.split("").reduce((acc, char) => {
        const c = char.charCodeAt(0);
        if(isLetter(c)) acc.push(char.toLowerCase())
        return acc
    },[]);
        
    let l = 0; r = chars.length -1;
    while(l < r){
        if(chars[l] != chars[r]) return false;
        l++;r--;
    }
    return true
};
var isLetter = function(code) {
    return (code >= 48 && code <= 57) || (code >= 65 && code <= 90) || (code >= 97 && code <= 122) // number, lowercase, uppercase
}
