async function upload() {
    var i=0;
    
    //While Loop for uploading multiple Files
    while( document.getElementById("input").files[i]){

      let File = document.getElementById("input").files[i];
      const storage = getStorage(app);
    
      //Name of the Files would be File1, File2 and so on
      var storageref = ref(storage, `/files/File${i}`);
      
      //promise for uploading file
      
      const upload_task =await uploadBytesResumable(storageref, File).then((snapshot)=>{
        
        //status for each Upload
        console.log("\nFile Number->"+i+" \nStatus :\n"+snapshot)
      });
      i++
    }
    alert("Document submitted !!");

  }

  async function getfile(){


    const storage=getStorage(app);
    
    //Location of w.r.t FireBase 
    const filelocation=`gs://total-pillar-302403.appspot.com/files/`;
    
    const listref=ref(storage,filelocation);

    //function for getting all the References for Files in that Folder 
     listAll(listref)
    .then((res)=>{
      console.log(res);
      res.items.forEach((itemsRef)=>{

        // Promise for Download URL from Firebase
        getDownloadURL(ref(storage,itemsRef)).then((url)=>{
        console.log(url);
      
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
      alert("Error While Uploading!");
  
    }
    )
      })
    }).catch((err)=>{
        alert("Error While Uploading!");
        console.log("\nError ->"+err)
    })

    
    
    
  }