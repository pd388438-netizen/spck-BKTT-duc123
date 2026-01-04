// lây ra id của thẻ chứa các món ăn
const postContainer = document.getElementById("post-container");
// lấy ra danh sách món ăn từ localStorage
const posts = JSON.parse(localStorage.getItem("posts")) || [];
// duyệt qua từng món ăn và tạo thẻ HTML tương ứng
let html = ``;

posts.forEach((post) => {
  html += `
    <div id="post" class="border border-gray-200 shadow-sm p-3">
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
        <a class="hover:text-blue-700 underline" href="../html/Fix.html?${post.id}">Sửa bài viết</a>
      </div>
    `;
});

// chèn các thẻ HTML vào trong thẻ chứa món ăn
postContainer.innerHTML = html;
