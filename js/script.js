var link = document.querySelector(".letter-button");
var popup = document.querySelector(".modal-window");
var close = popup.querySelector(".close-button");
var login = popup.querySelector("[name=user-name]");

link.addEventListener("click", function (evt){
  evt.preventDefault();
  popup.classList.add("modal-show");
  login.focus();
});
close.addEventListener("click", function (evt){
  evt.preventDefault();
  popup.classList.remove("modal-show");
});
