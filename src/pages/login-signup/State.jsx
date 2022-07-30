//Setting pageStatus as false so no one can directly visit OTP page with URL Manipulation
import { auth } from "../Firebase/Firebase";

class PageStatus{
    static pageStatus = false;
    // static setPagestatus = (state) =>{
        //     this.pageStatus = state
        // } 
    }
    
class LoggedIn{
    async getUser(){
        auth.onAuthStateChanged((user)=>{
            this.status=true;
        })
        if(this.status){
           return true 
        }
        return false
    }
    static isLoggedIn = this.getUser;
    static status=false;
}

class FormStatus{
    static formStatus = false;
}

class AdminStatus{
    static adminStatus = false;
}

export {PageStatus, LoggedIn, FormStatus, AdminStatus}