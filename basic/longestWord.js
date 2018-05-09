/* function findLongestWord(str) {
    let arrFromStr= str.split(' ');
    let max = arrFromStr[0];
    arrFromStr.forEach((word) => {
        if(word.length > max.length) max = word;
    });
    return max.length;
  }
  
  console.log(findLongestWord("May the force be with you")); */

  function findLongestWord(str) {
    let arrFromStr= str.split(' ');
    let longest = arrFromStr.reduce((longestWord, currentWord)=>{
        return longestWord.length > currentWord.length ? longestWord : currentWord
    })
    return longest.length
  }
  
  console.log(findLongestWord("May the force be with you"));


  
  