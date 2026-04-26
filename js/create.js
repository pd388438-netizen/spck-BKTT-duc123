const formAddPost = document.getElementById("create-form");

formAddPost.addEventListener("submit", function (e) {
  e.preventDefault();
  const formData = new FormData(formAddPost);

  const titlemain = formData.get("tieu-de");
  const maincontent = formData.get("content");
  const title1 = formData.get("tieu-de1");
  const maincontent1 = formData.get("content-1");
  const title2 = formData.get("tieu-de2");
  const maincontent2 = formData.get("content-2");
  const title3 = formData.get("tieu-de3");
  const maincontent3 = formData.get("content-3");
  const image = formData.get("anh");

  if (!titlemain.trim()) {
    Swal.fire({
      icon: "error",
      title: "Title is required",
      willClose: () => {
        document.getElementById("tieu-de").focus();
      },
    });
    return;
  }

  if (!maincontent.trim()) {
    Swal.fire({
      icon: "error",
      title: "Main content is required",
      willClose: () => {
        document.getElementById("main-content").focus();
      },
    });
    return;
  }

  if (!image.trim()) {
    Swal.fire({
      icon: "error",
      title: "Image is required",
      willClose: () => {
        document.getElementById("image").focus();
      },
    });
    return;
  }

  const newProduct = {
    title: titlemain,
    content: maincontent,
    title1: title1,
    maincontent1: maincontent1,
    title2: title2,
    maincontent2: maincontent2,
    title3: title3,
    maincontent3: maincontent3,
    image: image,
  };
  console.log(newProduct);
  Swal.fire({
    icon: "loading",
    title: "Loading...",
    showConfirmButton: false,
  });
  const db = firebase.firestore();
  db.collection("products")
    .add(newProduct)
    .then((docRef) => {
      console.log("Document written with ID: ", docRef.id);
      Swal.fire({
        icon: "success",
        title: "Thêm bài viết thành công",
        willClose: () => {
          window.location.href = "../index.html";
        },
      });
    })
    .catch((error) => {
      console.error("Error adding document: ", error);
      Swal.fire({
        icon: "error",
        title: "Thêm bài viết thất bại",
        text: error.message,
      });
    });
});
