const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const listEl = document.getElementById("ingredients");

const arrayItems = [];

ingredients.forEach((item) => {
  const itemLi = document.createElement("li");
  itemLi.classList.add("item");
  itemLi.textContent = item;
  arrayItems.push(itemLi);
});

listEl.append(...arrayItems);
