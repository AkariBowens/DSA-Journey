class Solution:
    def isValid(self, s: str) -> bool:
        if (len(s) % 2 != 0):
            return False

        braces_stack = []

        for symbol in s:
            if symbol in "{[(":
                braces_stack.append(symbol)

                    
            if(symbol in ")]}" ):
                if(len(braces_stack) == 0):
                    return False
                    
                if(symbol is "}"):
                    if(braces_stack.pop() != "{"):
                        return False

                if(symbol is "]"):
                    if(braces_stack.pop() != "["):
                        return False

                if(symbol is ")"):
                    if(braces_stack.pop() != "("):
                        return False


        if(len(braces_stack) > 0):
            return False
        
        return True
    

