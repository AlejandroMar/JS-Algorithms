
function slasher(arr, howMany) {
    // it doesn't always pay to be first
    var newArr = [];
    newArr.push.apply(newArr, arr.slice(howMany));
    return newArr;
}

console.log(slasher(["burgers", "fries", "shake"], 0));

