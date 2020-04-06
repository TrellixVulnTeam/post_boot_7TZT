//Outlook: Negative - Given an array, create and return a new one containing all the values of the original array, but make them all negative (not simply multiplied by -1). Given [1,-3,5], return [-1,-3,-5].

function outlookNeg(arr){
    var newArr = [];
    for(var x ; arr.length>x; x++){
        if(arr[x]>0){
            newArr = arr[x] *1; 
        }
    }
    return newArr;
}

// Biggie Size - Given an array, write a function that changes all positive numbers in the array to the string "big".  Example: makeItBig([-1,3,5,-5]) returns that same array, changed to [-1, "big", "big", -5].

function biggieSize(arr){
    for(var p = 0; arr.length>p; p++){
        if(arr[p]>0){
            arr[p] = 'biggie';
        }
    }
    return arr;
}

//console.log(biggieSize([1,2,-5,-7,-4]));

//Print Low, Return High - Create a function that takes in an array of numbers.  The function should print the lowest value in the array, and return the highest value in the array.

function printLowReturnHigh(arr){
        console.log(arr[0]);
        return arr.length -1;
}

//Print One, Return Another - Build a function that takes in an array of numbers.  The function should print the second-to-last value in the array, and return the first odd value in the array.
function printOneReturnAnother(arr){
    for(var t = 0; arr.length>t; t++){
        console.log(arr.length - t -1);
    }
    if(arr[t]%2 === 1){
        return arr[t];
    }
}

//console.log(printOneReturnAnother([1,3,-6,24,30,17])); // Not right

// Double Vision - Given an array (similar to saying 'takes in an array'), create a function that returns a new array where each value in the original array has been doubled.  Calling double([1,2,3]) should return [2,4,6] without changing the original array.

function doubleVision(arr){
    let newt = [];
    for(var z = 0; arr.length>z; z++){
        if(arr[z]){
            newt = arr[z] * 2;
        }
    }
    return newt;
}

console.log(doubleVision([1,2,6,7,88]));