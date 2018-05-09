function truncateString(str, num) {
    // Clear out that junk in your trunk
    if (num <= 3) {
        str = str.slice(0, num) + '...'
    } else if (str.length > num) {
        str = str.slice(0, num - 3) + '...'
    }
    return str;
}


console.log(truncateString("Peter Piper picked a peck of pickled peppers", 14));

