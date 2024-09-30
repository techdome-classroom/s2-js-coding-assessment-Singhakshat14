/**
 * @param {string} s
 * @return {boolean}
 */
var isValid= function(s){
    const stack=[];
    const brackets={
        ')': '(',
        '}': '{',
        ']': '['
    };
    for (let char of s){
        if (Object.values(brackets).includes(char)){
            stack.push(char);
        } else if (brackets)
    }

}