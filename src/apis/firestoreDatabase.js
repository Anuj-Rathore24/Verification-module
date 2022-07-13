const { addDoc, collection, getDocs } = require("firebase/firestore");
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
    var message="Form Submitted";
    try {
      const docRef = await addDoc(collection(db, `Users/${creds.agencyEmail}`), {
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

 requestQuery:async function(userId){
    try{
        const querySnapshot=await getDocs(collection(db,`Users/${userId}`),)        
        return querySnapshot; 

    }catch(err){
        console.log("The Error is->"+err)
    }
 }

};