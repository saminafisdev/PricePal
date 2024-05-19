const compareProducts = document.querySelector(".compare-products");
const loaderParent = document.querySelector(".loader-parent");

setTimeout(() => {
  compareProducts.style.display = "grid";
  loaderParent.style.display = "none";
}, 3000);
