class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        res = set()
        count = 0
        [r, l] = [0,0]
        
        if len(s) == 1:
            return 1
        elif len(s) == 0:
            return 0
        
        
        while r < len(s):
            if s[r] not in res:
                res.add(s[r])
            else:
                count = max(count, len(res))
                while s[r] in res:
                    res.remove(s[l])
                    l+=1
                res.add(s[r])
            r+=1
        
        count = max(count, len(res))

        
        return count
                