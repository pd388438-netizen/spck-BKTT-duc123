var btnLogin = document.getElementById("btnLogin");
var profile = document.getElementById("profile");
var greeting = document.getElementById("greeting");

const currentUsers = JSON.parse(localStorage.getItem("currentUsers"));
console.log(currentUsers);

if (currentUsers) {
  btnLogin.style.display = "none";
  profile.style.display = "flex";
  greeting.innerText = `Xin chào, ${currentUsers.email}`;
} else {
  btnLogin.style.display = "flex";
  profile.style.display = "none";
}
