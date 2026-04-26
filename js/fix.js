const fixForm = document.getElementById("fix");
const id = window.location.search.substring(1); // lấy id sản phẩm từ query string
console.log(id);
// tạo bảng products trong firestore
const db = firebase.firestore();

// lấy dữ liệu sản phẩm từ firestore và hiển thị lên form nhờ vào id lấy được ở trên
db.collection("products")
  .doc(id)
  .get()
  .then((doc) => {
    let data = doc.data();
    console.log(data);
    // điền dữ liệu vào form
    fixForm.name.value = data.name;
    fixForm.price.value = data.price;
    fixForm.image.value = data.image;
  });

fixForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let name = e.target.name.value;
  let price = e.target.price.value;
  let image = e.target.image.value;
  // các con tự kiểm tra dữ liệu (validation ở đây đây) rồi mới submit lên server
  console.log({ name, price, image });

  // Add a new document with a generated id.
  db.collection("products")
    .doc(id)
    .update({
      name: name,
      price: price,
      image: image,
    })
    .then((docRef) => {
      console.log("Tạo thành  công sp ");
      Swal.fire("Chỉnh sửa sản phẩm thành công!", "", "success").then(() => {
        window.location.href = "/index.html";
      });
    })
    .catch((error) => {
      console.error("Error adding document: ", error);
      alert("Error adding document: " + error.message);
    });
});
