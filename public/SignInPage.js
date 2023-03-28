let SignUpBtn = document.getElementById("SignUpBtn");
let SignInBtn = document.getElementById("SignInBtn");
let namefield = document.getElementById("namefield");
let title = document.getElementById("title");


SignUpBtn.onclick = function () {
  namefield.style.maxHeight = "0";
  title.innerHTML = "Sign In";
  SignUpBtn.classList.add("disable");
  SignInBtn.classList.remove("disable");
};

SignInBtn.onclick = function () {
  namefield.style.maxHeight = "60px";
  title.innerHTML = "Sign Up";
  SignUpBtn.classList.remove("disable");
  SignInBtn.classList.add("disable");
};


