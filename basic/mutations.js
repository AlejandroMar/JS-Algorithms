function mutation(arr) {

    for (var i = 0; i < arr[1].length; i++) {
        if (arr[0].toLowerCase().indexOf(arr[1].toLowerCase().charAt(i)) !== -1) {
            continue;
        } else {
            return false;
        }
    }
    return true
}

console.log(mutation(["hello", "neo"]));





