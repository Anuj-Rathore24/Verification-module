const { collection, getDocs, addDoc, doc, setDoc, updateDoc } = require("firebase/firestore");
const { db } = require("../pages/Firebase/FirebaseConfig");

module.exports = {
  //function for creating query and storing its value on firestore database
  createQuery: async function (creds) {
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
  },

  //function for requesting query from firestore database

  requestQuery: async function (userID) {
    try {
      const querySnapshot = await getDocs(collection(db, `${userID}`));
      return querySnapshot;
    } catch (err) {
      console.log("The Error is->" + err);
    }
  },
  updateQuery:async function (userId,queryId,type){
    const time=new Date();
    if(type===1){
      try{
        const docRef=doc(db,`${userId}`,`${queryId}`)
        await updateDoc(docRef,{
          status:"Verified",
          statusDate:`${time.getDate()+"/"+time.getMonth()+"/"+time.getFullYear()+"\t"+time.getHours()+":"+time.getMinutes()}`
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
          statusDate:`${time.getDate()+"/"+time.getMonth()+"/"+time.getFullYear()+"\t"+time.getHours()+":"+time.getMinutes()}`
        })
      }catch(err){
        console.log("error in our new Code ->"+err);
      }
    }
  }
};
