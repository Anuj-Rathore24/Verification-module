const { collection, getDocs, addDoc, doc, setDoc, updateDoc } = require("firebase/firestore");
const { db } = require("../pages/Firebase/FirebaseConfig");

  //function for creating query and storing its value on firestore database
  export async function createQuery(creds) {
    const objectData={
      Email: creds.email,
      companyName: creds.agencyName,
      companyEmail: creds.agencyEmail,
      companyContactPersonal: creds.Designation,
      companyContactNumber: creds.agencyNo,
      candidateName: creds.candidateName,
      Univerity: creds.universityName,
      Program: creds.progamName,
      PRN: creds.prn,
      PassingYear: creds.graduationDate,
      Documents: creds.Documents,
      PaymentDate: creds.queryDate,
      NEFTrefNumber: creds.NEFT,
      status: "Not Verified",
      statusDate:creds.statusDate
    }
    try {
      
      //Adding new Document user Database
      var collectionRef=collection(db,`${creds.agencyEmail}`)
      const docRef=await addDoc(collectionRef, objectData)     
      
      //adding new record in Admin Database  
      setDoc(doc(db,"admin@gmail.com",`${docRef.id}`),objectData)
      return docRef.id;

    } catch (err) {
      throw(err);
    }
  }

  //function for requesting query from firestore database

  export async function requestQuery(userID) {
    try {
      const querySnapshot = await getDocs(collection(db, `${userID}`));
      return querySnapshot;
    } catch (err) {
      console.log("The Error is->" + err);
    }
  }
  export async function updateQuery(userId,queryId,type){
    const time=new Date();
    if(type===1){
      try{
        const docRef=doc(db,`${userId}`,`${queryId}`)
        await updateDoc(docRef,{
          status:"Verified",
          statusDate:`${time.toLocaleString()}`
        })
        console.log(userId,queryId)
      }catch(err){
        console.log("error in our new Code ->"+err);
      }
    }else if(type===0){
      try{
        const docRef=doc(db,`${userId}`,`${queryId}`)
        await updateDoc(docRef,{
          status:"Denied",
          statusDate:`${time.toLocaleString()}`
        })
      }catch(err){
        console.log("error in our new Code ->"+err);
      }
    }
  }
