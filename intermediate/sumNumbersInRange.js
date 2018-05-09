
function sumAll(arr) {
    var min = Math.min.apply(Math, arr);
    var max = Math.max.apply(Math, arr);
    var sum = 0;
    
    for(let i=min; i<=max; i++){
        sum += i;
    }
    return sum;
  }
  
  console.log(sumAll([5, 10]));
  