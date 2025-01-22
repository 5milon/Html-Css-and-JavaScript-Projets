window.onload = () => {
  const accountMenu = document.getElementById("account");
  accountMenu.onmouseover = () => {
    const dropdown = document.getElementById("account-menu");
    dropdown.style.display = "flex";
  };
  accountMenu.onmouseout = () => {
    const dropdown = document.getElementById("account-menu");
    dropdown.style.display = "none";
  };

  /* Open Cart*/

  const cartBtn = document.getElementById("cart");
  cartBtn.onclick = () => {
    const overlay = document.getElementById("cart-overlay");
    const cartList = document.getElementById("cart-list");
    overlay.style.display = "block";
    cartList.style.animation = "cartList 0.4s linear forwards";
  };

  const closeCart = document.getElementById("close-cart");

  closeCart.onclick = () => {
    const cartList = document.getElementById("cart-list");
    cartList.style.animation = "cartlistcolose 0.4s linear forwards";
    const overlay = document.getElementById("cart-overlay");
    //  overlay.classList = "animate__animated animate__fadeOut";

    setTimeout(() => {
      overlay.style.display = "none";
    }, 400);
  };
};


// Increase and Decrease Quantity
let increase = document.getElementsByClassName("increase-qnt"); // Increase Button
let decrease = document.getElementsByClassName("decrease-qnt"); // Decrease Button
let quantity = document.getElementsByClassName("qnt"); // Quantity Input

for(let btn of increase){
  btn.onclick = () => {
    let div = btn.parentElement;
    let lable = div.getElementsByClassName("qnt")[0];
    let text = Number(lable.innerHTML);
    lable.innerHTML = text + 1;
  }
}

for(let btn of decrease){
  btn.onclick = () => {
    let div = btn.parentElement;
    let lable = div.getElementsByClassName("qnt")[0];
    let text = Number(lable.innerHTML);
    lable.innerHTML = text - 1;
  }
}
