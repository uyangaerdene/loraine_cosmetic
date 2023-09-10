const cartItems = [];

function createProductElement(product) {
  const article = document.createElement("article");
  article.className = `prod-box ${product.class}`;
  article.setAttribute("data-brand", product.brand);

  const img = document.createElement("img");
  img.src = product.imgSrc;
  img.alt = "";

  const h4 = document.createElement("h4");
  h4.textContent = product.name;

  const priceP = document.createElement("p");
  priceP.classList.add("prod-price");
  priceP.textContent = product.price;

  button.addEventListener("click", () => addToCart(product));
  button.addEventListener("click", () => removeFromCart(product));
  article.appendChild(img);
  article.appendChild(h4);
  article.appendChild(priceP);

  return article;
}

function updateCartSummary() {
const cartList = document.querySelector("#buyItems");
const emptyCartMessage = document.querySelector(".empty");
const totalPriceElement = document.querySelector("#sum-prices");

if (cartList.children.length === 0) {
  emptyCartMessage.style.display = "block";
  totalPriceElement.textContent = "";
} else {
  emptyCartMessage.style.display = "none";
  checkoutButton.classList.remove("hidden");
  
  const cartItems = cartList.querySelectorAll(".cart-item");
  let totalPrice = 0;
  
  cartItems.forEach((cartItem) => {
    const priceText = cartItem.querySelector("p").textContent;
    const price = parseFloat(priceText.replace("₮", "").replace(",", ""));
    totalPrice += price;
  });
  
  totalPriceElement.textContent = `Total: ${totalPrice}₮`;
}
}

document.addEventListener("click", function (event) {
if (event.target.classList.contains("add-cart")) {
  const button = event.target;
  const article = button.closest("article");
  const brand = article.getAttribute("data-brand");
  const productName = article.querySelector("h4").textContent;
  const product = products.find((p) => p.brand === brand && p.name === productName);
  
  addToCart(product);
}
});

function addToCart(product) {
const cartList = document.querySelector("#buyItems");

const cartItem = document.createElement("li");
cartItem.classList.add("cart-item");

const cartItemInfo = document.createElement("div");
cartItemInfo.classList.add("cart-item-info");

const cartItemImage = document.createElement("img");
cartItemImage.src = product.imgSrc;
cartItemImage.alt = product.name;

const cartItemName = document.createElement("h4");
cartItemName.textContent = product.name;

const cartItemPrice = document.createElement("p");
cartItemPrice.textContent = `Үнэ: ${product.price}`; 


// Create the "Remove" button
const removeButton = document.createElement("button");
removeButton.textContent = "Remove";
removeButton.classList.add("remove-cart-item");
removeButton.addEventListener("click", function () {
  cartList.removeChild(cartItem);
  updateCartSummary();
});

cartItemInfo.appendChild(cartItemImage);
cartItemInfo.appendChild(cartItemName);
cartItemInfo.appendChild(cartItemPrice);

cartItem.appendChild(cartItemInfo);
cartItem.appendChild(removeButton); 

cartList.appendChild(cartItem);

updateCartSummary();
}




