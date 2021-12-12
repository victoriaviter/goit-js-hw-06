const getElItem = document.querySelectorAll(".item");

console.log(`Number of categories: ${getElItem.length}`);

getElItem.forEach(element => {
    const getEltitle = element.querySelector("h2");
    const getElLi = element.querySelectorAll("li");
    console.log(` Category: ${getEltitle.textContent}`);
    console.log(` Elements: ${getElLi.length}`);
});