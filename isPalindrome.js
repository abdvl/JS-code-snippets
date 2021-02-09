const memo = {};
var isPalindrome = function(s){
    if(!s) return false;
    if(memo[s]) return memo[s];
    let l = 0, r = s.length - 1;
    let res = true
    while(l<r){
        if(!isLetter(s[l])){
            l++;
            continue;
        }
        if(!isLetter(s[r])){
            r--;
            continue;
        }
        if(s[l] != s[r]){
            res = false;
            break;
        }
        l++;
        r--;
    }
    memo[s] = res;
    return res;
}
    
var isLetter = function(t) {
    return "A".charCodeAt(0) <= t.charCodeAt(0) && t.charCodeAt(0) <= "z".charCodeAt(0);
}
