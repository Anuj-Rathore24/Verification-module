const { collection, getDocs,setDoc,doc } = require("firebase/firestore");
const { db } = require("../pages/Firebase/FirebaseConfig");
/*
creds={
    email: "",
    agencyName: "",
    agencyEmail: "",
    Designation: "",
    agencyNo: "",
    firstName: "",
    lastName: "",
    universityName: "",
    progamName: "",
    prn: "",
    graduationDate: "",
    document: "",
    queryDate: "",
    NEFT: "",
    paymentSS: "",
    verificationDocument: "",
}
*/

module.exports = {

    //function for creating query and storing its value on firestore database
  createQuery: async function (creds) {
    const userId=localStorage.getItem("email");
    var message="Form Submitted";
    try {
      // var doc=await db.collection("users").collection(`${userId}`).set()
      const docRef = await setDoc(doc(db,`Users/${userId}`), {
        Email: creds.email,
        companyName: creds.agencyName,
        companyEmail: creds.agencyEmail,
        companyContactPersonal: creds.Designation,
        companyContactNumber: creds.agencyNo,
        candidateName: creds.firstName+" "+creds.lastName,
        Univerity: creds.universityName,
        Program: creds.progamName,
        PRN: creds.prn,
        PassingYear: creds.graduationDate,
        Documents: creds.Documents,
        PaymentDate: creds.queryDate,
        NEFTrefNumber: creds.NEFT,
        status:"notVerified"
      });
    } catch (err) {
        message="Error Submitting Form"
        console.log("The Error is :" + err);
    }
    return message;
},

    //function for requesting query from firestore database

 requestQuery:async function(){
    try{
      const userId=localStorage.getItem("email");
        const querySnapshot=await getDocs(collection(db,`anuj@gmail.com`),)        
        return querySnapshot; 

    }catch(err){
        console.log("The Error is->"+err)
    }
 }

};