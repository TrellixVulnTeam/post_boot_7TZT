//Increment the Seconds - Given an array of numbers arr, add 1 to every other element, specifically those whose index is odd (arr[1], arr[3], arr[5], etc).  Afterward, console.log each array value and return arr.

function incrementInSec(arr){
    var sum = [];
    for(var x = 0; arr.length>x; x++){
        if(arr[x]%2 === 0){
            sum+= arr[x];
            console.log(x);
        }
    }
    return arr;
}

//console.log(incrementInSec([6]));

// Previous Lengths - You are passed an array (similar to saying 'takes in an array' or 'given an array') containing strings.  Working within that same array, replace each string with a number - the length of the string at the previous array index - and return the array.  For example, previousLengths(["hello", "dojo", "awesome"]) should return ["hello", 5, 4]. Hint: Can for loops only go forward?

function previousLengths(arr){
    var strings = [];
    for(var t = 0; arr.length> t; t++){
        if(arr[t] = ''){
            arr[t] = arr.length+1;
            console.log(strings);
        }
    }
    return strings;
}

console.log(previousLengths(['stuff', 'dojo', 'awesome', 4]));