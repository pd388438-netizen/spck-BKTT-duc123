// lây ra id của thẻ chứa các món ăn
const foodContainer = document.getElementById("post-container");
// lấy ra danh sách món ăn từ localStorage
const posts = JSON.parse(localStorage.getItem("posts")) || [];
// duyệt qua từng món ăn và tạo thẻ HTML tương ứng
let html = ``;

posts.forEach((post) => {
  html += `
    <div id="post" class="border border-gray-200 shadow-sm p-3">
        <div id="post-title" class="text-xl"><h1>${post.title}</h1></div>
        <div class="flex items-center gap-5">
          <div id="post-content" class="">
            <p>
              ${post.content}
            </p>
              cum nobis tempora saepe repellendus sapiente numquam architecto,
              obcaecati quas dignissimos molestiae nesciunt!
            </p>
          </div>
        </div>

        <div id="post-img" class="">
          <img
            class="w-full h-48"
            id="post-img"
            src="${post.image}"
            alt=""
          />
        </div>
      </div>
    `;
});

// chèn các thẻ HTML vào trong thẻ chứa món ăn
foodContainer.innerHTML = html;
