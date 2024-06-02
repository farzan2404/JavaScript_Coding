// ****Trim*****
let str = "   farzanfarooqui"

console.log(str);
console.log(str.trimStart())


// Replace method.
let str2 = "farzan  farooqui";
console.log(str2.replace(/\s+/g, ''));


let url = 'https://farzan/farzooqui%20.com'
let url2 = url.replace('%20', '-')

console.log(url2);

// /\s+, this regular expression matches one or more whitespaces in the words or sentence.
// /g, means global, it will replace all the matches in the string.
// '' this empty string means the matched whitespaces are replaced with this empty one.


// **********Example************

let str3 = "mohammad-fazran-farooqui"

console.log(str3.split('a'))