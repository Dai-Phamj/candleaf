import { productData } from "./data.js";

const products = document.querySelector(".products");

console.log(productData);
const productList = document.createElement("div");
// productList.className = "product-list"
productList.classList.add("product-list");
console.log(productList);
products.insertAdjacentElement("beforeend", productList);

productData.forEach((product) => {
  console.log(product);
  const templates = `
    <div class="product-items">
        <img class="product-img" src="${product.productImg}" alt="" />
        <div class="product-content">
            <h3 class="product-title">${product.productName}</h3>
            <p class="product-decs">${product.productDesc}</p>
            <div class="product-info">
                <div class="product-price">${product.productPrice}$</div>
                <div class="product-sold">${product.productSold}</div>
            </div>
            <button class="product-btn">+ Add to cart</button>
        </div>
    </div>
`;

  productList.insertAdjacentHTML("beforeend", templates);
});

const productBtn = document.querySelectorAll(".product-btn");
let count = 0;
productBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    count++;
    if (count > 0) {
      const headerQuantity = document.querySelector(".header-quantity");
      headerQuantity.style.display = "flex";
      if (count < 100) {
        headerQuantity.textContent = count;
      } else {
        headerQuantity.textContent = "99+";
      }
    }
  });
});
