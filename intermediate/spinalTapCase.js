
function spinalCase(str) {
    // "It's such a fine line between stupid, and clever."
    // --David St. Hubbins
    str = str.toLowerCase().replace(/\s/g, '-');
    return str;
}

console.log(spinalCase('This Is Spinal Tap'));
