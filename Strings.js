let name = `I am Anas,
I study is Dawood
university Karachi.`;
console.log(name);

let firstName = new String("Anas Rajput");
console.log(typeof(firstName));

// Concatenate
let op1 = "Anas ";
let op2 = "Rajput ";
let ans = op1 + op2;
console.log(ans);
// Another way
let op3 = "Mobile ";
let op4 = "Charger ";
let finalAns = `${op3}${op4}`;
console.log(finalAns);

// Length of String
let str = "Anas";
console.log(str.length);

// Upper and Lower case
let str2 = "HElLO";
console.log(str2.toUpperCase());
console.log(str2.toLowerCase());

// SubString
let str3 = "AnasRajput";
console.log(str3.substring(2)); //start from 2
console.log(str3.substring(2,5)); //start from 2nd index and will end at 4th because jo ending index ham dengy wo consider nhi hoga.

// Split sentence
let sentence = "hello jee kese ho";
let words = sentence.split(' ');
console.log(words);

