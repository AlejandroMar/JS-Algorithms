function convertHTML(str) {
    // &colon;&rpar;
    var htmlStr = str.replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&apos;');

    return htmlStr;
}

console.log(convertHTML("Dolce & Gabbana"));
console.log(convertHTML("Hamburgers < Pizza < Tacos"));

// a little more advanced

function convertHTML(str) {
    // Use Object Lookup to declare as many HTML entities as needed.
    var htmlEntities = {
      '&':'&amp;',
      '<':'&lt;',
      '>':'&gt;',
      '\"':'&quot;',
      '\'':"&apos;"
    };
    //Use map function to return a filtered str with all entities changed automatically.
    return str.split('').map(function(entity){
      return htmlEntities[entity] || entity;
    }).join('');
  }
  
  // test here
  convertHTML("Dolce & Gabbana");