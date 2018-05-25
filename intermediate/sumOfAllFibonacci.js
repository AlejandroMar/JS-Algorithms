function sumFibs(num) {
    var arr = [0, 1];
    var i = 1;
    while(i<num){
        var fib = arr[i - 1] + arr[i];
        if(fib > num){  
           return arr.filter((number)=> {return number % 2 !== 0}).reduce((acc, val) => {return acc + val});
        }else{
        arr.push(fib);
        i++
        }
    }
    return arr.filter((number)=> {return number % 2 !== 0}).reduce((acc, val) => {return acc + val});;
  }
  
  console.log(sumFibs(4));
  