// Sprint-5 Assignment.js

// var ar = ["max","mona"], o = {}

// ar.forEach(w => w.split('').forEach(e => o[e] = (o[e] || 0)+1));
// console.log(o)



// var ar = ["max", "mona"];

// var result = ar.join('').split('').reduce(function(o, e) {
//   return o[e] = (o[e] || 0) + 1, o
// }, {});
// console.log(result)


// var ar = [ "bonjour", "coucou"], map = {};
// ar.join("").split("").forEach(e => map[e] = (map[e] || 0)+1);
// console.log(map);

// var     a = ["max","mona"],
// charCount = a.reduce((p,w) => w.split("").reduce((t,c) => (t[c] ? t[c]++: t[c] = 1,t),p),{});
// console.log(charCount);


// var arr = ["max","mona"],
//     counts = {};

// arr = arr.join("").split(""); // transforms the initial array into array of single characters
// arr.sort();
// arr.forEach((v) => (counts[v] = (counts[v])? ++counts[v] : 1));

// console.log(counts);  // {a: 2, m: 2, n: 1, o: 1, x: 1}



// var words = ['max', 'mona'],
//     output = {};
//     words.forEach(function(word){ 
//     for(i=0; i < word.split('').length; i++){
//     if(output[word[i]])
//       output[word[i]] += 1;
//     else{
//       output[word[i]] = 1;
//     }  
//   } 
// });




// var arr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// function counter(x) {
//     var count=0, temp = [];
//     x = x.split('');
//     console.log(x);
//     for(var i=0, len = x.length; i < len; i++) {
//         if(x[i] == "a") {
//             count++;
//         }
//     }
//     return count;
// }
// var a = "aabbddd";
// console.log(counter(a));



// function getFrequency(string) {
//     var freq = {};
//     for (var i=0; i<string.length;i++) {
//         var character = string.charAt(i);
//         if (freq[character]) {
//            freq[character]++;
//         } else {
//            freq[character] = 1;
//         }
//     }

//     return freq;
// };




// function getFrequency(string) {
//     var freq = {};
//     for (var i=0; i<string.length;i++) {
//         var character = string.charAt(i);
//         if (freq[character]) {
//            freq[character]++;
//         } else {
//            freq[character] = 1;
//         }
//     }

//     return freq;
// };



// let a = ['Guatemala', 'Canada', 'Costa Rica', 'Anguilla', 'North Korea'];
// let count = a.map(el => el.match(/a/g).length);
// console.log(count);


// var numOfTrue = Answers.filter(function(x){ return x === "true"; }).length;



function myFunction(myString, myLetter) {
	var myString = this.myString;
	var count = myString.filter(myLetter => (myLetter === "myLetter").length);
	return console.log(count)
}



