const submitButton = document.getElementById("btn-create");

submitButton.addEventListener("click", function (e) {
  e.preventDefault();
  const titlemain = document.getElementById("tieu-de").value;
  const maincontent = document.getElementById("content").value;
  const title1 = document.getElementById("tieu-de1").value;
  const maincontent1 = document.getElementById("content-1").value;
  const title2 = document.getElementById("tieu-de2").value;
  const maincontent2 = document.getElementById("content-2").value;
  const title3 = document.getElementById("tieu-de3").value;
  const maincontent3 = document.getElementById("content-3").value;
  const image = document.getElementById("anh").value;

  if (!titlemain.trim()) {
    Swal.fire({
      title: "Title is required",
      icon: "error",

      willClose: () => {
        document.getElementById("tieu-de").focus();
      },
    });
    return;
  }

  if (!maincontent.trim()) {
    Swal.fire({
      title: "Main content is required",
      icon: "error",

      willClose: () => {
        document.getElementById("content").focus();
      },
    });
    return;
  }

  if (!image.trim()) {
    Swal.fire({
      title: "Image is required",
      icon: "error",

      willClose: () => {
        document.getElementById("anh").focus();
      },
    });
    return;
  }

  const newPost = {
    title: titlemain,
    content: maincontent,
    title1: title1,
    maincontent1: maincontent1,
    title2: title2,
    maincontent2: maincontent2,
    title3: title3,
    maincontent3: maincontent3,
    image: image,
    keyword: titlemain.toLowerCase().trim(),
  };
  console.log(newPost);
  Swal.fire({
    icon: "loading",
    title: "Loading...",
    showConfirmButton: false,
  });
  const db = firebase.firestore();
  db.collection("posts")
    .add(newPost)
    .then((docRef) => {
      console.log("Document written with ID: ", docRef.id);
      Swal.fire({
        title: "Thành công",
        text: "Bài viết đã được thêm thành công",
        icon: "success",
        willClose: () => {
          window.location.href = "../index.html";
        },
      });
    })
    .catch((error) => {
      console.error("Error adding document: ", error);
      Swal.fire({
        title: "Thêm bài viết thất bại",
        text: error.message,
        icon: "error",
      });
    });
});
