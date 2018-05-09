function uniteUnique(arr) {
    var unicArr = [];
    var concatArr = Array.from(arguments).reduce((acc, value) => {
        return acc.concat(value)
    }, [])
    concatArr.forEach(element => {
        if (!unicArr.includes(element)) {
            unicArr.push(element)
        }
    });
    console.log(concatArr);

    return unicArr;
}

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));

//
function uniteUnique(arr1, arr2, arr3) {
    var newArr;
    //Convert the arguments object into an array
    var args = Array.prototype.slice.call(arguments);
    //Use reduce function to flatten the array
    newArr = args.reduce(function (arrA, arrB) {
        //Apply filter to remove the duplicate elements in the array
        return arrA.concat(arrB.filter(function (i) {
            return arrA.indexOf(i) === -1;
        }));
    });

    return newArr;
}

// test here
uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);

//=================================

function uniteUnique(arr) {

    //make an array out of arguments and flatten it (using the spread operator)
    const args = [].concat(...arguments);

    // create a Set
    return [...new Set(args)];
}

// test here
uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);


//=====================
function uniteUnique() {
    var concatArr = [];
    var i = 0;
    while (arguments[i]){
      concatArr = concatArr.concat(arguments[i]); i++;
    }
    uniqueArray = concatArr.filter(function(item, pos) {
      return concatArr.indexOf(item) == pos;
    });
    return uniqueArray;
  }
  
  // test here
  uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);

