class Solution:
    def getSum(self, a: int, b: int) -> int:
        MASK = 0xFFFFFFFF   # 32 bits of 1s
        MAX_INT = 0x7FFFFFFF
        
        while b != 0:
            tmp = (a & b) << 1
            a = (a ^ b) & MASK
            b = tmp & MASK
        
        # if a is negative in 32-bit signed form
        return a if a <= MAX_INT else ~(a ^ MASK)
