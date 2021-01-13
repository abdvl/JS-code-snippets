class Solution:
    def numberOfItems(self,s,startindices, endindices):
        res = []
        for i in range(len(startindices)):
            res.append(self.helper( s[startindices[i]-1 : endindices[i]] ))
        return res

    def helper(self,str):
        tot_stars = 0
        flag=0
        pending = 0
        for i in range(len(str)):
            # for stars before first |
            if(flag==0 and str[i] == '*'):
                continue
            # for all other stars
            elif(str[i] == '*'):
                pending+=1
            # for |
            else:
                flag = 1
                tot_stars+=pending
                pending=0
        return tot_stars
