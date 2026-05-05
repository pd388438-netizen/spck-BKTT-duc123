const formLogin = document.getElementById("login-form");

formLogin.addEventListener("submit", function (e) {
  e.preventDefault();
  const formData = new FormData(formLogin);
  const email = formData.get("email");
  const password = formData.get("password");

  Swal.fire({
    icon: "loading",
    title: "Loading...",
    showConfirmButton: false,
  });
  console.log({ email, password });

  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      var user = userCredential.user;
      console.log(user);
      Swal.fire({
        icon: "success",
        title: "Đăng nhập thành công",
      });
      window.location.href = "../index.html";
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      Swal.fire({
        icon: "error",
        title: "Login failed",
        text: "Tài khoản hoặc mật khẩu không đúng",
      });
    });
});
