
function spinalCase(str) {
    // "It's such a fine line between stupid, and clever."
    // --David St. Hubbins
    str = str.split('').reduce(function (acc, value, index) {
        if (!value.match(/[_\s\-]/g) && value === value.toUpperCase() && (str[index - 1] !== " " && str[index - 1] !== "_") && index !== 0) {
            acc.push(' ', value);
        } else {
            acc.push(value);
        }
        return acc;
    }, []).join('').toLowerCase().replace(/[_\s]/g, '-');

    return str;
}


console.log(spinalCase("thisIsSpinalTap"));
console.log(spinalCase("This Is Spinal Tap"));
console.log(spinalCase("Teletubbies say Eh-oh"));


//better solutions

function spinalCase(str) {
    // Create a variable for the white space and underscores.
    var regex = /\s+|_+/g;
  
    // Replace low-upper case to low-space-uppercase
    str = str.replace(/([a-z])([A-Z])/g, '$1 $2');
  
    // Replace space and underscore with -
    return str.replace(regex, '-').toLowerCase();
  }
  
  // test here
  spinalCase('This Is Spinal Tap');

  //another

  function spinalCase(str) {
    // Replace low-upper case to low-space-uppercase
    str = str.replace(/([a-z])([A-Z])/g, '$1 $2');
    // Split on whitespace and underscores and join with dash
    return str.toLowerCase().split(/(?:_| )+/) .join('-');
  }
  
  // test here
  spinalCase('This Is Spinal Tap');

  //another

  function spinalCase(str) {
    // "It's such a fine line between stupid, and clever."
    // --David St. Hubbins
  
    return str.split(/\s|_|(?=[A-Z])/).join('-').toLowerCase()
  }