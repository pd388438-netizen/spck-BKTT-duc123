document.addEventListener("DOMContentLoaded", () => {
  const registerForm = document.getElementById("login-form");
  console.log(registerForm);

  if (registerForm) {
    registerForm.addEventListener("submit", (e) => {
      e.preventDefault();
      let email = e.target.email.value;
      let password = e.target.password.value;

      //lấy ra dữ liệu users từ localstorage
      let users = JSON.parse(localStorage.getItem("users")) || [];

      //kiểm tra email đã tồn tại chưa
      let userExists = users.find(
        (user) => user.email === email && user.password === password,
      );
      console.log(userExists);
      if (!userExists) {
        Swal.fire({
          icon: "error",
          title: "Bùm",
          text: "Sai tên đăng nhập hoặc mật khấu!",
          footer: '<a href="#">Why do I have this issue?</a>',
        });
        return;
      }

      let newUser = {
        email: userExists.email,
        password: userExists.password,
      };

      localStorage.setItem("currentUsers", JSON.stringify(newUser));
      Swal.fire({
        title: "Thành công!",
        text: "Đăng nhập thành công!",
        icon: "success",
        willClose: () => {
          window.location.href = "../index.html";
        },
      });
    });
  }
});
