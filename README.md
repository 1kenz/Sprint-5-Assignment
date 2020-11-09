# Sprint-5-Assignment

function myFunction(myString, myLetter) {<br>
  count = (myString.match(new RegExp(myLetter, "g")) || []).length;<br>
  console.log(myString + " has " + count + " times " + myLetter + ".");<br>
}<br><br>

myFunction("clarusway", "a");
