// lây ra id của thẻ chứa các món ăn
const postContainer = document.getElementById("post-container");
// lấy ra danh sách món ăn từ localStorage
const posts = JSON.parse(localStorage.getItem("posts")) || [];
// duyệt qua từng món ăn và tạo thẻ HTML tương ứng
let html = ``;

posts.forEach((post) => {
  html += `
    <div id="post" class="border border-gray-200 shadow-sm p-3">
    <div class="bg-purple-200 flex h-8 items-center gap-3 font-bold">
        <div
          class="bg-purple-400 h-full flex items-center justify-center w-8 text-white"
        >
          <i class="fa-solid fa-star"></i>
        </div>
        <h1 class="h1">Bài viết mới</h1>
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
            class="w-full h-48"
            id="post-img"
            src="${post.img}"
            alt=""
          />
        </div>
      </div>
    `;
});

// chèn các thẻ HTML vào trong thẻ chứa món ăn
postContainer.innerHTML = html;
