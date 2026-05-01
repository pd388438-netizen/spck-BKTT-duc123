const postName = document.getElementById("tieu-de");
const postcontent = document.getElementById("content");
const postImg = document.getElementById("image");
const postName1 = document.getElementById("title1");
const postContent1 = document.getElementById("content-1");
const postName2 = document.getElementById("title2");
const postContent2 = document.getElementById("content-2");
const postName3 = document.getElementById("title3");
const postContent3 = document.getElementById("content-3");

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
  postName1.innerText = post.title1;
  postContent1.innerText = post.maincontent1;
  postName2.innerText = post.title2;
  postContent2.innerText = post.maincontent2;
  postName3.innerText = post.title3;
  postContent3.innerText = post.maincontent3;
}
