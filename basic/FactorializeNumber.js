//solution 1
/* function factorialize(num){
    let factorial = 1;
    for(let i=2; i<=num; i++){
        factorial = factorial * i
    }
    return factorial;
}

console.log(factorialize(0)); */

//solution 2 recursion

function factorialize2(num){
    if(num < 0) return -1;
    else if(num === 0) return 1;
    return num * factorialize2(num -1); 
}

console.log(factorialize2(5));

//solution 3

function factorialize(num) {
    var result = num;
    if (num === 0 || num === 1) 
      return 1; 
    while (num > 1) { 
      num--;
      result *= num;
    }
    return result;
  }
  factorialize(5);

