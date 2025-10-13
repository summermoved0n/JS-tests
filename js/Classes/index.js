class Persone {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  introduce() {
    console.log(`Hi, my name is ${this.name} and I am ${this.age} years old.`);
  }
}

class Student extends Persone {
  constructor(name, age, grade) {
    super(name, age);
    this.grade = grade;
  }

  stydy() {
    console.log(`${this.name} is studying for grade ${this.grade}.`);
  }
}

class BankAccount {
  #balance;

  constructor(balance) {
    this.#balance = balance;
  }

  deposit(amount) {
    this.#balance += amount;
  }

  withdraw(amount) {
    this.#balance -= amount;
  }

  getBalance() {
    return this.#balance;
  }
}

class Animal {
  speak() {
    return "Some sound";
  }
}

class Dog extends Animal {
  speak() {
    return "Woof";
  }
}

class Cat extends Animal {
  speak() {
    return "Meow";
  }
}

class Library {
  constructor() {
    this.books = ["1984", "To Kill a Mockingbird", "The Great Gatsby"];
  }

  addBook(title) {
    this.books.push(title);
  }

  listBooks() {
    return this.books;
  }

  findBook(title) {
    return this.books.includes(title);
  }
}

class MathHelper {
  static add(a, b) {
    return a + b;
  }

  static multiply(a, b) {
    return a * b;
  }
}

class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  get area() {
    return this.width * this.height;
  }

  set setWidth(width) {
    if (width <= 0) {
      throw new Error("Width must be positive");
    }

    this.width = width;
  }
}

class Shape {
  getArea() {
    throw new Error("Method 'getArea()' must be implemented.");
  }
}

class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }

  getArea() {
    return Math.PI * Math.pow(this.radius, 2);
  }
}

class Square extends Shape {
  constructor(side) {
    super();
    this.side = side;
  }

  getArea() {
    return Math.pow(this.side, 2);
  }
}

/**
 *  Vehicle -> Car -> ElectricCar
 */

class Vehicle {
  move() {
    console.log("The vehicle is moving");
  }
}

class Car extends Vehicle {
  drive() {
    console.log("The car is driving");
  }
}

class ElectricCar extends Car {
  charge() {
    console.log("The electric car is charging");
  }
}

class Team {
  constructor() {
    this.players = [];
  }

  addPlayer(player) {
    this.players.push(player);
  }

  listPlayers() {
    return this.players;
  }

  findByPosition(position) {
    return this.players.filter((player) => player.position === position);
  }
}
