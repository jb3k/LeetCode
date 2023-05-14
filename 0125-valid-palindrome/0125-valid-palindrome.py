class Solution:
    def isPalindrome(self, s: str) -> bool:
        
        if len(s) == 1:
            return True
        
        alph = 'abcdefghijklmnopqrstuvwxyz0123456789'
        lower = s.lower()
        arr = [letters for letters in lower if letters in alph]
        newStr = ''.join(arr)
        rev = newStr[::-1]
        
        return newStr == rev