
import {React,useEffect,useState} from "react";
import { Navigate } from "react-router-dom";
import { PageStatus } from "./State";
import OTP from './OTP'
import UserDashboard from "../user-dashboard/UserDashboard";
import VerificationForm from "../form/VerificationForm";
import AdminDashBoard from "../admin-dashboard/AdminDashBoard.js";
import { auth } from "../Firebase/Firebase";







// Protected Route function for OTP Page so the user cannot directly go to OTP with URL Manipulation.
const ProtectedRoute1 = () => {
    return PageStatus.pageStatus ? <OTP/> : <Navigate to="/Signup"/>
         // If pagestatus state is set as true then only it will go to the OTP page else it will go back to Signup Page
};
const ProtectedRoute2 = () => {
    var [userLoggedIn,setUser] = useState({})
    useEffect(() => {
        try{
            auth.onAuthStateChanged((user)=>{
                if(user) setUser(user.uid!==" "?true:false)
                else{
                    setUser(false)
                }
            })
        }catch(err){
            console.log("Something Wrong ->"+err)
        }
    }, [userLoggedIn])

    return userLoggedIn ? <UserDashboard/> : <Navigate to = "/"/>    

};

const ProtectedRoute3 = () => {
    var [userLoggedIn,setUser] = useState({})
    useEffect(() => {
        try{
            auth.onAuthStateChanged((user)=>{
                if(user) setUser(user!==" "?true:false)
                else{
                    setUser(false)
                }
            })
        }catch(err){
            console.log("Something Wrong ->"+err)
        }
    }, [userLoggedIn])

    return userLoggedIn ? <VerificationForm/> : <Navigate to = "/"/>    


};

const ProtectedRoute4 = () => {
    var [userLoggedIn,setUser] = useState({})
    useEffect(() => {
        try{
            auth.onAuthStateChanged((user)=>{
                if(user) setUser(user.uid==="rnYz2JgIlgT6bkgguEgULe9HRL32"?true:false)
                else{
                    setUser(false)
                }
            })
        }catch(err){
            console.log("Something Wrong ->"+err)
        }
    }, [userLoggedIn])
    return userLoggedIn ? <AdminDashBoard/> : <Navigate to = "/"/>
}

export { ProtectedRoute1, ProtectedRoute2, ProtectedRoute3, ProtectedRoute4 }