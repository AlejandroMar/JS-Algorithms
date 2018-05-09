function convertToRoman(num) {
    var roman = '';
    var romans = [
        {1000: 'M'},
        {900: 'CM'},
        {500: 'D'},
        {400: 'CD'},
        {100: 'C'},
        {90: 'XC'},
        {50: 'L'},
        {40: 'XL'},
        {10: 'X'},
        {9: 'IX'},
        {5: 'V'},
        {4: 'IV'},
        {1:'I'}
    ];
    if(num == 0){
        return '';
    }


    for(var i=0; i<romans.length; i++){
        if(num === 0) return roman;
        while(num >= Object.keys(romans[i])[0]){
            roman += Object.values(romans[i])[0];
            num -= Object.keys(romans[i])[0];
        }
        
    }
    return roman;
}

console.log(convertToRoman(4));


