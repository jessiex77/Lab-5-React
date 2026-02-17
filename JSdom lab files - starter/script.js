alert ("Hello my name is Zijue Xu");


//variables
const myName = "Zijue Xu"
const fruits = ['apples', 'bananas', 'mangos', 'strawberries', 'blueberries'];
const car = {type:"Ford", model:"Escape",color:"white"};


//Challenge 1a
function sayHelloWorld() {

    // Step 1 - Move your alert that runs on page load to here
    // PASTE ALERT FROM TOP OF PAGE HERE
  alert ("Hello my name is Zijue Xu");

    // Step 2 - Update the alert to display a concatenation of the variables above that spell out something like this:
    // Hi my name is Clint.  I like apples and I drive a silver Toyota Prius.  You'll need to add color to the car object

  alert(
  "Hi, my name is " + myName + 
  ". I like " + fruits[0] + 
  " and I drive a " + car.color + 
  " " + car.type + " " + car.model + "."
);
}


//Challenge 1b
function dogYears() {
    // Set a variable called age equal to your age
    age = 21;
    
    // divide the age variable by 7 and store it a variable called answer
    answer = age / 7;

    // Challenge 1a - Display result in an alert
    alert ("In dog years you are: " + answer);
    let wholeanswer = Math.round(answer)

    // Challenge 1b - Display result in an <h2> tag
    let resultElement = document.getElementById("results1");
    resultElement.textContent = "In dog years you are: " + wholeanswer;
  }



//Challenge 2
 function Challenge2() {

  age = 21;
  answer = age/7;
  let message;
  if (answer < 14) {
    message = "You are a puppy";}
  else {
    message = "You are an adult dog"
  }
  alert(message)

 let resultElement = document.getElementById("results2");
    resultElement.textContent = message;
 }




//Challenge 3
 function Challenge3() {
  let resultElement = document.getElementById("results3");
  let ul = document.createElement("ul");
  const challenge3fruits = fruits.slice();
for (var i = 0; i < challenge3fruits.length; i++) {
  let li = document.createElement("li");
  li.textContent = challenge3fruits[i];
  ul.appendChild(li);
}
resultElement.appendChild(ul);
 }



 //Challenge 4
 function Challenge4() {
  let resultElement = document.getElementById("results4");
  let ul = document.createElement("ul");
for (var i = 0; i < fruits.length; i++) {
    let li = document.createElement("li");
    let abbrev = fruits[i].slice(0, 3) + "s";
    li.textContent = abbrev;
    ul.appendChild(li);
 }
  resultElement.appendChild(ul);
}



 //Challenge 5
 function Challenge5() {
  let resultElement = document.getElementById("results5");
  let ul = document.createElement("ul");
  const challenge5fruits = fruits.slice();
  challenge5fruits.pop()
  let firstFruit = challenge5fruits.shift();
  challenge5fruits.push(firstFruit);
  for (var i = 0; i < challenge5fruits.length; i++) {
  let li = document.createElement("li");
  li.textContent = challenge5fruits[i];
  ul.appendChild(li);
}
resultElement.appendChild(ul);
 }




 //Challenge 6
 function Challenge6() {

    let resultElement = document.getElementById("results6");
    const randomFruit = fruits[Math.floor(Math.random() * fruits.length)];

  let message = document.createElement("p");
  message.textContent = "🎉 Wow! Your random fruit is: " + randomFruit;

  let button = document.createElement("button");
  button.textContent = "Pick Again";
  button.onclick = Challenge6;

  resultElement.appendChild(message);
  resultElement.appendChild(button);



 }
