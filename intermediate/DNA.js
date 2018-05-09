
function pairElement(str) {
    var newArr = [];
    str = str.split('');
    while(str.length > 0){
        var tempLetter = str.shift();
        if(tempLetter === 'G'){
            newArr.push(['G', 'C']);
        }else if(tempLetter === 'C'){
            newArr.push(['C', 'G']);
        }else if(tempLetter === 'A'){
            newArr.push(['A', 'T']);
        }else if(tempLetter === 'T'){
            newArr.push(['T', 'A']);
        }
    }
    return newArr;
  }
  
console.log(pairElement("ATCGA"));
