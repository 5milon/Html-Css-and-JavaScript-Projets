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
   overlay.style.display = "none";
  };
};
