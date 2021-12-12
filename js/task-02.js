const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];





const getUl = document.querySelector("ul");
const ingredient = [];

for (let i = 0; i < ingredients.length; i++) {
  const createLi = document.createElement("li");
  createLi.textContent = ingredients[i];
  ingredient.push(createLi);
}

getUl.append(...ingredient);