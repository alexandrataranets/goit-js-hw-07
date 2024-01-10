const categoriesList = document.getElementById("categories");
const categoriesItems = categoriesList.querySelectorAll(".item");

console.log(`Number of categories: ${categoriesItems.length}`);

categoriesItems.forEach((category) => {
  const categoryName = category.querySelector("h2").textContent;
  const categoryItemsCount = category.querySelectorAll("ul li").length;

  console.log(
    `Category: ${categoryName}\nItems count: ${categoryItemsCount}`
  );
});