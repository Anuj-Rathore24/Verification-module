
import React from "react";
import { Navigate } from "react-router-dom";
import { PageStatus } from "./State";
import OTP from './OTP'

// Proteted Route function for OTP Page so the user cannot directly go to OTP with URL Manipulation.
const ProtectedRoute = () => {
    return PageStatus.pageStatus ? <OTP/> : <Navigate to="/Signup"/> // If pagestatus state is set as true then only it will go to the OTP page else it will go back to Signup Page
};

export default ProtectedRoute;