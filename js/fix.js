const fixForm = document.getElementById("fix");
const id = window.location.search.substring(1); // lấy id sản phẩm từ query string
console.log(id);
// tạo bảng products trong firestore
const db = firebase.firestore();

// lấy dữ liệu sản phẩm từ firestore và hiển thị lên form nhờ vào id lấy được ở trên
db.collection("posts")
  .doc(id)
  .get()
  .then((doc) => {
    let data = doc.data();
    console.log(data);
    // điền dữ liệu vào form
    fixForm.title.value = data.title;
    fixForm.content.value = data.content;
    fixForm.img.value = data.image;
    fixForm.title1.value = data.title1;
    fixForm.content1.value = data.maincontent1;
    fixForm.title2.value = data.title2;
    fixForm.content2.value = data.maincontent2;
    fixForm.title3.value = data.title3;
    fixForm.content3.value = data.maincontent3;
  });

fixForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let title = e.target.title.value;
  let content = e.target.content.value;
  let image = e.target.img.value;
  let title1 = e.target.title1.value;
  let maincontent1 = e.target.content1.value;
  let title2 = e.target.title2.value;
  let maincontent2 = e.target.content2.value;
  let title3 = e.target.title3.value;
  let maincontent3 = e.target.content3.value;
  // các con tự kiểm tra dữ liệu (validation ở đây đây) rồi mới submit lên server
  console.log({
    title,
    content,
    image,
    title1,
    maincontent1,
    title2,
    maincontent2,
    title3,
    maincontent3,
  });

  // Add a new document with a generated id.
  db.collection("posts")
    .doc(id)
    .update({
      title: title,
      content: content,
      image: image,
      title1: title1,
      maincontent1: maincontent1,
      title2: title2,
      maincontent2: maincontent2,
      title3: title3,
      maincontent3: maincontent3,
    })
    .then((docRef) => {
      console.log("Tạo thành  công sp ");
      Swal.fire("Chỉnh sửa sản phẩm thành công!", "", "success").then(() => {
        window.location.href = "../index.html";
      });
    })
    .catch((error) => {
      console.error("Error adding document: ", error);
      alert("Error adding document: " + error.message);
    });
});
