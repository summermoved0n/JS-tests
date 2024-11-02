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

function Test21() {}
