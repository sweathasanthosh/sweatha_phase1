function print(msg) {
  let div = document.getElementById("output");
  let p = document.createElement("p");
  p.textContent = msg;
  div.appendChild(p);
}

var a = 10;
let name = "Sweatha";
const pi = 3.14;

print("Type of a: " + typeof a);
print("Type of name: " + typeof name);

let sum = 10 + 5;
print("Sum: " + sum);

if (a > 5) {
  print("Greater than 5");
} else {
  print("Less than or equal to 5");
}

for (let i = 1; i <= 3; i++) {
  print("Number: " + i);
}

function checkEvenOdd(num) {
  return num % 2 === 0 ? "Even" : "Odd";
}

const multiply = (x, y) => x * y;

function checkNumber() {
  let num = document.getElementById("num").value;
  document.getElementById("result").innerText = checkEvenOdd(num);
}

let items = ["Apple", "Banana", "Mango"];

items.push("Orange");

items.pop();

let upperItems = items.map(item => item.toUpperCase());
print("Uppercase: " + upperItems);

let filtered = items.filter(item => item !== "Banana");
print("Filtered: " + filtered);

let list = document.getElementById("list");

items.forEach(item => {
  let li = document.createElement("li");
  li.innerText = item;
  list.appendChild(li);
});

function changeText() {
  document.getElementById("title").innerText = "Text Changed!";
  print("Text updated");
}

function changeColor() {
  document.querySelector("#title").style.color = "blue";
  print("Color changed");
}

function addItem() {
  let li = document.createElement("li");
  li.innerText = "New Item";
  list.appendChild(li);
  print("Item added");
}

function removeItem() {
  if (list.lastChild) {
    list.removeChild(list.lastChild);
    print("Item removed");
  } else {
    print("No item to remove");
  }
}