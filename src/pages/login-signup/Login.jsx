import React, { useState} from "react";
import "./Responsive.css";
import logo from "../images/logo.png";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/esm/Button";
import Form from "react-bootstrap/esm/Form";
import { useNavigate } from "react-router-dom";
import * as FireAuth from "../Firebase/Fireauth.js";
import { LoggedIn } from "./State";
import { auth } from "../Firebase/Firebase";


export default function Login() {
  const navigate = useNavigate();

  //Email-Password Signin
  async function clickFunctionSignin(email, password) {
    let result = "";
    result = await FireAuth.signIn(email, password);
    console.log(result);
    if (result) {
      LoggedIn.isLoggedIn = true;
      let adminID = auth.currentUser.uid;
      console.log(adminID);
      if (adminID === "rnYz2JgIlgT6bkgguEgULe9HRL32") {
        navigate("/admin");
      } else {
        navigate("/UserDashboard");
      }
    } else {
      alert("Wrong Username or Password");
    }
  }

  // Setting States for Email and Password
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  //Input Handling Function - Used at every input field
  const handleinput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    // console.log(name, value);

    setFormData({ ...formData, [name]: value });
  };

  //Form Submit Function - Used in the submit button
  const handleSubmit = (e) => {
    e.preventDefault();
    clickFunctionSignin(formData.email, formData.password); //Passing Email and password collected from the form
  };

  const handleReset = (e) => {
    e.preventDefault();
    FireAuth.resetPassword(formData.email);
  };

  return (
    <>
      <div className="ls_main">
        <div className="ls_showcase-top">
          <img src={logo} alt="MIT Logo" />
        </div>

        <div className="ls_signinCard">
          <Card className="ls_card">
            <Card.Body>
              <Card.Title className="ls_cardtitle">
                <h1>Sign In</h1>
              </Card.Title>

              <Form className="ls_loginForm" onSubmit={handleSubmit}>
                <Form.Group
                  className="ls_emailGroup"
                  controlId="formBasicEmail"
                >
                  {/* <Form.Label>Enter your Company or Email address</Form.Label> */}
                  <br />
                  <input
                    type="email"
                    className="ls_emailInput"
                    id="email"
                    name="email"
                    placeholder="Email Address"
                    onChange={handleinput}
                    value={formData.email}
                    style={{
                      color: "white",
                      width: "90%",
                      paddingTop: "13px",
                      paddingBottom: "13px",
                      paddingLeft: "4%",
                      marginTop: "2%",
                      borderRadius: "7px",
                      backgroundColor: "transparent",
                      borderColor: "white",
                      borderWidth: "1.5px",
                    }}
                  />
                </Form.Group>

                <Form.Group
                  className="ls_passwordGroup"
                  controlId="formBasicPassword"
                  style={{
                    padding: "0% 2% 3% 3%",
                  }}
                >
                  {/* <Form.Label>Password</Form.Label> */}
                  <br />
                  <input
                    onChange={handleinput}
                    type="password"
                    id="passowrd"
                    name="password"
                    value={formData.password}
                    placeholder="Password"
                    style={{
                      width: "90%",
                      paddingTop: "10px",
                      paddingBottom: "13px",
                      paddingLeft: "4%",
                      marginTop: "-3%",
                      borderRadius: "7px",
                      backgroundColor: "transparent",
                      borderColor: "white",
                      borderWidth: "1.5px",
                    }}
                  />
                </Form.Group>

                <Button className="resetPasswordbtn" onClick={handleReset}>
                  Forgot Password?
                </Button>

                <Button
                  variant="primary"
                  type="submit"
                  style={{
                    padding: "3% 2% 3% 3%",
                    marginLeft: "3%",
                    width: "88%",
                    backgroundColor: "#0089ED",
                    border: "none",
                    borderRadius: "7px",
                    color: "white",
                    fontSize: "15px",
                  }}
                >
                  Sign In
                </Button>

                <Form.Group
                  className="Signuplink"
                  style={{
                    marginTop: "5%",
                    marginBottom: "5%",
                    textAlign: "center",
                  }}
                >
                  <Form.Label style={{ color: "white" }}>
                    Don't have an Account?{" "}
                    <a
                      href="/#/signup"
                      style={{
                        textDecoration: "none",
                        color: "rgb(0, 137, 237)",
                        fontWeight: "bold",
                      }}
                    >
                      SignUP
                    </a>
                  </Form.Label>
                </Form.Group>
              </Form>
            </Card.Body>
          </Card>
        </div>
      </div>
      <div className="ls_bottomnav">
        <div className="ls_siteName">MIT-WPU Verification System :</div>
        <div className="ls_scrollingcontent">
          <marquee direction="left">
            University-side document verification is integral to every student's
            future academic and professional ventures as it confirms the
            authenticity of details submitted by the student with regards to
            their academic program, CGPA course etc.
          </marquee>
        </div>
      </div>
    </>
  );
}
