/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const  romanValues = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
};
let result = 0;
for (let i=0; i<s.length; i++) {
    const currentValue = romanValues[s[i]];
    const nextValue = romanValues[s[i+1]];

    if (nextValue > currentValue){
        result +=nextValue - currentValue;
        i++;
    } else {
        result+=currentValue;
    }
}
    return result;
};

module.exports ={romanToInt};