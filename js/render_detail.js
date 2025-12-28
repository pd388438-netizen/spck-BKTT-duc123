const postName = document.getElementById("title");
const postcontent = document.getElementById("content");
const postImg = document.getElementById("image");

const queryString = window.location.search;
console.log(queryString.split("?")[1]);

// lấy ra danh sách món ăn từ localStorage
const posts = JSON.parse(localStorage.getItem("posts")) || [];

// tìm món ăn có id tương ứng
const post = posts.find((f) => f.id === Number(queryString.split("?")[1]));

console.log(post);

// hiển thị thông tin món ăn lên trang
if (post) {
  postName.innerText = post.title;
  postcontent.innerText = post.content;
  postImg.src = post.image;
}
