
/* function diffArray(arr1, arr2) {
    var newArr = [];
    // Same, same; but different.
    arr1.forEach(function(number) {
        if(!arr2.includes(number))
        newArr.push(number);
    });
    arr2.forEach(function(number) {
        if(!arr1.includes(number))
        newArr.push(number);
    });
    return newArr;
  }
  
  console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5])); */
  
  // A more elegant solution

  function diff(arr1, arr2){
      return arr1.concat(arr2).filter(function(number){
          return !(arr1.includes(number) && arr2.includes(number));
      });
  }

  console.log(diff(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"] ));
  