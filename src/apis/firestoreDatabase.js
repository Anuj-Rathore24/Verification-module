const { addDoc, collection, doc, getDoc } = require("firebase/firestore");
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
    try {
      const docRef = await addDoc(collection(db, `${creds.agencyEmail}`), {
        Email: creds.email,
        companyName: creds.agencyName,
        companyEmail: creds.agencyEmail,
        companyContactPersonal: creds.Designation,
        companyContactNumber: creds.agencyNo,
        candidateName: creds.firstName+creds.lastName,
        Univerity: creds.universityName,
        Program: creds.progamName,
        PRN: creds.prn,
        PassingYear: creds.graduationDate,
        Documents: creds.Documents,
        PaymentDate: creds.queryDate,
        NEFTrefNumber: creds.NEFT,
      });
    } catch (err) {
        console.log("The Error is :" + err);
    }
},

    //function for requesting query from firestore database

 requestQuery:async function(userId){
    try{
        const querySnapshot=await getDoc(collection(db,`${userId}`),)
        querySnapshot.array.forEach(doc => {
            
        });

    }catch(err){
        console.log("The Error is->"+err)
    }
 }

};