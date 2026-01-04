const btnFixpost = document.getElementById("btn-fix");
const tieude = document.getElementById("fix-tieu-de");
const description = document.getElementById("fix-content");
const image = document.getElementById("fix-anh");
let imagePreview = document.getElementById("image-preview");

const queryString = window.location.search;
// lấy ra danh sách món ăn từ localStorage
const posts = JSON.parse(localStorage.getItem("posts")) || [];

// lấy id từ URL
const postId = Number(queryString.split("?")[1]);

// tìm bài viết có id tương ứng
const post = posts.find((p) => p.id == postId);
console.log(post);
// hiển thị thông tin bài viết lên các input để chỉnh sửa
if (post) {
  tieude.value = post.title;
  description.value = post.content;
  image.value = post.img;
  imagePreview.src = post.img;
}

btnFixpost.addEventListener("click", () => {
  // kiểm tra dữ liệu hợp lệ
  if (!tieude.value) {
    alert("Vui lòng nhập tiêu đề bài viết");
    return;
  }
  if (!description.value) {
    alert("Vui lòng nhập mô tả bài viết");
    return;
  }
  if (!image.value) {
    alert("Vui lòng nhập URL hình ảnh bài viết");
    return;
  }

  // tìm index của bài viết cần cập nhật
  const postIndex = posts.findIndex((p) => p.id === postId);

  // cập nhật thông tin món ăn
  if (postIndex !== -1) {
    posts[postIndex] = {
      id: postId, // giữ nguyên id
      title: tieude.value,
      content: description.value,
      img: image.value,
    };

    // lưu danh sách bài viết vào localStorage
    localStorage.setItem("posts", JSON.stringify(posts));

    // chuyển về trang danh sách bài viết
    window.location.href = "/index.html";
  }
});
