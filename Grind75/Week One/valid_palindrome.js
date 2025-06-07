// Solution on LeetCode - https://github.com/AkariBowens/DSA-Journey/blob/1c25bc3fffce97ec2647a8857bd2512b0a1c4ceb/Grind75/Week%20One/valid_palindrome.js

/**
 * @param {string} s
 * @return {boolean}
 */

// First solution
var isPalindrome = function(s) {
    

    let forwardArray = s.replace(/[^a-z0-9]/gi, '').toLowerCase();

    let reversedArray = forwardArray.split('').reverse().join('');

    return forwardArray === reversedArray;
    
    return true;
  
};

// In Progress second solution

var isPalindrome = function(s) {
    
    // Make into an array
    // Remove non a-Z 0-9
    // make a reverse string, test it to first array by .toString()

    
    let firstPointer;
    let lastPointer;

    for (let j = 0; j < s.length; j++){
        firstPointer = j;
        lastPointer = (s.length - 1) - j;

        console.log(firstPointer, lastPointer);

        const pattern = /[^a-zA-Z0-9]/;

        if(pattern.test(s[firstPointer])){
            firstPointer++;
        } 
        
        if(pattern.test(s[lastPointer])){
            lastPointer--;
        }


        if(s[firstPointer] != s[lastPointer]){
             return false;
        }

    }
    
    return true;
    //console.log(firstPointer);
    //console.log(lastPointer);
};
