let cart = document.querySelector("[data-action=cart]");
let home = document.querySelector("[data-action=home]");
let activeCat = document.querySelector(".active-cat");
let completedCat = document.querySelector(".completed-cat");
let container = document.querySelector(".container");

window.addEventListener("load", showActiveOrders);
activeCat.addEventListener("click", showActiveOrders);
completedCat.addEventListener("click", showCompletedOrders);

function showActiveOrders() {
  activeCat.querySelector(".bar").style.backgroundColor = "black";
  activeCat.querySelector(".cat-text").style.color = "black";
  completedCat.querySelector(".bar").style.backgroundColor = "gray";
  completedCat.querySelector(".cat-text").style.color = "gray";

  showOrders("active");
}

function showCompletedOrders() {
  activeCat.querySelector(".bar").style.backgroundColor = "gray";
  activeCat.querySelector(".cat-text").style.color = "gray";
  completedCat.querySelector(".bar").style.backgroundColor = "black";
  completedCat.querySelector(".cat-text").style.color = "black";

  showOrders("completed");
}

function showOrders(categorie) {
  container.innerHTML = "";
  if (localStorage.getItem("orders")) {
    let orders = JSON.parse(localStorage.getItem("orders"));
    orders.forEach((item) => {
      if (item.state == categorie) {
        let products = item.products;
        products.forEach((item) => {
          let newProduct = document.createElement("div");
          let color;
          newProduct.className = "product";
          newProduct.innerHTML = ` <img class="product-img" src=${item.image} />
        <div class="product-details">
          <div class="product-header">
            <div class="product-name">${item.name}</div>
          </div>
          <div class="size-color">
            <div class="color"></div>
            <div class="color-name">${item.color}</div>
            |
            <div class="size">size = ${item.size}</div>
          </div>
          <div class="product-price">
            <div class="price">${item.totalPrice} $</div>
            <div class="number">
              <div class="counter">${item.counter}</div>
            </div>
          </div>
        </div>`;
          color = newProduct.querySelector(".color");
          color.style.backgroundColor = item.color;
          newProduct.setAttribute("id", item.id);
          container.append(newProduct);
        });
      }
    });
  }
}
