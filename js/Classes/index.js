class Person {
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

const l = new Library();
l.addBook("Moby");

console.log(l.listBooks());
console.log(l.findBook("1984"));
