import { ref, uploadBytesResumable, getStorage } from "firebase/storage";
import app from "./credentials.js";

// Function for Uploading files on Firebase Cloud

function upload() {
  let value = document.getElementById("input");
  if (!value.value) return;
  const storage = getStorage(app);
  var storageref = ref(storage, `/files/${value.value}`);
  const upload_task = uploadBytesResumable(storageref, value.value);
  alert("Document submitted !!");
}

//Function for getting Files From Firebase Cloud

function getfile(){
    
}
