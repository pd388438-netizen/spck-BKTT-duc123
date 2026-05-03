import {
  getFirestore,
  collection,
  query,
  where,
  getDocs,
} from "firebase/firestore";

const input = document.getElementById("find");
const db = getFirestore();
const postsRef = collection(db, "post");

async function find() {
  const q = query(postsRef, where("title", "==", input.value));
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    console.log(doc.id, " => ", doc.data());
  });
}
