function fearNotLetter(str) {
    var firstCode = str.charCodeAt(0);
    for (var i = 0; i < str.length; i++) {
        if (str.charCodeAt(i) !== (firstCode + i)) {
            return String.fromCharCode(firstCode + i);
        }
    }
    return undefined;
}

console.log(fearNotLetter('abce'))