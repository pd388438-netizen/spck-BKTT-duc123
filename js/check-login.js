document.addEventListener("DOMContentLoaded", function () {
  var btnLogin = document.getElementById("btnLogin");
  var profile = document.getElementById("profile");
  var greeting = document.getElementById("greeting");

  const currentUsers = JSON.parse(localStorage.getItem("currentUsers"));
  console.log(currentUsers);

  if (currentUsers) {
    // Check if elements exist before trying to access their properties
    if (btnLogin) btnLogin.style.display = "none";
    if (profile) profile.style.display = "flex";
    if (greeting) greeting.innerText = `Xin chào, ${currentUsers.email}`;
  } else {
    if (btnLogin) btnLogin.style.display = "flex";
    if (profile) profile.style.display = "none";
  }
});
