/**
 * @param {string} s
 * @return {boolean}
 */

// First Solution:
var isValid = function(s) {
    
    // s.length() == 0 ||
    if ( s.length % 2 != 0 ){
        return false;
    }

    let bracesStack = [];

    for (let str of s){
        

        if("{[(".includes(str) ){
            bracesStack.push(str);
        }

        if("}])".includes(str)){
            if (str == "}"){
                if(bracesStack.pop() != "{") {
                    return false;
                } 
            }
            if (str == "]"){
                if(bracesStack.pop() != "[") {
                    return false;
                } 
            }
            if (str == ")"){
                if(bracesStack.pop() != "(") {
                    return false;
                } 
            }
        }
    }
    if(bracesStack.length > 0){
        return false;
    }
    return true;

};
