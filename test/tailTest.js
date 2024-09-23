const assertEqual = require("../assertEqual");
const tail = require("../tail");
//TEST CODE

const result = tail(["Hello", "Lighthouse", "Labs"]);
console.log(result);
assertEqual(result.length, 2);
const words = tail(["Yo Yo", "Lighthouse", "Labs"]);
assertEqual(words.length, 2); 
const words1 = tail(["Yo Yo"]);
assertEqual(words1.length, 0); 
const words2 = tail([]);
assertEqual(words2.length, 0); 