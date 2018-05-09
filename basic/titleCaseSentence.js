function titleCase(str) {
     let newStr = str.toLowerCase().split(' ').map(word => {
         word = word.split('');
         word[0] = word[0].toUpperCase();
         return word.join('')
    }).join(' ');

    return newStr;

}

console.log(titleCase("I'm a little tea pot"));
