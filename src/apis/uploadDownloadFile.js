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
    
    //File Location wrt Firebase 
    const filelocation=`gs://total-pillar-302403.appspot.com/files/File0`;
    
    //Promise to Get Download Url
    await getDownloadURL(ref(storage,filelocation)).then((url)=>{
      
        console.log(url);
    })
    .catch((error)=>{
      switch (error.code) {
        case 'storage/object-not-found':
          // File doesn't exist
          break;
        case 'storage/unauthorized':
          // User doesn't have permission to access the object
          break;
        case 'storage/canceled':
          // User canceled the upload
          break;
  
        // ...
  
        case 'storage/unknown':
          // Unknown error occurred, inspect the server response
          break;
      }
  
    }
    )
  }