window.onload = () => {
  const accountMenu = document.getElementById("account");
  accountMenu.onmouseover = () => {
    const dropdown = document.getElementById("account-menu");
    dropdown.style.display = "flex";
  };
  accountMenu.onmouseout = () => {
    const dropdown = document.getElementById("account-menu");
    dropdown.style.display ='none'
  };
};
