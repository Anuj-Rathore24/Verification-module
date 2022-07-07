import { ref, uploadBytesResumable, getStorage,getDownloadURL,listAll } from "firebase/storage";
import app from "../pages/Firebase/FirebaseConfig";

// Function for Uploading files on Firebase Cloud

async function upload() {
  let value = document.getElementById("input");
  if (!value.value) return;
  const storage = getStorage(app);
  var storageref = ref(storage, `/files/${value.value}`);
  const upload_task = uploadBytesResumable(storageref, value.value);
  alert("Document submitted !!");
}

//Function for getting Files From Firebase Cloud

export default async function getfile(){


  const storage=getStorage(app);
  
  //Location of w.r.t FireBase 
  // const filelocation=`gs://total-pillar-302403.appspot.com/files/`;
  const filelocation=`gs://verification-module.appspot.com/testing/`;
  
  const listref=ref(storage,filelocation+"Files/");

  //function for getting all the Reference Link in Files Folder 
   listAll(listref)
  .then((res)=>{
    
    console.log(res);
    var Maincontainer=document.getElementById("MainBodyContainer");
    Maincontainer.innerHTML="";
    const ChildContainer=document.createElement("div")
    ChildContainer.className="ChildContainer";
    ChildContainer.innerHTML="Files"
    Maincontainer.appendChild(ChildContainer);
    var i=1;
    res.items.forEach(async (itemsRef)=>{

      await getDownloadURL(ref(storage,itemsRef)).then((url)=>{
        
        
        //Creating Link 

        var link =document.createElement("a");
        link.href=url;
        link.text="File "+i;
        ChildContainer.appendChild(link);
        i++
        ;

    
  })
  .catch((error)=>{

    //For Handling Errors
    switch (error.code) {
      case 'storage/object-not-found':
        console.log("\nFile Not Found")
        break;
      case 'storage/unauthorized':
        console.log("\n User doesn't have permission to access the object")
        break;
      case 'storage/canceled':
        console.log("\nUser canceled the upload")
        break; 
      case 'storage/unknown':
        console.log("\nUnknown error occurred, inspect the server response")
        break;
    }

  }
  )
  })
  
  
  const listref=ref(storage,filelocation+"Payment/");
  
  //function for getting all the Reference Link in Payment Folder 
   listAll(listref)
  .then((res)=>{
    
    console.log(res);
    var Maincontainer=document.getElementById("MainBodyContainer");
    var i=1;
    const ChildContainer=document.createElement("div")
    ChildContainer.className="ChildContainer";
    ChildContainer.innerHTML="Payment Proof"
    Maincontainer.appendChild(ChildContainer);
    res.items.forEach(async (itemsRef)=>{

      await getDownloadURL(ref(storage,itemsRef)).then((url)=>{
        
        
        //Creating Link 

        var link =document.createElement("a");
        link.href=url;
        link.text="File "+i;
        ChildContainer.appendChild(link);
        i++
        ;

    
  })
  .catch((error)=>{

    //For Handling Errors
    switch (error.code) {
      case 'storage/object-not-found':
        console.log("\nFile Not Found")
        break;
      case 'storage/unauthorized':
        console.log("\n User doesn't have permission to access the object")
        break;
      case 'storage/canceled':
        console.log("\nUser canceled the upload")
        break; 
      case 'storage/unknown':
        console.log("\nUnknown error occurred, inspect the server response")
        break;
    }

  }
  )
  })
  
})
.catch((err)=>{
    console.log("\nError ->"+err)
  })
  
}
  

)}
