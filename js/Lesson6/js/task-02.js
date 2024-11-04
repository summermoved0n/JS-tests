const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const list = document.getElementById("ingredients");

ingredients.forEach((item) => {
  const itemLi = document.createElement("li");
  itemLi.classList.add("item");
  itemLi.textContent = item;
  list.append(itemLi);
});
