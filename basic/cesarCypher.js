function rot13(str) { // LBH QVQ VG!
    var strArr = str.split('');
    strArr = strArr.map(function (value, index) {
        if (value.match(/[a-z]/i)) {
            var code = value.charCodeAt(0);
            return code;
        } else {
            return value;
        }
    }).map(function (code) {

        if (typeof code !== 'number') {
            return code;
        }
        if ((code + 13) <= 90) {
            code = code + 13;
        }
        else if ((code + 13) > 90) {
            code = 64 + (code + 13 - 90);
        }
        return String.fromCodePoint(code);
    });
    return strArr.map(function (letter) {

        return letter == '\r' ? ' ' : letter;
    }).join('');
}


// Change the inputs below to test
console.log(rot13("SERR CVMMN!"))


//better solution

function rot13(str) {
    // Split str into a character array
    return str.split('')
    // Iterate over each character in the array
      .map.call(str, function(char) {
        // Convert char to a character code
        x = char.charCodeAt(0);
        // Checks if character lies between A-Z
        if (x < 65 || x > 90) {
          return String.fromCharCode(x);  // Return un-converted character
        }
        //N = ASCII 78, if the character code is less than 78, shift forward 13 places
        else if (x < 78) {
          return String.fromCharCode(x + 13);
        }
        // Otherwise shift the character 13 places backward
        return String.fromCharCode(x - 13);
      }).join('');  // Rejoin the array into a string
  }

  //another

  function rot13(str) {
    var newString = [];
  
    for (var i = 0; i < str.length; i++) {
      if (str.charCodeAt(i) < 65 || str.charCodeAt(i) > 90) {
        newString.push(str.charAt(i));
      } else if (str.charCodeAt(i) > 77) {
        newString.push(String.fromCharCode(str.charCodeAt(i) - 13));
      } else {
        newString.push(String.fromCharCode(str.charCodeAt(i) + 13));
      }
    }
    return newString.join("");
  }



