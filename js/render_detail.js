const title = document.getElementById("title");
const image = document.getElementById("image");
const content = document.getElementById("content");
const title1 = document.getElementById("title1");
const content1 = document.getElementById("content1");
const title2 = document.getElementById("title2");
const content2 = document.getElementById("content2");
const title3 = document.getElementById("title3");
const content3 = document.getElementById("content3");

const id = window.location.search.slice(1);

const db = firebase.firestore();
db.collection("posts")
  .doc(id)
  .get()
  .then((doc) => {
    const post = doc.data();
    console.log(post);
    title.innerText = post.title;
    content.innerText = post.content;
    image.src = post.image;
    title1.innerText = post.title1;
    content1.innerText = post.maincontent1;
    title2.innerText = post.title2;
    content2.innerText = post.maincontent2;
    title3.innerText = post.title3;
    content3.innerText = post.maincontent3;
  })
  .catch((error) => {
    console.log("Error getting document:", error);
    Swal.fire({
      icon: "error",
      title: "Error getting post detail",
    });
  });
