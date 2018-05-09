
function myReplace(str, before, after) {
    var wordIndex = str.toLowerCase().indexOf(before.toLowerCase());
    var word = str.substr(wordIndex, before.length);
    word = word.split('');
    if(word[0] === word[0].toUpperCase()){
        after = after.split('');
        after[0] = after[0].toUpperCase();
        after = after.join('');
    }
    var newReg = new RegExp(before, 'i');
    return str.replace(newReg, after);
  }

  
  
  console.log(myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped"));
  