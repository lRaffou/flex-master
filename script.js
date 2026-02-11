// Hello world!
const container = document.querySelector(".container");
const item = document.querySelector(".item");
const content = document.querySelector(".content");
const title = document.querySelector("h1");
const img = document.querySelector("img");

//Je veux que mon item soit centré dans mon container
container.style.padding = "20px";
container.style.height = "100vh";
container.style.display = "flex";
container.style.justifyContent = "center";
container.style.alignItems = "center";


item.style.width = "25vw";
item.style.height = "35vh";
item.style.display = "flex";
item.style.flexDirection = "column";
item.style.justifyContent = "center";
item.style.alignItems = "center";
item.style.border = "2px solid white";
item.style.borderRadius = "10px";

content.style.width = "100%";
content.style.height = "100%";

img.style.width = "100%";
img.style.height = "100%";
// img.style.border = "2px solid white";
// img.style.borderRadius = "10px";
// img.style.objectFit = "contain";
