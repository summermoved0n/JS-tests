const categories = document.querySelectorAll(".item");
const subtitles = document.querySelectorAll(".item h2");
console.log(categories.length);

const arrayOfTitles = [];

categories.forEach((item) => {
  const nameCategory = item.firstElementChild.textContent;
  const numberCategory = item.lastElementChild.children.length;
  arrayOfTitles.push({ [nameCategory]: numberCategory });
});

console.log("Number of categories: ", categories.length);

arrayOfTitles.forEach((item) => {
  const keys = Object.keys(item);
  const values = Object.values(item);
  console.log(`Category: ${keys} Elements: ${values}`);
});
