function largestNumbers(arr) {  
    var largestNumbersArr = arr.reduce(function(largest, value, i){
        //also Math.max.apply(Math, value) old way
        largest[i] = Math.max(...value)
        return largest
    },[])
    return largestNumbersArr
}

let nArray = [[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]];
console.log(largestNumbers(nArray));
