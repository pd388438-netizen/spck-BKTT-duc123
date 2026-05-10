// lây ra id của thẻ chứa các món ăn
const postContainer = document.getElementById("post-container");
// lấy ra danh sách món ăn từ localStorage
const db = firebase.firestore();

function renderPosts(posts) {
  postContainer.innerHTML = "";
  if (!posts || posts.length === 0) {
    postContainer.innerHTML = `<p class="text-gray-500">Không có bài viết nào.</p>`;
    return;
  }

  let html = "";
  posts.forEach((post) => {
    html += `
       <div class="border border-gray-200 shadow-sm p-3 mb-4">
         <div class="bg-purple-200 flex h-8 items-center gap-3 font-bold">
           <div class="bg-purple-400 h-full flex items-center justify-center w-8 text-white">
             <i class="fa-solid fa-star"></i>
           </div>
           <h1 class="h1">Bài viết mới</h1>
         </div>
         <div class="text-xl mt-3"><h1><a href="../html/baiviet1.html?${post.id}">${post.title}</a></h1></div>
         <div class="flex items-center gap-5 mt-3">
           <div class="w-full">
             <p class="text-gray-600 line-clamp-3">${post.content || ""}</p>
           </div>
         </div>
         <div class="mt-3">
           <img class="w-full h-60 object-cover" src="${post.image || ""}" alt="${post.title || ""}" />
         </div>
       </div>
       `;
  });
  postContainer.innerHTML = html;
}

let posts = [];

async function loadPosts() {
  try {
    const querySnapshot = await db.collection("posts").get();
    posts = [];
    querySnapshot.forEach((doc) => {
      const post = doc.data();
      post.id = doc.id;
      posts.push(post);
    });
    renderPosts(posts);
  } catch (error) {
    console.error("Lỗi khi tải dữ liệu bài viết:", error);
    postContainer.innerHTML = `<p class="text-red-500">Đã xảy ra lỗi khi tải dữ liệu.</p>`;
  }
}

loadPosts();

const keywordInput = document.getElementById("find");
keywordInput.addEventListener("input", () => {
  const keyword = keywordInput.value.trim().toLowerCase();
  const filteredData = posts.filter((post) => {
    const searchableText = ` ${post.title || ""}`.toLowerCase();
    return searchableText.includes(keyword);
  });
  console.log(filteredData);
  renderPosts(filteredData);
});
