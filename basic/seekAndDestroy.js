function destroyer(arr) {
    // Remove all the values
    let argumentsArr = Array.from(arguments).slice(1);
     arr = arr.filter(function(value, index){
       if(!argumentsArr.includes(value)) return value;
      
    }) 
    return arr;
  }
  
 console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));
 // another solution

/*  function destroyer(arr) {
    // Remove all the values
    let argumentsArr = Array.from(arguments).slice(1);
     return arr.filter(function(value){
        return !argumentsArr.includes(value); 
    }) 
  } */