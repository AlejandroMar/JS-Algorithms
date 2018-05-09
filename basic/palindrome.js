function palindrome(str) {
    let newStr = str.toLowerCase().replace(/\s/g, "").replace(/[^A-Za-z0-9]/g, '')
    let reversedString = str.split('').reverse().join('').toLowerCase().replace(/\s/g, "").replace(/[^A-Za-z0-9]/g, '')
    return reversedString === newStr
  
  }
  
  
  
  console.log(palindrome("0_0 (: /-\ :) 0-0"));
  