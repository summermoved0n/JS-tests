// ? Task 1

function checkAge(age) {
  if (age >= 18) {
    // Change this line
    return "You are an adult";
  }

  return "You are a minor";
}

// ? Task 2

function checkPassword(password) {
  const ADMIN_PASSWORD = "jqueryismyjam";
  // Change code below this line

  if (password === ADMIN_PASSWORD) {
    return "Welcome!";
  }

  return "Access denied, wrong password!";
  // Change code above this line
}

// ? Task 3

function checkStorage(available, ordered) {
  // Change code below this line
  if (ordered === 0) {
    return "Your order is empty!";
  }

  if (ordered > available) {
    return "Your order is too large, not enough goods in stock!";
  }

  return "The order is accepted, our manager will contact you";
}

checkStorage(100, 50);
checkStorage(100, 130);
checkStorage(70, 0);
checkStorage(200, 20);
checkStorage(200, 250);
checkStorage(150, 0);

// ? Task 4

// const fruits = ["apple", "plum", "pear", "orange"];

// ? Task 5

// const firstElement = fruits[0];
// const secondElement = fruits[1];
// const lastElement = fruits[fruits.length - 1];

// ? Task 6

// fruits[1] = "peach";
// fruits[3] = "banana";

// ? Task 7

// const fruitsArrayLength = fruits.length;

// ? Task 8

// const lastElementIndex = fruits.length - 1;
// const lastElement = fruits[lastElementIndex];

// ? Task 9

function getExtremeElements(array) {
  // Change code below this line
  return [array[0], array[array.length - 1]];
  // Change code above this line
}

getExtremeElements([1, 2, 3, 4, 5]);
getExtremeElements(["Earth", "Mars", "Venus"]);
getExtremeElements(["apple", "peach", "pear", "banana"]);

// ? Task 10

function splitMessage(message, delimiter) {
  let words;
  // Change code below this line
  words = message.split(delimiter);
  // Change code above this line
  return words;
}

splitMessage("Mango hurries to the train", " ");
splitMessage("Mango", "");
splitMessage("best_for_week", "_");

// ? Task 11

function calculateEngravingPrice(message, pricePerWord) {
  // Change code below this line
  const countOfMsg = message.split(" ");
  return countOfMsg.length * pricePerWord;
  // Change code above this line
}

calculateEngravingPrice("JavaScript is in my blood", 10);
calculateEngravingPrice("JavaScript is in my blood", 20);
calculateEngravingPrice("Web-development is creative work", 40);
calculateEngravingPrice("Web-development is creative work", 20);

// ? Task 12

function makeStringFromArray(array, delimiter) {
  let string;
  // Change code below this line
  string = array.join(delimiter);
  // Change code above this line
  return string;
}

makeStringFromArray(["Mango", "hurries", "to", "the", "train"], " ");
makeStringFromArray(["M", "a", "n", "g", "o"], "");
makeStringFromArray(["top", "picks", "for", "you"], "_");

// ? Task 13

function slugify(title) {
  // Change code below this line
  const lowTitle = title.toLowerCase();
  const splitArray = lowTitle.split(" ");
  return splitArray.join("-");
  // Change code above this line
}

slugify("Arrays for begginers");
slugify("English for developer");
slugify("Ten secrets of JavaScript");
slugify("How to become a JUNIOR developer in TWO WEEKS");

// ? Task 14

const fruits = ["apple", "plum", "pear", "orange", "banana"];

// Change code below this line
const firstTwoEls = fruits.slice(0, 2);
const nonExtremeEls = fruits.slice(1, fruits.length - 1);
const lastThreeEls = fruits.slice(-3);

// ? Task 15

const oldClients = ["Mango", "Ajax", "Poly", "Kiwi"];
const newClients = ["Peach", "Houston"];

const allClients = oldClients.concat(newClients); // Change this line

// ? Task 16

function makeArray(firstArray, secondArray, maxLength) {
  // Change code below this line
  const newArray = firstArray.concat(secondArray);

  if (newArray.length > maxLength) {
    return newArray.slice(0, maxLength);
  }

  return newArray;
  // Change code above this line
}

makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3);
makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4);
makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3);
makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2);
makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4);
makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0);

// ? Task 17
