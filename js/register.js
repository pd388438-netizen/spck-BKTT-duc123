document.addEventListener("DOMContentLoaded", () => {
  const registerForm = document.getElementById("register-form");
  console.log(registerForm);

  registerForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let email = e.target.email.value;
    let password = e.target.password.value;
    let repeatPassword = e.target.repeatPassword.value;

    console.log(email, password, repeatPassword);

    const uppercaseRegex = /[A-Z]/;
    const lowercaseRegex = /[a-z]/;
    const numberRegex = /[0-9]/;

    if (password.length < 6) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Mật khẩu phải có ít nhất 6 ký tự!",
      });
      return;
    }

    if (!uppercaseRegex.test(password)) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Mật khẩu phải chứa ít nhất một chữ cái viết hoa!",
      });
      return;
    }

    if (!lowercaseRegex.test(password)) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Mật khẩu phải chứa ít nhất một chữ cái viết thường!",
      });
      return;
    }

    if (!numberRegex.test(password)) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Mật khẩu phải chứa ít nhất một chữ số!",
      });
      return;
    }

    //kiêm tra mật khẩu có khớp không
    if (password !== repeatPassword) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Mật khẩu không khớp!",
      });
      return;
    }

    //lấy ra dữ liệu users từ localstorage
    let users = JSON.parse(localStorage.getItem("users")) || [];

    //kiểm tra email đã tồn tại chưa
    let userExists = users.some((user) => user.email === email);
    if (userExists) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Email đã được đăng ký!",
      });
      return;
    }

    users.push({ email, password });
    localStorage.setItem("users", JSON.stringify(users));

    Swal.fire({
      title: "Thành công!",
      text: "Bạn đã đăng ký thành công!",
      icon: "success",
    }).then(() => {
      window.location.href = "../index.html";
    });
  });
});
