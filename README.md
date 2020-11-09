# Sprint-5-Assignment

function myFunction(myString, myLetter) {
  count = (myString.match(new RegExp(myLetter, "g")) || []).length;
  console.log(myString + " has " + count + " times " + myLetter + ".");
}

myFunction("clarusway", "a");
