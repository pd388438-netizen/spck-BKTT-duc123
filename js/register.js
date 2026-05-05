const formRegister = document.getElementById("register-form");

formRegister.addEventListener("submit", function (e) {
  e.preventDefault();
  const formData = new FormData(formRegister);
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const repeatPassword = document.getElementById("repeatPassword").value;

  console.log({ email, password, repeatPassword });

  // nếu email trống thì show lỗi
  if (!email.trim()) {
    Swal.fire({
      icon: "error",
      title: "Email is required",
      text: "Vui lòng nhập email",
      willClose: () => {
        document.getElementById("email").focus();
      },
    });
    return;
  }

  if (!password.trim()) {
    Swal.fire({
      icon: "error",
      title: "Password is required",
      text: "Vui lòng nhập mật khẩu",
      willClose: () => {
        document.getElementById("password").focus();
      },
    });
    return;
  }

  if (password !== repeatPassword) {
    Swal.fire({
      icon: "error",
      title: "Mật khẩu không khớp",
      willClose: () => {
        document.getElementById("repeatPassword").focus();
      },
    });
    return;
  }
  Swal.fire({
    icon: "loading",
    title: "Loading...",
    showConfirmButton: false,
  });
  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      var user = userCredential.user;
      console.log(user);
      Swal.fire({
        icon: "success",
        title: "Đăng ký thành công",
        willClose: () => {
          window.location.href = "./login.html";
        },
      });
    })
    .catch((error) => {
      var errorMessage = error.message;
      Swal.fire({
        icon: "error",
        title: "Đăng ký thất bại",
        text: errorMessage,
      });
    });
});
