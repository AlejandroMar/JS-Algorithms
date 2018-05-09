function bouncer(arr) {
    // Don't show a false ID to this bouncer.
    arr = arr.filter(function(value, index){
        if(value) return value;
    })
    return arr;
  }

  console.log(bouncer([1, null, NaN, 2, undefined]));
  