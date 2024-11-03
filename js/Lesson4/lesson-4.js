const users = [
  {
    name: "Moore Hensley",
    email: "moorehensley@indexia.com",
    eyeColor: "blue",
    friends: ["Sharron Pace"],
    isActive: false,
    balance: 2811,
    gender: "male",
    age: 37,
  },
  {
    name: "Sharlene Bush",
    email: "sharlenebush@tubesys.com",
    eyeColor: "blue",
    friends: ["Briana Decker", "Sharron Pace"],
    isActive: true,
    balance: 3821,
    gender: "female",
    age: 34,
  },
  {
    name: "Ross Vazquez",
    email: "rossvazquez@xinware.com",
    eyeColor: "green",
    friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
    isActive: false,
    balance: 3793,
    gender: "male",
    age: 24,
  },
  {
    name: "Elma Head",
    email: "elmahead@omatom.com",
    eyeColor: "green",
    friends: ["Goldie Gentry", "Aisha Tran"],
    isActive: true,
    balance: 2278,
    gender: "female",
    age: 21,
  },
  {
    name: "Carey Barr",
    email: "careybarr@nurali.com",
    eyeColor: "blue",
    friends: ["Jordan Sampson", "Eddie Strong"],
    isActive: true,
    balance: 3951,
    gender: "male",
    age: 27,
  },
  {
    name: "Blackburn Dotson",
    email: "blackburndotson@furnigeer.com",
    eyeColor: "brown",
    friends: ["Jacklyn Lucas", "Linda Chapman"],
    isActive: false,
    balance: 1498,
    gender: "male",
    age: 38,
  },
  {
    name: "Sheree Anthony",
    email: "shereeanthony@kog.com",
    eyeColor: "brown",
    friends: ["Goldie Gentry", "Briana Decker"],
    isActive: true,
    balance: 2764,
    gender: "female",
    age: 39,
  },
];

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

// ? test25

const test25 = () => {
  // Change code below this line
  const getFriends = (users) => {
    const getFriends = users.flatMap((user) => user.friends);

    return getFriends.filter(
      (user, index, array) => array.indexOf(user) === index
    );
  };
  // Change code above this line
};

// ? test26

const test26 = () => {
  // Change code below this line
  const getActiveUsers = (users) =>
    users.filter((user) => user.isActive === true);

  // Change code above this line
};

// ? test27

const test27 = () => {
  // Change code below this line
  const getInactiveUsers = (users) => users.filter((user) => !user.isActive);
  // Change code above this line
};

// ? test28

const test28 = () => {
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
  ];
  const BOOK_TITLE = "The Dream of a Ridiculous Man";
  const AUTHOR = "Robert Sheckley";
  // Change code below this line

  const bookWithTitle = books.find((book) => book.title === BOOK_TITLE);
  const bookByAuthor = books.find((book) => book.author === AUTHOR);
};

// ? test29

const test29 = () => {
  // Change code below this line
  const getUserWithEmail = (users, email) =>
    users.find((user) => user.email === email);
  // Change code above this line
};

// ? test30

const test30 = () => {
  const firstArray = [26, 94, 36, 18];
  const secondArray = [17, 61, 23];
  const thirdArray = [17, 26, 94, 61, 36, 23, 18];
  // Change code below this line

  const eachElementInFirstIsEven = firstArray.every((item) => item % 2 === 0);
  const eachElementInFirstIsOdd = firstArray.every((item) => item % 2 !== 0);

  const eachElementInSecondIsEven = secondArray.every((item) => item % 2 === 0);
  const eachElementInSecondIsOdd = secondArray.every((item) => item % 2 !== 0);

  const eachElementInThirdIsEven = thirdArray.every((item) => item % 2 === 0);
  const eachElementInThirdIsOdd = thirdArray.every((item) => item % 2 !== 0);
};

// ? test31

const test31 = () => {
  const isEveryUserActive = (users) =>
    users.every((user) => user.isActive === true);
};

// ? test32

const test32 = () => {
  const firstArray = [26, 94, 36, 18];
  const secondArray = [17, 61, 23];
  const thirdArray = [17, 26, 94, 61, 36, 23, 18];
  // Change below this line

  const anyElementInFirstIsEven = firstArray.some((item) => item % 2 === 0);
  const anyElementInFirstIsOdd = firstArray.some((item) => item % 2 !== 0);

  const anyElementInSecondIsEven = secondArray.some((item) => item % 2 === 0);
  const anyElementInSecondIsOdd = secondArray.some((item) => item % 2 !== 0);

  const anyElementInThirdIsEven = thirdArray.some((item) => item % 2 === 0);
  const anyElementInThirdIsOdd = thirdArray.some((item) => item % 2 !== 0);
};

// ? test33

const test33 = () => {
  const isAnyUserActive = (users) =>
    users.some((user) => user.isActive === true);
};

// ? test34

const test34 = () => {
  const players = {
    mango: 1270,
    poly: 468,
    ajax: 710,
    kiwi: 244,
  };
  const playtimes = Object.values(players); // [1270, 468, 710, 244]
  // Change code below this line

  const totalPlayTime = playtimes.reduce((prev, number) => {
    return prev + number;
  }, 0);
  console.log(totalPlayTime);
  // Change code above this line
  const averagePlayTime = totalPlayTime / playtimes.length;
};

// ? test35

const test35 = () => {
  const players = [
    { name: "Mango", playtime: 1270, gamesPlayed: 4 },
    { name: "Poly", playtime: 469, gamesPlayed: 2 },
    { name: "Ajax", playtime: 690, gamesPlayed: 3 },
    { name: "Kiwi", playtime: 241, gamesPlayed: 1 },
  ];
  // Change code below this line

  const totalAveragePlaytimePerGame = players.reduce((acc, element, index) => {
    console.log("acc: ", acc);
    console.log("element: ", element);
    return acc + element.playtime / element.gamesPlayed;
  }, 0);
};

// ? test36

const test36 = () => {
  // Change code below this line
  const calculateTotalBalance = (users) =>
    users.reduce((acc, el) => acc + el.balance, 0);
  // Change code above this line
};

// ? test37

const test37 = () => {
  const getTotalFriendCount = (users) =>
    users.reduce((acc, el) => acc + el.friends.length, 0);
};

// ? test38

const test38 = () => {
  const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
  const authors = [
    "Tanith Lee",
    "Bernard Cornwell",
    "Robert Sheckley",
    "Fyodor Dostoevsky",
  ];
  // Change code below this line

  const ascendingReleaseDates = [...releaseDates].sort();

  const alphabeticalAuthors = [...authors].sort();
};

// ? test39

const test39 = () => {
  const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
  // Change code below this line

  const ascendingReleaseDates = [...releaseDates].sort((a, b) => a - b);

  const descendingReleaseDates = [...releaseDates].sort((a, b) => b - a);
};

// ? test40

const test40 = () => {
  const authors = [
    "Tanith Lee",
    "Bernard Cornwell",
    "Robert Sheckley",
    "Fyodor Dostoevsky",
    "Howard Lovecraft",
  ];
  // Change code below this line

  const authorsInAlphabetOrder = [...authors].sort((a, b) =>
    a.localeCompare(b)
  );

  const authorsInReversedOrder = [...authors].sort((a, b) =>
    b.localeCompare(a)
  );
};

// ? test41

const test41 = () => {
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

  const sortedByAuthorName = books
    .map((book) => book.author)
    .sort((a, b) => a.localeCompare(b));

  const sortedByReversedAuthorName = books
    .map((book) => book.author)
    .sort((a, b) => b.localeCompare(a));

  const sortedByAscendingRating = books
    .map((book) => book.rating)
    .sort((a, b) => a - b);

  const sortedByDescentingRating = books
    .map((book) => book.rating)
    .sort((a, b) => b - a);
};

// ? test42

const test42 = () => {
  // Change code below this line
  const sortByAscendingBalance = (users) =>
    users.sort((a, b) => a.balance - b.balance);
  // Change code above this line
};

// ? test43

const test43 = () => {
  // Change code below this line
  const sortByDescendingFriendCount = (users) =>
    [...users].sort((a, b) => b.friends.length - a.friends.length);
  // Change code above this line
};

// ? test44

const test44 = () => {
  // Change code below this line
  const sortByName = (users) =>
    [...users].sort((a, b) => a.name.localeCompare(b.name));

  // Change code above this line
  console.log(sortByName(users));
};

// ? test45

const test45 = () => {
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
    {
      title: "The Dreams in the Witch House",
      author: "Howard Lovecraft",
      rating: 8.67,
    },
  ];
  const MIN_BOOK_RATING = 8;
  // Change code below this line

  const names = books
    .filter((book) => book.rating > MIN_BOOK_RATING)
    .map((book) => book.author)
    .sort();
};

// ? test46

const test46 = () => {
  const getNamesSortedByFriendCount = (users) =>
    [...users]
      .sort((a, b) => a.friends.length - b.friends.length)
      .map((user) => user.name);
};

// ? test47

const test47 = () => {
  // Change code below this line
  const getSortedFriends = (users) =>
    users
      .flatMap((user) => user.friends)
      .filter((user, index, array) => array.indexOf(user) === index)
      .sort();
  // Change code above this line
};

// ? test48

const test48 = () => {
  const getTotalBalanceByGender = (users, gender) =>
    users
      .filter((user) => user.gender === gender)
      .reduce((acc, el) => {
        return acc + el.balance;
      }, 0);
};
