const title = document.getElementById("title");
const content = document.getElementById("content");
const img = document.getElementById("img");

const queryString = window.location.search;
console.log(queryString.split("?")[1]);

// lấy ra danh sách món ăn từ localStorage
const posts = JSON.parse(localStorage.getItem("posts")) || [];

// tìm món ăn có id tương ứng
const post = posts.find((f) => f.id === Number(queryString.split("?")[1]));

// hiển thị thông tin món ăn lên trang
if (post) {
  title.innerText = post.title;
  content.innerText = post.content;
  img.src = post.image;
}
