const {
  ref,
  uploadBytesResumable,
  getStorage,
  getDownloadURL,
  listAll,
} = require("firebase/storage");
const { app } = require("../pages/Firebase/FirebaseConfig");
const axios = require("axios");
const loader = require('../pages/loader');
// Function for Uploading files on Firebase Cloud


   export async function upload(userId, queryId) {
    var i = 0;
    const storage = getStorage(app);

    //While Loop for uploading multiple Files
    while (document.getElementById("inputFiles").files[i]) {
      let File = document.getElementById("inputFiles").files[i];
      //Name of the Files would be File1, File2 and so on
      var storageref = ref(storage, `/${userId}/${queryId}/File/File${i}`);

      //promise for uploading file
      await uploadBytesResumable(storageref, File).then((snapshot) => {
        //status for each Upload
        console.log("\nFile Number->" + i + " \nStatus :" + snapshot);
      });
      i++;
    }
    storageref = ref(storage, `/${userId}/${queryId}/Payment/PaymentFile`);

    let File = document.getElementById("inputPayment").files[0];
    await uploadBytesResumable(storageref, File).then((snapshot) => {
      //status for each Upload
      console.log("Payment Status :" + snapshot);
    });
    alert("Form submitted !!");
  }

  //Function for getting Files From Firebase Cloud

  export async function getfile(userId, queryId) {
    const storage = getStorage(app);

    //Location of w.r.t FireBase
    const filelocation = `gs://verification-module.appspot.com/${userId}/${queryId}/`;

    const listref = ref(storage, filelocation + "File");
    //function for getting all the Reference Link in Files Folder
    listAll(listref).then((res) => {
      console.log(res.items.length);
      var Maincontainer = document.getElementById("MainBodyContainer");
      const ChildContainer = document.createElement("div");
      ChildContainer.className = "ChildContainer";

      //condition if user didn't submit any document or files
      if (res.items.length === 0) {
        ChildContainer.innerHTML="No Files Submitted"
        Maincontainer.appendChild(ChildContainer);
      }else{
        ChildContainer.innerHTML = "Files";
        Maincontainer.appendChild(ChildContainer);
      }
      var i = 1;
      res.items.forEach(async (itemsRef) => {
        await getDownloadURL(ref(storage, itemsRef))
          .then((url) => {
            //Creating Link

            var link = document.createElement("a");
            link.target = "_blank";
            link.href = url;
            link.text = "File " + i;
            ChildContainer.appendChild(link);
            i++;
          })
          .catch((error) => {
            //For Handling Errors
            switch (error.code) {
              case "storage/object-not-found":
                console.log("\nFile Not Found");
                break;
              case "storage/unauthorized":
                console.log(
                  "\n User doesn't have permission to access the object"
                );
                break;
              case "storage/canceled":
                console.log("\nUser canceled the upload");
                break;
              case "storage/unknown":
                console.log(
                  "\nUnknown error occurred, inspect the server response"
                );
                break;
              default:
                console.log("Unhandled Error in getting files from cloud ");
                break;
            }
          });
      });

      const listref = ref(storage, filelocation + "Payment");

      //function for getting all the Reference Link in Payment Folder
      listAll(listref)
        .then((res) => {
          var Maincontainer = document.getElementById("MainBodyContainer");
          const ChildContainer = document.createElement("div");
          ChildContainer.className = "ChildContainer";

          //condition if no files were submitted for payment proof
          if (res.items.length === 0) {
            ChildContainer.innerHTML="No Files were Submitted as a payment proof"
            Maincontainer.appendChild(ChildContainer);
          }else{
            ChildContainer.innerHTML = "Payment Proof";
            Maincontainer.appendChild(ChildContainer);
          }
          var i = 1;

          res.items.forEach(async (itemsRef) => {
            await getDownloadURL(ref(storage, itemsRef))
              .then((url) => {
                //Creating Link

                var link = document.createElement("a");
                link.href = url;
                link.text = "File " + i;
                ChildContainer.appendChild(link);
                i++;
              })
              .catch((error) => {
                //For Handling Errors
                switch (error.code) {
                  case "storage/object-not-found":
                    console.log("\nFile Not Found");
                    break;
                  case "storage/unauthorized":
                    console.log(
                      "\n User doesn't have permission to access the object"
                    );
                    break;
                  case "storage/canceled":
                    console.log("\nUser canceled the upload");
                    break;
                  case "storage/unknown":
                    console.log(
                      "\nUnknown error occurred, inspect the server response"
                    );
                    break;
                  default:
                    console.log("Unhandled Error in getting files from cloud ");
                    break;
                }
              });
          });
        })
        .catch((err) => {
          console.log("\nError ->" + err);
        });
    });
  }
  export async function getPaymentFile(props, userId, queryId) {
    const storage = getStorage(app);
    const filelocation = `gs://verification-module.appspot.com/${userId}/${queryId}/Payment`;
    const listref = ref(storage, filelocation);

    listAll(listref).then((res) => {
      res.items.forEach(async (itemsRef) => {
        await getDownloadURL(ref(storage, itemsRef))

        .then((url) => {
            const objectData = { info: props, link: url };
            
            //request to server for connecting appscript
            axios.post("/sendToVerify", { data: objectData });
          })
          .catch((error) => {
            //For Handling Errors
            switch (error.code) {
              case "storage/object-not-found":
                console.log("\nFile Not Found");
                break;
              case "storage/unauthorized":
                console.log(
                  "\n User doesn't have permission to access the object"
                );
                break;
              case "storage/canceled":
                console.log("\nUser canceled the upload");
                break;
              case "storage/unknown":
                console.log(
                  "\nUnknown error occurred, inspect the server response"
                );
                break;
              default:
                console.log("Unhandled Error in getting files from cloud ");
                break;
            }
          });
      });
    });
  }
