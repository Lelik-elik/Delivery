const cartButton = document.querySelector("#cart__button"),
  modal = document.querySelector(".modal"),
  buttonClose = document.querySelector("#button__close");

cartButton.addEventListener("click", function (event) {
  modal.classList.add("is-open");
});

buttonClose.addEventListener("click", function (event) {
  modal.classList.remove("is-open");
});
