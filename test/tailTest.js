const assertEqual = require("../assertEqual");
const tail = require("../tail");
//TEST CODE

const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2);
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); 
assertEqual(words.length, 3); 
const words1 = ["Yo Yo"];
tail(words1);
assertEqual(words1.length, 1); 
const words2 = [];
tail(words2);
assertEqual(words2.length, 0); 