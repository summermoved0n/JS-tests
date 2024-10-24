"use strict";

function Task1() {
  // Change code below this line
  const productName = "Droid";
  // console.log(productName);
  // 'Droid'
  const pricePerItem = 2000;
  // console.log(pricePerItem);
  // 2000
}

function Task2() {
  let productName = "Droid";
  let pricePerItem = 2000;

  // Change code below this line

  productName = "Repair droid";
  pricePerItem = 3500;
}

function Task3() {
  // Change code below this line
  const topSpeed = 160;
  const distance = 617.54;
  const login = "mango935";
  const isOnline = true;
  const isAdmin = false;
}

function Task4() {
  const pricePerItem = 3500;
  const orderedQuantity = 4;

  // Change code below this line
  const totalPrice = pricePerItem * orderedQuantity;
}

function Task5() {
  const productName = "Droid";
  const pricePerItem = 3500;

  // Change code below this line
  const message = `You picked ${productName}, price per item is ${pricePerItem} credits`;
}

function Task6() {
  const orderedQuantity = 6;
  const pricePerDroid = 800;
  const deliveryFee = 50;
  const totalPrice = pricePerDroid * orderedQuantity + deliveryFee;
  const message = `You ordered droids worth ${totalPrice} credits. Delivery (${deliveryFee} credits) is included in total price.`;
}

function Task7() {
  function sayHi() {
    console.log("Hello, this is my first function!");
  }

  sayHi();
}

function Task8() {
  // Change code below this line
  function add(a, b, c) {
    console.log(`Addition result equals ${a + b + c}`);
    // Change code above this line
  }

  add(15, 27, 10);
  add(10, 20, 30);
  add(5, 10, 15);
}

function Task9() {
  function add(a, b, c) {
    // Change code below this line
    return a + b + c;
    // Change code above this line
  }

  add(2, 5, 8); // 15

  console.log(add(15, 27, 10));
  console.log(add(10, 20, 30));
  console.log(add(5, 10, 15));
}

function Task10() {
  function makeMessage(name, price) {
    // Change code below this line
    const message = `You picked ${name}, price per item is ${price} credits`;
    // Change code above this line
    return message;
  }

  makeMessage("Radar", 6150);
  makeMessage("Scanner", 3500);
  makeMessage("Reactor", 8000);
  makeMessage("Engine", 4070);
}

function Task11() {
  function calculateTotalPrice(orderedQuantity, pricePerItem) {
    // Change code below this line
    const totalPrice = orderedQuantity * pricePerItem;

    // Change code above this line
    return totalPrice;
  }

  calculateTotalPrice(5, 100);
  calculateTotalPrice(8, 60);
  calculateTotalPrice(3, 400);
  calculateTotalPrice(1, 3500);
  calculateTotalPrice(12, 70);
}

function Task12() {
  function makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) {
    // Change code below this line
    const message = `You ordered droids worth ${
      orderedQuantity * pricePerDroid + deliveryFee
    } credits. Delivery (${deliveryFee} credits) is included in total price.`;
    // Change code above this line
    return message;
  }

  makeOrderMessage(2, 100, 50);
  makeOrderMessage(4, 300, 100);
  makeOrderMessage(10, 70, 200);
}

function Task13() {
  function isAdult(age) {
    // Change code below this line
    const passed = age >= 18;

    // Change code above this line
    return passed;
  }

  isAdult(20);
  isAdult(14);
  isAdult(8);
  isAdult(37);
}

function Task14() {
  function isValidPassword(password) {
    const SAVED_PASSWORD = "jqueryismyjam";
    // Change code below this line
    const isMatch = SAVED_PASSWORD === password;

    // Change code above this line
    return isMatch;
  }

  isValidPassword("mangodab3st");
  isValidPassword("kiwirul3z");
  isValidPassword("jqueryismyjam");
}

function Task15() {
  function checkAge(age) {
    let message;

    if (age >= 18) {
      // Change this line
      message = "You are an adult";
    } else {
      message = "You are a minor";
    }

    return message;
  }

  checkAge(20);
  checkAge(8);
  checkAge(14);
  checkAge(38);
}

function Task16() {
  function checkStorage(available, ordered) {
    let message;
    // Change code below this line
    if (ordered > available) {
      message = "Not enough goods in stock!";
    } else {
      message = "Order is processed, our manager will contact you.";
    }

    // Change code above this line
    return message;
  }

  checkStorage(100, 50);
  checkStorage(100, 130);
  checkStorage(200, 20);
  checkStorage(200, 150);
  checkStorage(150, 180);
}

function Task17() {
  let a = 5;
  let b = 10;
  let c = 15;
  let d = 20;

  // Change code below this line
  a += 2;
  b -= 4;
  c *= 3;
  d /= 10;
}

function Task18() {
  function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
    let message;
    // Change code below this line
    const totalPrice = pricePerDroid * orderedQuantity;

    if (totalPrice > customerCredits) {
      message = "Insufficient funds!";
    } else {
      message = `You ordered ${orderedQuantity} droids, you have ${
        customerCredits - totalPrice
      } credits left`;
    }
    // Change code above this line
    return message;
  }

  makeTransaction(3000, 5, 23000);
  makeTransaction(1000, 3, 15000);
  makeTransaction(5000, 10, 8000);
  makeTransaction(2000, 8, 10000);
  makeTransaction(500, 10, 5000);
}

function Task19() {
  function checkPassword(password) {
    const ADMIN_PASSWORD = "jqueryismyjam";
    let message;

    if (!password) {
      // Change this line
      message = "Canceled by user!";
    } else if (password === ADMIN_PASSWORD) {
      // Change this line
      message = "Welcome!";
    } else {
      message = "Access denied, wrong password!";
    }

    return message;
  }

  checkPassword("mangohackzor");
  checkPassword(null);
  checkPassword("polyhax");
  checkPassword("jqueryismyjam");
}

function Task20() {
  function checkStorage(available, ordered) {
    let message;
    // Change code below this line
    if (!ordered) {
      message = "There are no products in the order!";
    } else if (ordered > available) {
      message = "Your order is too large, there are not enough items in stock!";
    } else {
      message = "The order is accepted, our manager will contact you";
    }
    // Change code above this line
    return message;
  }

  checkStorage(100, 50);
  checkStorage(100, 130);
  checkStorage(70, 0);
  checkStorage(200, 20);
  checkStorage(200, 250);
  checkStorage(150, 0);
}
