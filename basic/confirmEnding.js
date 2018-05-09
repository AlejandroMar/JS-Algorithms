
function confirmEnding(str, target) {
    // "Never give up and good luck will find you."
    // -- Falcor
    let start = str.length - target.length;
    let strFragment = str.substr(start)

    return strFragment === target
}

console.log(confirmEnding("Open sesame", "same"));
console.log(confirmEnding("If you want to save our world, you must hurry. We dont know how much longer we can withstand the nothing", "mountain"));

// another option


function confirmEnding(string, target) {
    return (string.substr(-target.length) === target) ? true : false;
  }
  confirmEnding('Bastian', 'n');