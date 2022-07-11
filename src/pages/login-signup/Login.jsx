import React, { useState } from "react";
import './Responsive.css';
import logo from '../images/logo.png';
import Card from "react-bootstrap/Card";
import Button from 'react-bootstrap/esm/Button';
import Form from 'react-bootstrap/esm/Form';
import Admin from '../images/admin.png'
import Student from '../images/student.png'
import { useNavigate } from 'react-router-dom';
import * as FireAuth from "../Firebase/Fireauth.js";


export default function Login() {
    const navigate = useNavigate();

    //Google Sign In
    async function clickFunctionGoogle() {
        let result = await FireAuth.googleSignIn();
        if (result) {
            navigate("/#/UserDashboard");
        }
    }

    //Email-Password Signin
    async function clickFunctionSignin(email, password) {
        let result = "";
        result = await FireAuth.signIn(email, password);
        console.log(result);
        if (result) {
            navigate("/#/UserDashboard");
        }
    }

    // Setting States for Email and Password
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    })

    //Input Handling Function - Used at every input field
    const handleinput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        // console.log(name, value);

        setFormData({ ...formData, [name]: value })
    }

    //Form Submit Function - Used in the submit button
    const handleSubmit = (e) => {
        e.preventDefault()
        clickFunctionSignin(formData.email, formData.password) //Passing Email and password collected from the form
    }

    return (
        <>
            <div className="main">
                <div className="upper" style={{
                    width: '100%',
                    overflow: "auto",
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

                    <div className="group63"
                        style={{
                            width:'40%',
                            padding: '0% 3% 0% 3%',
                            color: 'white',
                        }}>
                        <h1>Sign In to</h1>
                        <h4>MIT-WPU Verification System</h4>
                        <p style={{ fontSize: '13px' }}>University-side document verification is integral to every student's future academic and professional ventures as it  confirms the authenticity of details submitted by the student with regards to their academic program, CGPA course etc.</p>
                    </div>
                </div>

                <div className="signinCard" style={{
                    display: 'flex',
                    marginRight:'10%',
                    marginTop:'-17.5%',
                    backgroundColor: 'white',
                    float: 'right',
                    borderRadius: '4%',
                    zIndex: '1',
                    boxShadow: '23px 18px 64px -19px rgba(0,0,0,0.75)'
                }}>

                    <Card style={{ width: '100%', height: "100%" }}>
                        <Card.Body>
                            <Card.Title className=""><h1 style={{
                                width: '50%',
                                display: 'flex',
                                justifyContent: 'left',
                                marginLeft: '5%',
                            }}>Sign In</h1></Card.Title>

                            <Button onClick={() => clickFunctionGoogle()}
                                variant="primary"
                                style={{
                                    border: 'none',
                                    display: 'flex',
                                    msFlexDirection: 'row',
                                    marginLeft: '9%',
                                    width: '80%',
                                    // height:'5%'
                                    padding: '3%',
                                    backgroundColor: '#E9F1FF',
                                }}>

                                <img src="https://media-public.canva.com/MADnBiAubGA/3/screen.svg" alt="Google" style={{
                                    width: '75px',
                                    margin: '1% 0% 0% 1%',
                                    height: "20px",
                                    objectFit: "contain",
                                    backgroundColor: 'transparent'
                                }} />

                                <span style={{
                                    color: 'blue',
                                    marginTop: '1.5%',
                                    fontSize: '15px',

                                }}>Sign In with Google</span>
                            </Button>

                            <Form onSubmit={handleSubmit} style={{
                                marginTop: '5%',
                                marginLeft: '3%',
                            }}>
                                <Form.Group className="mb-3" controlId="formBasicEmail" style={{
                                    padding: '2% 2% 3% 3%',
                                    alignContent: "center", alignSelf: "center",
                                }}>
                                    <Form.Label>Enter your Company or Email address</Form.Label>
                                    <br />
                                    <input type="email"
                                        id="email" name="email" placeholder="Company or Email Address" onChange={handleinput} value={formData.email}
                                        style={{
                                            width: '90%',
                                            paddingTop: '13px',
                                            paddingBottom: '13px',
                                            paddingLeft: "4%",
                                            marginTop: '15px',
                                            borderRadius: '7px',
                                            borderColor: '#4285F4',
                                            borderWidth: '1.5px'
                                        }} />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword"
                                    style={{
                                        padding: '2% 2% 3% 3%',
                                    }}>
                                    <Form.Label>Password</Form.Label>
                                    <br />
                                    <input onChange={handleinput} type="password"
                                        id="passowrd" name="password" value={formData.password} placeholder="Password"
                                        style={{
                                            width: '90%',
                                            paddingTop: '10px',
                                            paddingBottom: '13px',
                                            paddingLeft: "4%",
                                            marginTop: '15px',
                                            borderRadius: '7px',
                                            borderColor: '#4285F4',
                                            borderWidth: '1.5px'

                                        }} />

                                </Form.Group>

                                <Button variant="primary" type="submit" style={{
                                    padding: '3% 2% 3% 3%',
                                    marginLeft: '3%',
                                    width: '88%',
                                    backgroundColor: '#0089ED',
                                    border: 'none',
                                    borderRadius: '7px',
                                    color: 'white',
                                    fontSize: '15px',
                                }}>
                                    Sign In
                                </Button>

                                <Form.Group className="Signuplink"
                                    style={{
                                        marginTop: '5%',
                                        marginBottom: '5%',
                                        textAlign: 'center',
                                    }}>
                                    <Form.Label>Don't have an Account? <a href="/#/signup" style={{
                                        textDecoration: 'none'
                                    }}>SignUP</a></Form.Label>
                                </Form.Group>


                            </Form>

                        </Card.Body>
                    </Card>
                </div>

                <div className="SigninAs"
                    style={{
                        marginTop: '8%',
                        marginLeft: '8%',
                        height: '50%',
                        width: '40%',
                        // border:'2px solid black',
                    }}>
                    <div className='heading'>
                        <span style={{
                            padding: '3%',
                            fontSize: '120%'
                        }}>Sign In as</span>
                    </div>

                    <div className="profiles"
                        style={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            paddingTop: '5%',
                            justifyContent: 'space-between',
                            gap: '2px'
                        }}>
                        <div className="profile1" style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'flex-start',
                            width: '33%',
                        }}>
                            <img src={Admin} alt="Admin Login" style={{
                                backgroundColor: 'white',
                                borderRadius: '100%',
                                border: '2px solid black',
                            }} />
                            <br />
                            <span style={{
                                width: '100%',
                                textAlign: 'center',
                            }}>Admin</span>
                        </div>

                        <div className="profile2" style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'flex-start',
                            width: '33%',
                        }}>
                            <img src={Student} alt="Admin Login" style={{
                                alignSelf: 'center',
                                backgroundColor: 'white',
                                borderRadius: '100%',
                                border: '2px solid black',
                            }} />
                            <br />
                            <span style={{
                                width: '100%',
                                textAlign: 'center',
                            }}>Verification Agency/Student</span>
                        </div>

                    </div>
                </div>


            </div>
        </>
    )
}
