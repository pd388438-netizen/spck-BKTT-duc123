const btnCreate = document.getElementById("btn-create");
btnCreate.addEventListener("click", function () {
  const tieuDe = document.getElementById("tieu-de").value;
  const img = document.getElementById("anh").value;
  const noiDung = document.getElementById("content").value;
  if (!tieuDe) {
    alert("Vui lòng nhập tiêu đề bài viết");
    return;
  }
  if (!img) {
    alert("Vui lòng nhập đường link ảnh");
    return;
  }
  if (!noiDung) {
    alert("Vui lòng nhập nội dung bài viết");
    return;
  }

  const post = {
    id: Date.now(),
    title: tieuDe,
    img: img,
    content: noiDung,
  };

  const posts = JSON.parse(localStorage.getItem("posts")) || [];
  posts.push(post);
  localStorage.setItem("posts", JSON.stringify(posts));
  window.location.href = "../html/index.html";
});
