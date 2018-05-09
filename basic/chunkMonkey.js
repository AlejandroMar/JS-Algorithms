function chunkArrayInGroups(arr, size) {
        var newArr = [];
        for(var i=0; i<arr.length; i += size){
            var fragment = arr.slice(i, i+size);
            newArr.push(fragment);
        }
    return newArr;
  }
  
  console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4));
  

  