const allTicketbtn = document.querySelectorAll(".ticket-btn");
const selectSeat = document.querySelector("#selectSeat");

const price = 550;
for (const btn of allTicketbtn) {
  btn.addEventListener("click", (event) => {
    const btnValue = event.target.innerText;

    event.target.setAttribute("disabled", false);
    event.target.style.backgroundColor = "green";

    const div = document.createElement("div");
    div.classList.add("SeatSet");
    const p1 = document.createElement("p");
    const p2 = document.createElement("p");
    const p3 = document.createElement("p");
    p1.innerText = btnValue;
    p2.innerText = "Economy";
    p3.innerText = price;

    div.appendChild(p1);
    div.appendChild(p2);
    div.appendChild(p3);
    selectSeat.appendChild(div);

    const seatcount = getConvartor(".seatCount");
    document.querySelector(".seatCount").innerText = seatcount + 1;

    const seatcount2 = getConvartor("#seatCount");
    document.querySelector("#seatCount").innerText = seatcount2 - 1;

    sumValue(price);
    grandTotal();
  });
}

const grandTotal = (coupon) => {
  if (coupon == undefined) {
    const totalPrice = getConvartor(".total-price");
    document.querySelector(".grand-total").innerText = totalPrice;
  } else {
    const inputCoupon = document.querySelector("#inputCoupon").value;

    if (inputCoupon == "iloveyou") {
      const totalPrice = getConvartor(".total-price");
      const sum = totalPrice * 0.2;
      document.querySelector(".grand-total").innerText = totalPrice - sum;
    } else {
      const totalPrice = getConvartor(".total-price");
      document.querySelector(".grand-total").innerText = totalPrice;
    }
  }
};
document
  .querySelector("#ticket-perchese-success")
  .addEventListener("click", (event) => {
    const inputNumber = document.querySelector("#inputNumber").value;
    const seatCount = document.querySelector(".seatCount").innerText;

    if (inputNumber.length >= 1 && seatCount >= 1) {
      const allDisplay = document.querySelector("#allDisplay");
      const showDisplay = document.querySelector("#showDisplay");

      allDisplay.classList.add("hidden");
      showDisplay.classList.remove("hidden");
      event.target.setAttribute("disabled", false);
    }

    console.log(inputNumber);
  });

const sumValue = (price) => {
  const totalPrice = getConvartor(".total-price");

  const sum = totalPrice + parseInt(price);
  document.querySelector(".total-price").innerText = sum;
};

const getConvartor = (id) => {
  const totalPrice = document.querySelector(id).innerText;
  const totalPriceConvertor = parseInt(totalPrice);

  return totalPriceConvertor;
};
