import React, { useState, navigation } from 'react'
import './Otp_responsiveness.css'
import logo from '../images/logo.png'
import Card from "react-bootstrap/Card";
import Button from 'react-bootstrap/esm/Button';
import Form from 'react-bootstrap/esm/Form';
import { useNavigate } from 'react-router-dom';
import * as FireAuth from "../Firebase/Fireauth.js";
import { deleteUser } from 'firebase/auth';
import { auth } from '../Firebase/Firebase';
import {clickFunctionSignup} from './Signup.jsx'

export default function OTP() {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        otp: "",
    })


    const handleinput = (e) => {
        const name = e.target.name;
        const otp = e.target.value;
        console.log(name, otp);

        setFormData({ ...formData, [name]: otp })

        if (otp.length === 6) {
            console.log("hello");
            let confirmationResult = window.confirmationResult;
            confirmationResult.confirm(otp).then((result) => {
                // User signed in successfully.

                //deleting a user process started
                const user = auth.currentUser;
                deleteUser(user).then(() => {
                    // User deleted.
                    console.log("User Deleted");
                }).catch((error) => {
                    // An error ocurred
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    console.log(errorCode, errorMessage);
                });
                //Deleting user code complete   


                console.log(localStorage);
                clickFunctionSignup(localStorage.getItem('email'), localStorage.getItem('password'));
                navigate("/home", { replace: true })
                // ...
            }).catch((error) => {
                // User couldn't sign in (bad verification code?)
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage);
            });
        }
    }


    return (
        <>
            <div className="main">
                <div className="upper" style={{
                    width: '100%',
                    height: '20rem',
                    backgroundColor: '#0089ED',
                }}>

                    <div className="showcase-top">
                        <img src={logo} alt="MIT Logo" style={{
                            width: '75px',
                            height: '75px',
                            margin: '1% 0% 0% 1%',
                            backgroundColor: 'white',
                            borderRadius: '5%',
                        }} />
                    </div>

                    <div className="signinCard1" >

                        <Card style={{ width: '100%' }}>
                            <Card.Body>
                                <Card.Title className="card"><p className='title'>OTP Verification</p></Card.Title>


                                <Form style={{
                                    marginTop: '7%',
                                    // marginLeft: '2%',
                                }}>
                                    <Form.Group className="mb-3" controlId="formBasicEmail" style={{
                                        marginLeft: '5%',
                                        width: '85%',
                                        padding: '3% 3% 3% 3%',
                                        backgroundColor: '#D4ECDE',
                                        borderRadius: '2%',
                                    }}>
                                        <Form.Label>We have Sent a Verification Code to Your Phone Number</Form.Label>
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formBasicPassword"
                                        style={{
                                            padding: '3% 0% 8% 6%',
                                        }}>
                                        <input type="password" placeholder="Enter Verification Code"
                                            name="otp" id="otp"
                                            onChange={handleinput} value={formData.otp}
                                            style={{
                                                width: '90%',
                                                paddingTop: '3%',
                                                paddingBottom: '3%',
                                                paddingLeft: "4%",
                                                marginTop: '5%',
                                                borderRadius: '2%',
                                                borderColor: '#4285F4',

                                            }} />
                                    </Form.Group>

                                    {/* <Button variant="primary" type="submit" style={{
                                        marginLeft: '5%',
                                        width: '90%',
                                        backgroundColor: '#0089ED',
                                        border: 'none',
                                        borderRadius: '2%',
                                        paddingTop: '4%',
                                        paddingBottom: '4%',
                                        color: 'white',
                                        fontSize: '100%',
                                    }}>
                                        Submit
                                    </Button> */}
                                </Form>

                            </Card.Body>
                        </Card>
                    </div>

                </div>
            </div>
        </>
    )
}
