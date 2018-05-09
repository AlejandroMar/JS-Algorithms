/* function whatIsInAName(collection, source) {
    // What's in a name?
    var arr = [];
    
    collection.forEach(function(element) {
        var collectionArr = Object.keys(element);
        var isIn = false;
        for(var prop in source){
            if(collectionArr.includes(prop) && source[prop] === element[prop]){
                isIn = true;
            } else{
                isIn = false;
            }  
        }
        if(isIn){
            arr.push(element);
        }
    });
   
    
    // Only change code below this line
    
    
    // Only change code above this line
    return arr;
  }
  
  console.log(whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }));
   */

//Another

