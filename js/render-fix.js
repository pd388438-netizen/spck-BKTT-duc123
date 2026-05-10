// lây ra id của thẻ chứa các món ăn
const postContainer = document.getElementById("post-container");
// lấy ra danh sách món ăn từ localStorage
const db = firebase.firestore();
// duyệt qua từng món ăn và tạo thẻ HTML tương ứng

let html = ``;
db.collection("posts")
  .get()
  .then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      const post = doc.data();
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
            src="${post.image}"
            alt=""
          />
        </div>
        <a class="hover:text-blue-700 underline" href="../html/Fix.html?${doc.id}">Sửa bài viết</a>
        <button id="delete-post" onclick="deletePost('${doc.id}')" class="btn btn-error" ;">Xóa</button>
      </div>
    `;
      postContainer.innerHTML = html;
    });
  });

function deletePost(id) {
  console.log(id);
  Swal.fire({
    title: "Are you sure you want to delete this post?",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!",
  }).then((result) => {
    if (result.isConfirmed) {
      const db = firebase.firestore();
      db.collection("posts")
        .doc(id)
        .delete()
        .then(() => {
          console.log("Document successfully deleted!");
          Swal.fire({
            icon: "success",
            title: "Delete post successfully",
            willClose: () => {
              window.location.href = "../index.html";
            },
          });
        })
        .catch((error) => {
          console.error("Error removing document: ", error);
          Swal.fire({
            icon: "error",
            title: "Error deleting post",
          });
        });
    }
  });
}
