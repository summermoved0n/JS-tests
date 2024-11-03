// ? Test 1

function Test1() {
  const apartment = {
    imgUrl: "https://via.placeholder.com/640x480",
    descr: "Spacious apartment in the city center",
    rating: 4,
    price: 2153,
    tags: ["premium", "promoted", "top"],
  };
}

// ? Test 2

function Test2() {
  const apartment = {
    imgUrl: "https://via.placeholder.com/640x480",
    descr: "Spacious apartment in the city center",
    rating: 4,
    price: 2153,
    tags: ["premium", "promoted", "top"],
    owner: {
      name: "Henry",
      phone: "982-126-1588",
      email: "henry.carter@aptmail.com",
    },
  };
}

// ? Test 3

function Test3() {
  const apartment = {
    imgUrl: "https://via.placeholder.com/640x480",
    descr: "Spacious apartment in the city center",
    rating: 4,
    price: 2153,
    tags: ["premium", "promoted", "top"],
  };

  // Change code below this line
  const aptRating = apartment.rating;
  const aptDescr = apartment.descr;
  const aptPrice = apartment.price;
  const aptTags = apartment.tags;
  // Change code above this line
}

// ? Test 4

function Test4() {
  const apartment = {
    imgUrl: "https://via.placeholder.com/640x480",
    descr: "Spacious apartment in the city center",
    rating: 4,
    price: 2153,
    tags: ["premium", "promoted", "top"],
    owner: {
      name: "Henry",
      phone: "982-126-1588",
      email: "henry.carter@aptmail.com",
    },
  };

  // Change code below this line
  const ownerName = apartment.owner.name;
  const ownerPhone = apartment.owner.phone;
  const ownerEmail = apartment.owner.email;
  const numberOfTags = apartment.tags.length;
  const firstTag = apartment.tags[0];
  const lastTag = apartment.tags[numberOfTags - 1];
  // Change code above this line
}

// ? Test 5

function Test5() {
  const apartment = {
    imgUrl: "https://via.placeholder.com/640x480",
    descr: "Spacious apartment in the city center",
    rating: 4,
    price: 2153,
    tags: ["premium", "promoted", "top"],
  };

  // Change code below this line
  const aptRating = apartment["rating"];
  const aptDescr = apartment["descr"];
  const aptPrice = apartment["price"];
  const aptTags = apartment["tags"];
  // Change code above this line
}

// ? Test 6

function Test6() {
  const apartment = {
    imgUrl: "https://via.placeholder.com/640x480",
    descr: "Spacious apartment in the city center",
    rating: 4,
    price: 2153,
    tags: ["premium", "promoted", "top"],
    owner: {
      name: "Henry",
      phone: "982-126-1588",
      email: "henry.carter@aptmail.com",
    },
  };

  // Change code below this line
  apartment.price = 5000;
  apartment.rating = 4.7;
  apartment.owner.name = "Henry Sibola";
  apartment.tags.push("trusted");
}

// ? Test 7

function Test7() {
  const apartment = {
    imgUrl: "https://via.placeholder.com/640x480",
    descr: "Spacious apartment in the city center",
    rating: 4.7,
    price: 5000,
    tags: ["premium", "promoted", "top", "trusted"],
    owner: {
      name: "Henry Sibola",
      phone: "982-126-1588",
      email: "henry.carter@aptmail.com",
    },
  };

  // Change code below this line
  apartment.area = 60;
  apartment.rooms = 3;
  apartment.location = {
    country: "Jamaica",
    city: "Kingston",
  };
}

// ? Test 8

function Test8() {
  const name = "Repair Droid";
  const price = 2500;
  const image = "https://via.placeholder.com/640x480";
  const tags = ["on sale", "trending", "best buy"];

  const product = {
    // Change code below this line
    name,
    price,
    image,
    tags,
    // Change code above this line
  };
}

// ? Test 9

function Test9() {
  const emailInputName = "email";
  const passwordInputName = "password";

  const credentials = {
    // Change code below this line
    [emailInputName]: "henry.carter@aptmail.com",
    [passwordInputName]: "jqueryismyjam",
    // Change code above this line
  };
}

// ? Test 10

function Test10() {
  const apartment = {
    descr: "Spacious apartment in the city center",
    rating: 4,
    price: 2153,
  };
  const keys = [];
  const values = [];
  // Change code below this line
  for (const key in apartment) {
    keys.push(key);
    values.push(apartment[key]);
  }
  console.log(keys);
  console.log(values);
}

// ? Test 11

function Test11() {
  const keys = [];
  const values = [];
  const advert = {
    service: "apt",
  };
  const apartment = Object.create(advert);
  apartment.descr = "Spacious apartment in the city center";
  apartment.rating = 4;
  apartment.price = 2153;

  for (const key in apartment) {
    // Change code below this line
    if (apartment.hasOwnProperty(key)) {
      keys.push(key);
      values.push(apartment[key]);
    }

    // Change code above this line
  }
}

// ? Test 12

function Test12() {
  function countProps(object) {
    let propCount = 0;
    // Change code below this line
    const keys = Object.keys(object);
    propCount = keys.length;

    // Change code above this line
    console.log(propCount);
    return propCount;
  }
  countProps({});
  countProps({ name: "Mango", age: 2 });
  countProps({ mail: "poly@mail.com", isOnline: true, score: 500 });
}

// ? Test 13

function Test13() {
  const apartment = {
    descr: "Spacious apartment in the city center",
    rating: 4,
    price: 2153,
  };
  const values = [];
  // Change code below this line
  const keys = Object.keys(apartment);
  for (const key of keys) {
    values.push(apartment[key]);
  }
  console.log(values);
}

// ? Test 14

function Test14() {
  function countProps(object) {
    // Change code below this line
    let propCount = 0;
    const keys = Object.keys(object);
    for (const key of keys) {
      if (object.hasOwnProperty(key)) {
        propCount += 1;
      }
    }

    console.log(propCount);
    return propCount;
    // Change code above this line
  }
  countProps({});
  countProps({ name: "Mango", age: 2 });
  countProps({ mail: "poly@mail.com", isOnline: true, score: 500 });
}

// ? Test 15

function Test15() {
  const apartment = {
    descr: "Spacious apartment in the city center",
    rating: 4,
    price: 2153,
  };
  // Change code below this line
  const keys = Object.keys(apartment);
  const values = Object.values(apartment);
}

// ? Test 16

function Test16() {
  function countTotalSalary(salaries) {
    let totalSalary = 0;
    // Change code below this line
    const values = Object.values(salaries);
    for (const value of values) {
      totalSalary += value;
    }
    // Change code above this line
    return totalSalary;
  }

  countTotalSalary({});
  countTotalSalary({ mango: 100, poly: 150, alfred: 80 });
  countTotalSalary({ kiwi: 200, poly: 50, ajax: 150 });
}

// ? Test 17

function Test17() {
  const colors = [
    { hex: "#f44336", rgb: "244,67,54" },
    { hex: "#2196f3", rgb: "33,150,243" },
    { hex: "#4caf50", rgb: "76,175,80" },
    { hex: "#ffeb3b", rgb: "255,235,59" },
  ];

  const hexColors = [];
  const rgbColors = [];
  // Change code below this line
  for (const color of colors) {
    const { hex, rgb } = color;
    hexColors.push(hex);
    rgbColors.push(rgb);
  }

  console.log(hexColors);
  console.log(rgbColors);
}

// ? Test 18

function Test18() {
  const products = [
    { name: "Radar", price: 1300, quantity: 4 },
    { name: "Scanner", price: 2700, quantity: 3 },
    { name: "Droid", price: 400, quantity: 7 },
    { name: "Grip", price: 1200, quantity: 9 },
  ];

  function getProductPrice(productName) {
    // Change code below this line
    let newPrice = null;
    for (const product of products) {
      const { name, price } = product;
      if (name === productName) {
        console.log(price);
        newPrice = price;
        break;
      }
    }
    return newPrice;
    // Change code above this line
  }

  getProductPrice("Radar");
  getProductPrice("Grip");
  getProductPrice("Scanner");
  getProductPrice("Droid");
  getProductPrice("Engine");
}

// ? Test 19

function Test19() {
  const products = [
    { name: "Radar", price: 1300, quantity: 4 },
    { name: "Scanner", price: 2700, quantity: 3 },
    { name: "Droid", price: 400, quantity: 7 },
    { name: "Grip", price: 1200, quantity: 9 },
  ];

  function getAllPropValues(propName) {
    // Change code below this line
    const array = [];
    for (const product of products) {
      if (product[propName]) {
        array.push(product[propName]);
      }
    }
    return array;
    // Change code above this line
  }
  getAllPropValues("name");
  getAllPropValues("quantity");
  getAllPropValues("price");
  getAllPropValues("category");
}

// ? Test 20

function Test20() {
  const products = [
    { name: "Radar", price: 1300, quantity: 4 },
    { name: "Scanner", price: 2700, quantity: 3 },
    { name: "Droid", price: 400, quantity: 7 },
    { name: "Grip", price: 1200, quantity: 9 },
  ];

  function calculateTotalPrice(productName) {
    // Change code below this line
    let total = 0;
    for (const product of products) {
      const { name, price, quantity } = product;
      if (name === productName) {
        total = price * quantity;
      }
    }
    return total;

    // Change code above this line
  }

  calculateTotalPrice("Blaster");
  calculateTotalPrice("Radar");
  calculateTotalPrice("Droid");
  calculateTotalPrice("Grip");
  calculateTotalPrice("Scanner");
}

// ? Test 21

function Test21() {
  const highTemperatures = {
    yesterday: 28,
    today: 26,
    tomorrow: 33,
  };
  // Change code below this line

  const { yesterday, today, tomorrow } = highTemperatures;

  // Change code above this line
  const meanTemperature = (yesterday + today + tomorrow) / 3;
}

// ? Test 22

function Test22() {
  const highTemperatures = {
    yesterday: 28,
    today: 26,
    tomorrow: 33,
  };
  // Change code below this line

  const {
    yesterday,
    today,
    tomorrow,
    icon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg",
  } = highTemperatures;

  // Change code above this line
  const meanTemperature = (yesterday + today + tomorrow) / 3;
}

// ? Test 23

function Test23() {
  const highTemperatures = {
    yesterday: 28,
    today: 26,
    tomorrow: 33,
  };
  // Change code below this line

  const {
    yesterday: highYesterday,
    today: highToday,
    tomorrow: highTomorrow,
    icon: highIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg",
  } = highTemperatures;

  // Change code above this line
  const meanTemperature = (highYesterday + highToday + highTomorrow) / 3;
}

// ? Test 24

function Test24() {
  const colors = [
    { hex: "#f44336", rgb: "244,67,54" },
    { hex: "#2196f3", rgb: "33,150,243" },
    { hex: "#4caf50", rgb: "76,175,80" },
    { hex: "#ffeb3b", rgb: "255,235,59" },
  ];

  const hexColors = [];
  const rgbColors = [];
  // Change code below this line

  for (const { hex, rgb } of colors) {
    hexColors.push(hex);
    rgbColors.push(rgb);
  }
}

// ? Test 25

function Test25() {
  const forecast = {
    today: {
      low: 28,
      high: 32,
      icon: "https://www.flaticon.com/svg/static/icons/svg/861/861059.svg",
    },
    tomorrow: {
      low: 27,
      high: 31,
    },
  };
  // Change code below this line

  const {
    today: {
      low: lowToday,
      high: highToday,
      icon: todayIcon = "https://www.flaticon.com/svg/static/icons/svg/861/861059.svg",
    },
    tomorrow: {
      low: lowTomorrow,
      high: highTomorrow,
      icon: tomorrowIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg",
    },
  } = forecast;
}

// ? Test 26

function Test26() {
  // Change code below this line
  function calculateMeanTemperature(forecast) {
    const {
      today: { low: todayLow, high: todayHigh },
      tomorrow: { low: tomorrowLow, high: tomorrowHigh },
    } = forecast;

    // Change code above this line

    return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
  }

  calculateMeanTemperature({
    today: { low: 28, high: 32 },
    tomorrow: { low: 25, high: 29 },
  });
  calculateMeanTemperature({
    today: { low: 37, high: 40 },
    tomorrow: { low: 33, high: 38 },
  });
}

// ? Test 27

function Test27() {
  const scores = [89, 64, 42, 17, 93, 51, 26];
  // Change code below this line
  const bestScore = Math.max(...scores);
  const worstScore = Math.min(...scores);
}

// ? Test 28

function Test28() {
  const firstGroupScores = [64, 42, 93];
  const secondGroupScores = [89, 14, 51, 26];
  const thirdGroupScores = [29, 47, 18, 97, 81];
  // Change code below this line
  const allScores = [
    ...firstGroupScores,
    ...secondGroupScores,
    ...thirdGroupScores,
  ];
  const bestScore = Math.max(...allScores);
  const worstScore = Math.min(...allScores);
}

// ? Test 29

function Test29() {
  const defaultSettings = {
    theme: "light",
    public: true,
    withPassword: false,
    minNumberOfQuestions: 10,
    timePerQuestion: 60,
  };
  const overrideSettings = {
    public: false,
    withPassword: true,
    timePerQuestion: 30,
  };
  // Change code below this line
  const finalSettings = { ...defaultSettings, ...overrideSettings };
}

// ? Test 30

function Test30() {
  function makeTask(data) {
    const completed = false;
    const category = "General";
    const priority = "Normal";
    // Change code below this line
    return { completed, category, priority, ...data };
    // Change code above this line
  }

  makeTask({});
  makeTask({
    category: "Homemade",
    priority: "Low",
    text: "Take out the trash",
  });
  makeTask({ category: "Finance", text: "Take interest" });
  makeTask({ priority: "Low", text: "Choose shampoo" });
  makeTask({ text: "Buy bread" });
}

// ? Test 31

function Test31() {
  // Change code below this line
  function add(...args) {
    // Change code above this line
    let total = 0;
    for (const arg of args) {
      total += arg;
    }
    console.log(total);
    return total;
  }

  add(15, 27);
  add(12, 4, 11, 48);
  add(32, 6, 13, 19, 8);
  add(74, 11, 62, 46, 12, 36);
}

// ? Test 32

function Test32() {
  // Change code below this line
  function addOverNum(value, ...args) {
    let total = 0;

    for (const arg of args) {
      if (arg > value) {
        total += arg;
      }
    }
    return total;
    // Change code above this line
  }

  addOverNum(50, 15, 27);
  addOverNum(10, 12, 4, 11, 48, 10, 8);
  addOverNum(15, 32, 6, 13, 19, 8);
  addOverNum(20, 74, 11, 62, 46, 12, 36);
}

// ? Test 33

function Test33() {
  // Change code below this line
  function findMatches(value, ...args) {
    const matches = []; // Don't change this line
    for (const arg of args) {
      const number = value.includes(arg);
      if (number) {
        matches.push(arg);
      }
    }
    // Change code above this line
    return matches;
  }
  findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7);
  findMatches([4, 89, 17, 36, 2], 8, 17, 89, 27, 2);
  findMatches([10, 24, 41, 6, 9, 19], 24, 11, 9, 23, 41);
  findMatches([63, 11, 8, 29], 4, 7, 16);
}

// ? Test 34

function Test34() {
  const bookShelf = {
    // Change code below this line
    books: ["The last kingdom", "The guardian of dreams"],
    getBooks() {
      return "Returning all books";
    },
    addBook(bookName) {
      return `Adding book ${bookName}`;
    },
    removeBook(bookName) {
      return `Deleting book ${bookName}`;
    },
    updateBook(oldName, newName) {
      return `Updating book ${oldName} to ${newName}`;
    },
    // Change code above this line
  };
}

// ? Test 35

function Test35() {
  const bookShelf = {
    books: ["The last kingdom", "Haze", "The guardian of dreams"],
    updateBook(oldName, newName) {
      // Change code below this line
      this.books.splice(this.books.indexOf(oldName), 1, newName);
      // Change code above this line
      return this.books;
    },
  };
  bookShelf.updateBook("Haze", "Dungeon chronicles");
  bookShelf.updateBook("The last kingdom", "Dune");
}

// ? Test 36, Test 37, Test 38, Test39, test 40, test 41

const atTheOldToad = {
  potions: [
    { name: "Speed potion", price: 460 },
    { name: "Dragon breath", price: 780 },
    { name: "Stone skin", price: 520 },
  ],
  // Change code below this line
  getPotions() {
    return this.potions;
  },

  addPotion(newPotion) {
    const { name: newPotionName } = newPotion;

    for (const { name } of this.potions) {
      if (name === newPotionName) {
        console.log(
          `Error! Potion ${newPotionName} is already in your inventory!`
        );
        return `Error! Potion ${newPotionName} is already in your inventory!`;
      }
    }

    this.potions.push(newPotion);
  },

  removePotion(potionName) {
    for (const potion of this.potions) {
      if (potionName !== potion.name) {
        continue;
      }
      const potionIndex = this.potions.indexOf(potion);
      this.potions.splice(potionIndex, 1);
    }
    return `Potion ${potionName} is not in inventory!`;
  },

  updatePotionName(oldName, newName) {
    for (const potion of this.potions) {
      console.log(potion.name);
      if (oldName !== potion.name) {
        console.log("bad name");
        continue;
      }
      console.log("good name");

      const potionIndex = this.potions.indexOf(potion);
      return (this.potions[potionIndex].name = newName);
    }
    return `Potion ${oldName} is not in inventory!`;
  },
  // Change code above this line
};
