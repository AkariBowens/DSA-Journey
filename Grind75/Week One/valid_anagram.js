// First solution
var isAnagram = function(s, t) {

    if(s.length == t.length) {
        if(s.length < 2 && t.length < 2){
            if(s === t){
                return true;
            }
            return false;
        }

        const forwards = s.split("").sort();
        const backwards = t.split("").sort();

        if(forwards.toString() === backwards.toString()){
            console.log(forwards, backwards);
            return true;
        }
        

    }
    return false;
    
};

// Second Solution
