"use strict";

const formInput = document.querySelector(".emailInput");
formInput.addEventListener("invalid", function (e) {
  e.preventDefault();
});

const submitButton = document.querySelector(`.submitButton`);
submitButton.addEventListener("click", function () {
  const errorMessage = document.querySelector(".errorMessage");

  if (!formInput.value) {
    errorMessage.classList.remove("hidden");
    formInput.classList.add("errorState");
  } else {
    errorMessage.classList.add("hidden");
    formInput.classList.remove("errorState");
    formInput.classList.add("goodState");
  }
});
