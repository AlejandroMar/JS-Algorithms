//solution 1
 function reverseString(str) {
     let reversed = str;
    reversed = reversed.split('').reverse().join('');

    return reversed;
  }
  
  console.log(reverseString("hello")); 

// solution 2

function reverseString(str) {
    let tempString = '';
    for(let i=str.length -1; i>=0; i--){
        tempString += str.charAt(i) 
    }
    return tempString;
  }
  
  console.log(reverseString("hello"))
