const { collection, getDocs, setDoc, doc,getDoc, addDoc } = require("firebase/firestore");
const { db } = require("../pages/Firebase/FirebaseConfig");

module.exports = {
  //function for creating query and storing its value on firestore database
  createQuery: async function (creds) {
    const userId = localStorage.getItem("email");
    const objectData={
      Email: creds.email,
      companyName: creds.agencyName,
      companyEmail: creds.agencyEmail,
      companyContactPersonal: creds.Designation,
      companyContactNumber: creds.agencyNo,
      candidateName: creds.firstName + " " + creds.lastName,
      Univerity: creds.universityName,
      Program: creds.progamName,
      PRN: creds.prn,
      PassingYear: creds.graduationDate,
      Documents: creds.Documents,
      PaymentDate: creds.queryDate,
      NEFTrefNumber: creds.NEFT,
      status: "notVerified",
    }
    try {
      
      //Adding new Document in our Firestore
      const docRef=await addDoc(collection(db, `users`), objectData)      
      return docRef.id;

    } catch (err) {
      console.log("the Error Must Be :" + err);
    }
  },

  //function for requesting query from firestore database

  requestQuery: async function () {
    try {
      const userId = localStorage.getItem("email");
      const querySnapshot = await getDocs(collection(db, `anuj@gmail.com`));
      return querySnapshot;
    } catch (err) {
      console.log("The Error is->" + err);
    }
  },
};
