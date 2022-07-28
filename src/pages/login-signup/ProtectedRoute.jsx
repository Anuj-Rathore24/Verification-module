
import React from "react";
import { Navigate } from "react-router-dom";
import { FormStatus, LoggedIn, PageStatus } from "./State";
import OTP from './OTP'
import UserDashboard from "../user-dashboard/UserDashboard";
import VerificationForm from "../form/VerificationForm";


// Protected Route function for OTP Page so the user cannot directly go to OTP with URL Manipulation.
const ProtectedRoute1 = () => {
    return PageStatus.pageStatus ? <OTP/> : <Navigate to="/Signup"/>
         // If pagestatus state is set as true then only it will go to the OTP page else it will go back to Signup Page
};
const ProtectedRoute2 = () => {
    return LoggedIn.isLoggedIn ? <UserDashboard/> : <Navigate to = "/"/> 
};

const ProtectedRoute3 = () => {
    return FormStatus.formStatus ? <VerificationForm/> : <Navigate to = "/"/>    

};

export { ProtectedRoute1, ProtectedRoute2, ProtectedRoute3 }