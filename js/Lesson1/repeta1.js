//? Problem 1

// let firstNumber = prompt("Fill in first number");
// firstNumber = Number(firstNumber);

// let secondNumber = prompt("Fill in second number");
// secondNumber = Number(secondNumber);

// const result = Math.pow(firstNumber, secondNumber);
// console.log(result);
// 8;

// const random = Math.random();
// console.log(random, Math.round(10 + random));

// ? Problem 2

// const firstName = "Vitya";
// const lastName = "Dinango";

// const room = 671;
// const type = "VIP";

// const welcomeMsg = `${firstName} ${lastName} check in room ${room + type}`;

// console.log(welcomeMsg);

// ? Problem 3

// const free = "free";
// const pro = "pro";
// const vip = "vip";

// const subscription = free;

// const canAccessContent = subscription === pro || subscription === vip;
// console.log("Can enter the system?: ", canAccessContent);

// ? Problem 4

// const stars = 0;
// let price;

// switch (stars) {
//   case 1:
//     price = "20$";
//     break;
//   case 2:
//     price = "30$";
//     break;
//   case 3:
//     price = "50$";
//     break;
//   case 4:
//     price = "70$";
//     break;
//   case 5:
//     price = "120$";
//     break;
//   default:
//     price = "This number not in a list";
// }

// if (stars === 1 || stars === 2) {
//   price = "20$";
// } else if (stars === 3 || stars === 4) {
//   price = "50$";
// } else if (stars === 5) {
//   price = "100$";
// } else {
//   price = "Use another number";
// }

// console.log(price);

// ? Problem 5

// for (let i = 1; i <= 20; i = i + 1) {
//   console.log(i);
// }

// const minMoney = 500;
// const maxMoney = 5000;
// const workers = 5;
// let totalSalery = 0;

// for (let i = 1; i <= workers; i += 1) {
//   const randomSalry = Math.round(
//     Math.random() * (maxMoney - minMoney) + minMoney
//   );
//   console.log(randomSalry);
//   totalSalery = totalSalery + randomSalry;
// }

// console.log(totalSalery);

// ? Problem 6

// const min = 3;
// const max = 23;
// let total = 0;

// for (let i = min; i <= max; i += 1) {
//   console.log("Порядковий номер ", i);
//   const neededNumber = i % 2;
//   if (neededNumber === 0) {
//     total += i;
//     console.log("total ", total);
//   }
// }

// console.log("all sum ", total);
