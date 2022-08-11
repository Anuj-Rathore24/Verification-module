
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, sendPasswordResetEmail } from "firebase/auth";
import { auth, googleAuthProvider } from './Firebase';


// async function otp_verification(phoneNumber) {
//     const appVerifier = window.recaptchaVerifier;

//     const auth = auth();
//     signInWithPhoneNumber(auth, phoneNumber, appVerifier)
//         .then((confirmationResult) => {
//             // SMS sent. Prompt user to type the code from the message, then sign the
//             // user in with confirmationResult.confirm(code).
//             window.confirmationResult = confirmationResult;
//             // ...
//         }).catch((error) => {
//             // Error; SMS not sent
//             // ...
//         });
// }

// async function reCAPTCHA() {
//     const auth = auth();
//     window.recaptchaVerifier = new RecaptchaVerifier('sign-in-button', {
//         'size': 'invisible',
//         'callback': (response) => {
//             // reCAPTCHA solved, allow signInWithPhoneNumber.
//             // onSignInSubmit();
//         }
//     }, auth);
// }


async function register(email, password) {

    await createUserWithEmailAndPassword(auth, email, password).then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log(email, password);
        console.log(user)

    })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage);
            // ..
            return false;
        });
    return true;
}

async function signIn(email, password) {
    let a = 0;
    await signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log(user)
    })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage);
            a = 1;
            // ..
        });
    if (a === 0) {
        return true
    }
    else {
        return false
    }

}

async function signOut() {
    await auth.signOut();
}

async function googleSignIn() {
    let a = 0;

    googleAuthProvider.addScope('profile');
    googleAuthProvider.addScope('email');


    await signInWithPopup(auth, googleAuthProvider).then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log(user)

    })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage);
            a = 1
            // ..
        });
    if (a === 0) {
        return true
    }
    else {
        return false
    }
}

async function resetPassword(email) {
    sendPasswordResetEmail(auth, email)
        .then(() => {
            alert("Check your email for Password Reset Link!")
            // Password reset email sent!
            // ..
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage);
            // ..
        });
}



export { signIn, signOut, register, googleSignIn, resetPassword };