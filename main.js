document.querySelector(".menu").addEventListener("click", function () {
  document.querySelector(".sidebar").classList.toggle("show");
});

import { data } from "./store/data.js";

function createProductElement(product, defaultImageUrl) {
  const productElement = document.createElement("div");
  productElement.className = "product";
  productElement.innerHTML = `
    <div class="product-img">
      <img src="${product.img_url}" alt="${product.product_name}" />
    </div>
    <div class="product-details">
      <div class='top'>
        <p class='savings-pill'>save upto &#2547;${product.savings}</p>
        <h5>${product.product_name}</h5>
        <h6>Vendor: ${product.product_vendor}</h6>
      </div>
      <a href="products/compare.html?productId=${encodeURIComponent(
        product.product_name
      )}" class="btn">Compare price</a>
    </div>
  `;
  return productElement;
}

function createCategoryElement(category) {
  const categoryElement = document.createElement("div");
  categoryElement.className = "category";
  categoryElement.innerHTML = `
    <div class="category-header">
      <h3>${category.category_name}</h3>
      <a href="#">See all</a>
    </div>
    <div class="products"></div>
  `;

  const productsContainer = categoryElement.querySelector(".products");
  category.products.forEach((product) => {
    const productElement = createProductElement(
      product,
      category.default_image_url
    );
    productsContainer.appendChild(productElement);
  });

  return categoryElement;
}

function displayData() {
  const app = document.getElementById("app");
  app.innerHTML = ""; // Clear any existing content
  data.forEach((category) => {
    const categoryElement = createCategoryElement(category);
    app.appendChild(categoryElement);
  });
}

displayData();
