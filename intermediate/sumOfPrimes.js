
function sumPrimes(num) {
    var primArr = [2];
    outerloop:
    for (var i = 3; i <= num; i++) {
        for (var j = 0; j < primArr.length; j++) {
            if (i % primArr[j] === 0) {
                continue outerloop;
            } else if(i % primArr[j] !== 0 && i / primArr[j] <= primArr[j]){
                primArr.push(i)
                continue outerloop;
            }
        }
    }
    return primArr.reduce((acc, val) => acc + val);
}

console.log(sumPrimes(13));
