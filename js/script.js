const card = document.getElementById("card");
const card1980 = document.getElementById("card1980");
const orderForm = document.getElementById("orderform");

function nextCard() {
  card.style.display = "none";
  card1980.style.display = "block";
}

function bookNow() {
  orderForm.style.display = "blcok";
}
