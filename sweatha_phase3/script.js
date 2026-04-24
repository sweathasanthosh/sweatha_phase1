// ===== TASK 1 =====

// variables
var myName = "Sweatha";
let myAge = 19;
const city = "kochi";

// datatype
let status = true;

// operator
let add = 20 + 5;
console.log(add);

// condition
if (myAge >= 19) {
  console.log("Eligible");
} else {
  console.log("Not Eligible");
}

// loop
for (let i = 0; i < 5; i++) {
  console.log("Count:", i);
}


// ===== TASK 2 =====

// function
function evenOdd(n) {
  if (n % 2 == 0) {
    return "Number is Even";
  } else {
    return "Number is Odd";
  }
}

// button function
function showResult() {
  let num = document.getElementById("number").value;
  let res = evenOdd(num);
  document.getElementById("ans").innerText = res;
}


// array
let things = ["Pen", "Book", "Bottle"];

// display
let ul = document.getElementById("myList");

for (let i = 0; i < things.length; i++) {
  let li = document.createElement("li");
  li.innerText = things[i];
  ul.appendChild(li);
}