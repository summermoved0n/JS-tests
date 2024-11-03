// ? test1

const test1 = () => {
  function makePizza() {
    return "Your pizza is being prepared, please wait.";
  }
  // Change code below this line

  const result = makePizza();
  const pointer = makePizza;
};

// ? test2

const test2 = () => {
  function deliverPizza(pizzaName) {
    return `Delivering ${pizzaName} pizza.`;
  }

  function makePizza(pizzaName) {
    return `Pizza ${pizzaName} is being prepared, please wait...`;
  }

  // Chande code below this line
  function makeMessage(pizzaName, callback) {
    return callback(pizzaName);
  }
};

// ? test3

const test3 = () => {
  function makePizza(pizzaName, callback) {
    console.log(`Pizza ${pizzaName} is being prepared, please wait...`);
    callback(pizzaName);
  }

  makePizza("Royal Grand", function deliverPizza(pizzaName) {
    console.log(`Delivering pizza ${pizzaName}.`);
  });
  // Change code below this line

  makePizza("Ultracheese", function eatPizza(pizzaName) {
    console.log(`Eating pizza ${pizzaName}`);
  });
};

// ? test4

const test4 = () => {
  const pizzaPalace = {
    pizzas: ["Ultracheese", "Smoked", "Four meats"],
    order(pizzaName, onSuccess, onError) {
      if (this.pizzas.includes(pizzaName)) {
        return onSuccess(pizzaName);
      } else {
        return onError(
          `There is no pizza with a name ${pizzaName} in the assortment.`
        );
      }
    },
  };
  // Change code above this line

  // Callback for onSuccess
  function makePizza(pizzaName) {
    return `Your order is accepted. Cooking pizza ${pizzaName}.`;
  }

  // Callback for onError
  function onOrderError(error) {
    console.log(`Error! ${error}`);
    return `Error! ${error}`;
  }

  // Method calls with callbacks
  pizzaPalace.order("Smoked", makePizza, onOrderError);
  pizzaPalace.order("Four meats", makePizza, onOrderError);
  pizzaPalace.order("Big Mike", makePizza, onOrderError);
  pizzaPalace.order("Vienna", makePizza, onOrderError);
};

// ? test5

const test5 = () => {
  function calculateTotalPrice(orderedItems) {
    let totalPrice = 0;
    // Change code below this line

    orderedItems.forEach((order) => {
      totalPrice += order;
    });
    console.log(totalPrice);
    // Change code above this line
    return totalPrice;
  }

  calculateTotalPrice([12, 85, 37, 4]);
  calculateTotalPrice([164, 48, 291]);
  calculateTotalPrice([412, 371, 94, 63, 176]);
};

// ? test6

const test6 = () => {
  function filterArray(numbers, value) {
    const filteredNumbers = [];
    // Change code below this line

    numbers.forEach((number) => {
      if (number > value) {
        filteredNumbers.push(number);
      }
    });
    // Change code above this line
    return filteredNumbers;
  }

  filterArray([1, 2, 3, 4, 5], 3);
  filterArray([1, 2, 3, 4, 5], 4);
  filterArray([1, 2, 3, 4, 5], 5);
  filterArray([12, 24, 8, 41, 76], 38);
  filterArray([12, 24, 8, 41, 76], 20);
};

// ? test7

const test7 = () => {
  function getCommonElements(firstArray, secondArray) {
    const commonElements = [];
    // Change code below this line

    firstArray.forEach((item) => {
      if (secondArray.includes(item)) {
        commonElements.push(item);
      }
    });
    console.log(commonElements);
    return commonElements;
    // Change code above this line
  }

  getCommonElements([1, 2, 3], [2, 4]);
  getCommonElements([1, 2, 3], [2, 1, 17, 19]);
  getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]);
  getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]);
  getCommonElements([1, 2, 3], [10, 20, 30]);
};

// ? test8

const test8 = () => {
  // Change code below this line

  const calculateTotalPrice = (quantity, pricePerItem) => {
    // Change code above this line
    return quantity * pricePerItem;
  };

  calculateTotalPrice(5, 100);
  calculateTotalPrice(8, 60);
  calculateTotalPrice(3, 400);
};

// ? test9

const test9 = () => {
  // Change code below this line
  const calculateTotalPrice = (quantity, pricePerItem) =>
    quantity * pricePerItem;

  // Change code above this line
};

// ? test10

const test10 = () => {
  // Change code below this line
  const calculateTotalPrice = (orderedItems) => {
    let totalPrice = 0;

    orderedItems.forEach((item) => {
      totalPrice += item;
    });

    return totalPrice;
  };
  // Change code above this line
};

// ? test11

const test11 = () => {
  // Change code below this line
  const filterArray = (numbers, value) => {
    const filteredNumbers = [];

    numbers.forEach((number) => {
      if (number > value) {
        filteredNumbers.push(number);
      }
    });

    // Change code above this line
    return filteredNumbers;
  };
};

// ? test12

const test12 = () => {
  // Change code below this line
  const getCommonElements = (firstArray, secondArray) => {
    const commonElements = [];

    firstArray.forEach((element) => {
      if (secondArray.includes(element)) {
        commonElements.push(element);
      }
    });

    // Change code above this line
    return commonElements;
  };
};

// ? test13

const test13 = () => {
  function changeEven(numbers, value) {
    // Change code below this line
    const array = [...numbers];
    for (let i = 0; i < array.length; i += 1) {
      if (array[i] % 2 === 0) {
        array[i] = array[i] + value;
      }
    }
    // Change code above this line
    return array;
  }
};

// ? test14

const test14 = () => {
  const planets = ["Earth", "Mars", "Venus", "Jupiter"];
  // Change code below this line
  const planetsLengths = planets.map((planet) => planet.length);
};

// ? test15

const test15 = () => {
  const books = [
    {
      title: "The Last Kingdom",
      author: "Bernard Cornwell",
      rating: 8.38,
    },
    {
      title: "Beside Still Waters",
      author: "Robert Sheckley",
      rating: 8.51,
    },
    {
      title: "The Dream of a Ridiculous Man",
      author: "Fyodor Dostoevsky",
      rating: 7.75,
    },
    { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
    { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
  ];
  // Change code below this line

  const titles = books.map((book) => book.title);
};

// ? test 16

const test16 = () => {
  const books = [
    {
      title: "The Last Kingdom",
      author: "Bernard Cornwell",
      genres: ["adventure", "history"],
    },
    {
      title: "Beside Still Waters",
      author: "Robert Sheckley",
      genres: ["fiction"],
    },
    {
      title: "Redder Than Blood",
      author: "Tanith Lee",
      genres: ["horror", "mysticism"],
    },
  ];
  // Change code below this line

  const genres = books.flatMap((book) => book.genres);
};

//? test17

const test17 = () => {
  // Change code below this line
  const getUserNames = (users) => {
    return users.map((user) => user.name);
  };
  // Change code above this line
};

// ? test 18

const test18 = () => {
  // Change code below this line
  const getUserEmails = (users) => users.map((user) => user.email);
  // Change code above this line
};

// ? test19

const test19 = () => {
  const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];
  // Change code below this line

  const evenNumbers = numbers.filter((number) => number % 2 === 0);
  const oddNumbers = numbers.filter((number) => number % 2 !== 0);
};

// ? test20

const test20 = () => {
  const books = [
    {
      title: "The Last Kingdom",
      author: "Bernard Cornwell",
      genres: ["adventure", "history"],
    },
    {
      title: "Beside Still Waters",
      author: "Robert Sheckley",
      genres: ["fiction", "mysticism"],
    },
    {
      title: "Redder Than Blood",
      author: "Tanith Lee",
      genres: ["horror", "mysticism", "adventure"],
    },
  ];
  // Change code below this line
  const allGenres = books.flatMap((book) => book.genres);
  const uniqueGenres = allGenres.filter((ganre, index, array) => {
    return array.indexOf(ganre) === index;
  });
};

// ? test21

const test21 = () => {
  const books = [
    {
      title: "The Last Kingdom",
      author: "Bernard Cornwell",
      rating: 8.38,
    },
    {
      title: "Beside Still Waters",
      author: "Robert Sheckley",
      rating: 8.51,
    },
    {
      title: "The Dream of a Ridiculous Man",
      author: "Fyodor Dostoevsky",
      rating: 7.75,
    },
    { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
    { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
  ];

  const MIN_RATING = 8;
  const AUTHOR = "Bernard Cornwell";
  // Change code below this line

  const topRatedBooks = books.filter((book) => book.rating >= MIN_RATING);
  const booksByAuthor = books.filter((book) => book.author === AUTHOR);
};

// ? test22

const test22 = () => {
  // Change code below this line
  const getUsersWithEyeColor = (users, color) =>
    users.filter((user) => user.eyeColor === color);
  // Change code above this line
};

// ? test23

const test23 = () => {
  // Change code below this line
  const getUsersWithAge = (users, minAge, maxAge) =>
    users.filter((user) => user.age >= minAge && user.age <= maxAge);
  // Change code above this line
};

// ? test24

const test24 = () => {
  // Change code below this line
  const getUsersWithFriend = (users, friendName) => {
    const array = users.filter((user) => user.friends.includes(friendName));
    console.log(array.map((name) => name.name));
    return array.map((name) => name.name);
  };
  // Change code above this line
};
