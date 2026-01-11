// lây ra id của thẻ chứa các món ăn
const postContainer = document.getElementById("post-container");
// lấy ra danh sách món ăn từ localStorage
const posts = JSON.parse(localStorage.getItem("posts")) || [];
// duyệt qua từng món ăn và tạo thẻ HTML tương ứng
let html = ``;

const handleDeletePost = (id) => {
  Swal.fire({
    title: `Bạn có chắc chắn muốn xóa bài viết này không?`,
    text: "Sau khi xóa bạn sẽ không thể khôi phục lại bài viết này!",
    icon: "info",
    willClose() {
      // tìm index của món ăn cần xóa
      const postIndex = posts.findIndex((f) => f.id === id);
      // xóa món ăn khỏi mảng
      if (postIndex !== -1) {
        posts.splice(postIndex, 1);
        // lưu lại mảng sau khi xóa vào localStorage
        localStorage.setItem("posts", JSON.stringify(posts));
        // làm mới lại trang
        window.location.reload();
      }
    },
  });
};

posts.forEach((post) => {
  html += `
    <div id="post" class="border border-gray-200 shadow-sm p-3">
    <div class="bg-purple-200 flex h-8 items-center gap-3 font-bold">
          <div
            class="bg-purple-400 h-full flex items-center justify-center w-8 text-white"
          >
            <i class="fa-solid fa-star"></i>
          </div>
          <h1>Bài viết có thể sửa hoặc xóa</h1>
        </div>
        <div id="post-title" class="text-xl"><h1><a href="../html/baiviet1.html?${post.id}">${post.title}</a></h1></div>
        <div class="flex items-center gap-5">
          <div id="post-content" class="">
            <p class="text-gray-600 line-clamp-3">
              ${post.content}
            
          </div>
        </div>

        <div id="post-img" class="">
          <img
            class="w-full h-60"
            id="post-img"
            src="${post.img}"
            alt=""
          />
        </div>
        <a class="hover:text-blue-700 underline" href="../html/Fix.html?${post.id}">Sửa bài viết</a>
        <button class="btn btn-error" onclick="handleDeletePost(${post.id});">Xóa</button>
      </div>
    `;
});

// chèn các thẻ HTML vào trong thẻ chứa món ăn
postContainer.innerHTML = html;
