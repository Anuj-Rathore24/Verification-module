import React, { useState } from 'react'
import './signupResponsive.css';
import logo from '../images/logo.png'
import Card from "react-bootstrap/Card";
import Button from 'react-bootstrap/esm/Button';
import Form from 'react-bootstrap/esm/Form';
import { useNavigate } from 'react-router-dom';
import * as FireAuth from "../Firebase/Fireauth.js";
import {RecaptchaVerifier, signInWithPhoneNumber, } from "firebase/auth";
import { auth } from '../Firebase/Firebase';
import { PageStatus } from './State'

/*
Signup Process Flow 

Step 1 :User Enters email, organization, phone number, and password.
Step 2 :Email and password is stored in local storage
Step 3 :Automatic recaptcha takes place and otp is sent
Step 4 :Otp pageStatus turns true and renders otp page as it is a protected route
Step 5 :User enters otp successfully
Step 6 :Account with Phone number gets created
Step 7 :Account with Phone number is deleted since we only want one account from 1 user. 
Step 8 :Email and Password from local storage is fetched and an user with email and password is created
Step 9 :Email and Password form local storage is created
Step 10 :Navigates to Home Page
Step 11 :pageStatus updates to false so OTP page is inaccessible.
*/

//Email-Password Sign-Up
async function clickFunctionSignup(email, password) {
    let result = await FireAuth.register(email, password);
    if (result) {
        console.log(result);
    }
}


export default function Signup() {

    const navigate = useNavigate();

    //Invisible ReCaptcha function 
    async function reCAPTCHA() {
        window.recaptchaVerifier = new RecaptchaVerifier('sign-in-button', {
            'size': 'invisible',
            'callback': (response) => {
                // console.log("hello");
            }
        }, auth);
    }

    //OTP Verification Function
    async function otp_verification(phoneNumber) {
        reCAPTCHA(); //Invisible ReCaptcha Called
        const appVerifier = window.recaptchaVerifier;
       
        signInWithPhoneNumber(auth, phoneNumber, appVerifier)
            .then((confirmationResult) => {
                // SMS sent. Prompt user to type the code from the message, then sign the
                // user in with confirmationResult.confirm(code).

                window.confirmationResult = confirmationResult;
                PageStatus.pageStatus = true; //Setting pageStatus true so OTP page is accesible
                navigate("/otp", { replace: true }); //Navigates to OTP page which is protected as defined in App.js

            }).catch((error) => {
                // Error; SMS not sent

                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage);
            });
    }

    //Setting State for all the info to be used
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        companyName: "",
        contactNumber: ""
    })

    //Input Handling Function - Used at every input field
    const handleinput = (e) => {
        // e.preventDefault();
        const name = e.target.name;
        const value = e.target.value;
        // console.log(name, value);

        setFormData({ ...formData, [name]: value });
    }

    //Form Submit Function -  Used in the submit button
    const handleSubmit = (e) => {
        // const element = document.getElementById('country');
        let validateID = validationRules();
        console.log(validateID)
        if (validateID === 1) {
            e.preventDefault();
            requestOTP();
            localStorage.setItem('email', formData.email)
            localStorage.setItem('password', formData.password)
        }
        else if (validateID === 2) {
            e.preventDefault();
            window.alert("Check if entered Email is valid.")
            console.log("Hello mf")
            // navigate('/signup',Element= <Signup/>);
        }
        else if (validateID === 3) {
            e.preventDefault();
            window.alert("Minimum Password length should be 6.")
            // navigate("/signup");
        }
    }

    //OTP Request Function -  Used to call Fireauth Defined Function after Invisible ReCaptcha
    const requestOTP = () => {
        otp_verification(formData.contactNumber);// Passes the contact number collected in the form in signup
    }

    //Country Code Use State
    const [countrycode, setcountrycode] = useState('');

    const validateEmail = (email) => {
        if (String(email)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            )) return true;
        else return false;
    };

    const validatePassword = (password) => {
        if (String(password).length > 6) return true;
        else return false;

    }

    function validationRules() {
        if (validateEmail(formData.email) && validatePassword(formData.password)) return 1;
        if (!validateEmail(formData.email)) return 2;
        if (!validatePassword(formData.password)) return 3;
    }



    return (
        <>
            <div className="ls_Signupmain">

                {/* <div className="ls_upper"
                    style={{
                        width: '100vw',
                        overflow: "auto",
                        backgroundColor: '#0089ED',
                    }}> */}

                <div className="ls_Signupshowcase-top">
                    <img src={logo} alt="MIT Logo" />
                </div>

                {/* <div className="ls_group63"
                        style={{
                            padding: '2% 3% 0% 3%',
                            color: 'white',
                        }}>

                        <h1>Sign Up to</h1>
                        <h4>MIT-WPU Verification System</h4>
                        <p style={{
                            width: '45%',
                            fontSize: '13px'
                        }}>University-side document verification is integral to every student's future academic and professional ventures as it acts as a prerequisite by company or institute-based verification agencies for confirming the authenticity of details submitted by the student with regards to their academic program, CGPA course etc.</p>
                    </div> */}
                {/* </div> */}

                <div className="ls_signupCard">

                    <Card className='ls_card'>
                        <Card.Body>
                            <Card.Title className="ls_Sgnpcardtitle"><h1>Sign Up</h1>
                            </Card.Title>

                            <Form className='signupForm' noValidate>
                                <Form.Group className="ls_Sgnpemailgroup" controlId="formBasicEmail">

                                    {/* <Form.Label>Enter your Email Address</Form.Label> */}
                                    <br />
                                    <input placeholder="Email Address" type="email" name="email" id="email" onChange={handleinput} value={formData.email}

                                        style={{
                                            width: '95%',
                                            paddingTop: '13px',
                                            paddingBottom: '13px',
                                            paddingLeft: "4%",
                                            marginTop: '-3%',
                                            borderRadius: '7px',
                                            backgroundColor: 'transparent',
                                            borderColor: 'white',
                                            borderWidth: '1.5px'

                                        }
                                        } required />


                                </Form.Group>

                                <Form.Group className='ls_Sgnpcompany'>
                                    <div className="company" style={{
                                        width: '50%'
                                    }}>
                                        {/* <Form.Label>Company /Agency</Form.Label> */}
                                        <input className="ls_Sgnpcompanyinput" placeholder="Company/Agency" type="text" name="companyName" id="conpmayName" onChange={handleinput} value={formData.companyName}
                                            style={{

                                            }}
                                        />
                                    </div>

                                    <div className="contact" style={{
                                        width: '60%'
                                    }} >
                                        {/* <Form.Label>Contact Number</Form.Label> */}
                                        <div className="ls_Sgnpcontact">

                                            {/* Country Code Values */}
                                            <select className="ls_Sgnpcontactselect" id="country_list" name="contactNumber" value={countrycode} onChange={(e) => { setcountrycode(e.target.value); handleinput(e); }}>
                                                <option value="" hidden>Select Country</option>
                                                <option data-countrycode="AF" value="+93">Afghanistan (+93)</option>
                                                <option data-countrycode="AL" value="+355">Albania (+355)</option>
                                                <option data-countrycode="DZ" value="+213">Algeria (+213)</option>
                                                <option data-countrycode="AS" value="+1684">American Samoa (+1684)</option>
                                                <option data-countrycode="AD" value="+376">Andorra (+376)</option>
                                                <option data-countrycode="AO" value="+244">Angola (+244)</option>
                                                <option data-countrycode="AI" value="+1264">Anguilla (+1264)</option>
                                                <option data-countrycode="AQ" value="+672">Antartica (+672)</option>
                                                <option data-countrycode="AG" value="+1268">Antigua &amp; Barbuda (+1268)</option>
                                                <option data-countrycode="AR" value="+54">Argentina (+54)</option>
                                                <option data-countrycode="AM" value="+374">Armenia (+374)</option>
                                                <option data-countrycode="AW" value="+297">Aruba (+297)</option>
                                                <option data-countrycode="AU" value="+61">Australia (+61)</option>
                                                <option data-countrycode="AT" value="+43">Austria (+43)</option>
                                                <option data-countrycode="AZ" value="+994">Azerbaijan (+994)</option>
                                                <option data-countrycode="BS" value="+1242">Bahamas (+1242)</option>
                                                <option data-countrycode="BH" value="+973">Bahrain (+973)</option>
                                                <option data-countrycode="BD" value="+880">Bangladesh (+880)</option>
                                                <option data-countrycode="BB" value="+1246">Barbados (+1246)</option>
                                                <option data-countrycode="BY" value="+375">Belarus (+375)</option>
                                                <option data-countrycode="BE" value="+32">Belgium (+32)</option>
                                                <option data-countrycode="BZ" value="+501">Belize (+501)</option>
                                                <option data-countrycode="BJ" value="+229">Benin (+229)</option>
                                                <option data-countrycode="BM" value="+1441">Bermuda (+1441)</option>
                                                <option data-countrycode="BT" value="+975">Bhutan (+975)</option>
                                                <option data-countrycode="BO" value="+591">Bolivia (+591)</option>
                                                <option data-countrycode="BA" value="+387">Bosnia &amp; Herzegovina (+387)</option>
                                                <option data-countrycode="BW" value="+267">Botswana (+267)</option>
                                                <option data-countrycode="BR" value="+55">Brazil (+55)</option>
                                                <option data-countrycode="IO" value="+246">British India Ocean Terrirory (+246)</option>
                                                <option data-countrycode="VG" value="+1284">British Virgin Islands (+1284)</option>
                                                <option data-countrycode="BN" value="+673">Brunei (+673)</option>
                                                <option data-countrycode="BG" value="+359">Bulgaria (+359)</option>
                                                <option data-countrycode="BF" value="+226">Burkina Faso (+226)</option>
                                                <option data-countrycode="BI" value="+257">Burundi (+257)</option>
                                                <option data-countrycode="KH" value="+855">Cambodia (+855)</option>
                                                <option data-countrycode="CM" value="+237">Cameroon (+237)</option>
                                                <option data-countrycode="CA" value="+1">Canada (+1)</option>
                                                <option data-countrycode="CV" value="+238">Cape Verde Islands (+238)</option>
                                                <option data-countrycode="KY" value="+1345">Cayman Islands (+1345)</option>
                                                <option data-countrycode="CF" value="+236">Central African Republic (+236)</option>
                                                <option data-countrycode="TD" value="+235">Chad (+235)</option>
                                                <option data-countrycode="CL" value="+56">Chile (+56)</option>
                                                <option data-countrycode="CN" value="+86">China (+86)</option>
                                                <option data-countrycode="CX" value="+61">Christmas Island (+61)</option>
                                                <option data-countrycode="CC" value="+61">Cocos Islands (+61)</option>
                                                <option data-countrycode="CO" value="+57">Colombia (+57)</option>
                                                <option data-countrycode="KM" value="+269">Comoros (+269)</option>
                                                <option data-countrycode="CK" value="+682">Cook Islands (+682)</option>
                                                <option data-countrycode="CR" value="+506">Costa Rica (+506)</option>
                                                <option data-countrycode="HR" value="+385">Croatia (+385)</option>
                                                <option data-countrycode="CU" value="+53">Cuba (+53)</option>
                                                <option data-countrycode="CW" value="+599">Curacao (+599)</option>
                                                <option data-countrycode="CY" value="+90">Cyprus - North (+90)</option>
                                                <option data-countrycode="CY" value="+357">Cyprus - South (+357)</option>
                                                <option data-countrycode="CZ" value="+420">Czech Republic (+420)</option>
                                                <option data-countrycode="CD" value="+243">Democratic Republic of Congo (+243)</option>
                                                <option data-countrycode="DK" value="+45">Denmark (+45)</option>
                                                <option data-countrycode="DJ" value="+253">Djibouti (+253)</option>
                                                <option data-countrycode="DM" value="+1809">Dominica (+1809)</option>
                                                <option data-countrycode="DO" value="+1809">Dominican Republic (+1809)</option>
                                                <option data-countrycode="TL" value="+670">East Timor (+670)</option>
                                                <option data-countrycode="EC" value="+593">Ecuador (+593)</option>
                                                <option data-countrycode="EG" value="+20">Egypt (+20)</option>
                                                <option data-countrycode="SV" value="+503">El Salvador (+503)</option>
                                                <option data-countrycode="GQ" value="+240">Equatorial Guinea (+240)</option>
                                                <option data-countrycode="ER" value="+291">Eritrea (+291)</option>
                                                <option data-countrycode="EE" value="+372">Estonia (+372)</option>
                                                <option data-countrycode="ET" value="+251">Ethiopia (+251)</option>
                                                <option data-countrycode="FK" value="+500">Falkland Islands (+500)</option>
                                                <option data-countrycode="FO" value="+298">Faroe Islands (+298)</option>
                                                <option data-countrycode="FJ" value="+679">Fiji (+679)</option>
                                                <option data-countrycode="FI" value="+358">Finland (+358)</option>
                                                <option data-countrycode="FR" value="+33">France (+33)</option>
                                                <option data-countrycode="GF" value="+594">French Guiana (+594)</option>
                                                <option data-countrycode="PF" value="+689">French Polynesia (+689)</option>
                                                <option data-countrycode="GA" value="+241">Gabon (+241)</option>
                                                <option data-countrycode="GM" value="+220">Gambia (+220)</option>
                                                <option data-countrycode="GE" value="+7880">Georgia (+7880)</option>
                                                <option data-countrycode="DE" value="+49">Germany (+49)</option>
                                                <option data-countrycode="GH" value="+233">Ghana (+233)</option>
                                                <option data-countrycode="GI" value="+350">Gibraltar (+350)</option>
                                                <option data-countrycode="GR" value="+30">Greece (+30)</option>
                                                <option data-countrycode="GL" value="+299">Greenland (+299)</option>
                                                <option data-countrycode="GD" value="+1473">Grenada (+1473)</option>
                                                <option data-countrycode="GP" value="+590">Guadeloupe (+590)</option>
                                                <option data-countrycode="GU" value="+671">Guam (+671)</option>
                                                <option data-countrycode="GT" value="+502">Guatemala (+502)</option>
                                                <option data-countrycode="GG" value="+44">Guernsey (+44)</option>
                                                <option data-countrycode="GN" value="+224">Guinea (+224)</option>
                                                <option data-countrycode="GW" value="+245">Guinea-Bissau (+245)</option>
                                                <option data-countrycode="GY" value="+592">Guyana (+592)</option>
                                                <option data-countrycode="HT" value="+509">Haiti (+509)</option>
                                                <option data-countrycode="HN" value="+504">Honduras (+504)</option>
                                                <option data-countrycode="HK" value="+852">Hong Kong (+852)</option>
                                                <option data-countrycode="HU" value="+36">Hungary (+36)</option>
                                                <option data-countrycode="IS" value="+354">Iceland (+354)</option>
                                                <option data-countrycode="IN" value="+91">India (+91)</option>
                                                <option data-countrycode="ID" value="+62">Indonesia (+62)</option>
                                                <option data-countrycode="IR" value="+98">Iran (+98)</option>
                                                <option data-countrycode="IQ" value="+964">Iraq (+964)</option>
                                                <option data-countrycode="IE" value="+353">Ireland (+353)</option>
                                                <option data-countrycode="IM" value="+44">Isle of Man (+44)</option>
                                                <option data-countrycode="IL" value="+972">Israel (+972)</option>
                                                <option data-countrycode="IT" value="+39">Italy (+39)</option>
                                                <option data-countrycode="CI" value="+225">Ivory Coast (+225)</option>
                                                <option data-countrycode="JM" value="+1876">Jamaica (+1876)</option>
                                                <option data-countrycode="JP" value="+81">Japan (+81)</option>
                                                <option data-countrycode="JE" value="+44">Jersey (+44)</option>
                                                <option data-countrycode="JO" value="+962">Jordan (+962)</option>
                                                <option data-countrycode="KZ" value="+7">Kazakhstan (+7)</option>
                                                <option data-countrycode="KE" value="+254">Kenya (+254)</option>
                                                <option data-countrycode="KI" value="+686">Kiribati (+686)</option>
                                                <option data-countrycode="XK" value="+383">Kosovo (+383)</option>
                                                <option data-countrycode="KW" value="+965">Kuwait (+965)</option>
                                                <option data-countrycode="KG" value="+996">Kyrgyzstan (+996)</option>
                                                <option data-countrycode="LA" value="+856">Laos (+856)</option>
                                                <option data-countrycode="LV" value="+371">Latvia (+371)</option>
                                                <option data-countrycode="LB" value="+961">Lebanon (+961)</option>
                                                <option data-countrycode="LS" value="+266">Lesotho (+266)</option>
                                                <option data-countrycode="LR" value="+231">Liberia (+231)</option>
                                                <option data-countrycode="LY" value="+218">Libya (+218)</option>
                                                <option data-countrycode="LI" value="+417">Liechtenstein (+417)</option>
                                                <option data-countrycode="LT" value="+370">Lithuania (+370)</option>
                                                <option data-countrycode="LU" value="+352">Luxembourg (+352)</option>
                                                <option data-countrycode="MO" value="+853">Macao (+853)</option>
                                                <option data-countrycode="MK" value="+389">Macedonia (+389)</option>
                                                <option data-countrycode="MG" value="+261">Madagascar (+261)</option>
                                                <option data-countrycode="MW" value="+265">Malawi (+265)</option>
                                                <option data-countrycode="MY" value="+60">Malaysia (+60)</option>
                                                <option data-countrycode="MV" value="+960">Maldives (+960)</option>
                                                <option data-countrycode="ML" value="+223">Mali (+223)</option>
                                                <option data-countrycode="MT" value="+356">Malta (+356)</option>
                                                <option data-countrycode="MH" value="+692">Marshall Islands (+692)</option>
                                                <option data-countrycode="MQ" value="+596">Martinique (+596)</option>
                                                <option data-countrycode="MR" value="+222">Mauritania (+222)</option>
                                                <option data-countrycode="YT" value="+269">Mayotte (+269)</option>
                                                <option data-countrycode="MX" value="+52">Mexico (+52)</option>
                                                <option data-countrycode="FM" value="+691">Micronesia (+691)</option>
                                                <option data-countrycode="MD" value="+373">Moldova (+373)</option>
                                                <option data-countrycode="MC" value="+377">Monaco (+377)</option>
                                                <option data-countrycode="MN" value="+976">Mongolia (+976)</option>
                                                <option data-countrycode="ME" value="+382">Montengro (+382)</option>
                                                <option data-countrycode="MS" value="+1664">Montserrat (+1664)</option>
                                                <option data-countrycode="MA" value="+212">Morocco (+212)</option>
                                                <option data-countrycode="MZ" value="+258">Mozambique (+258)</option>
                                                <option data-countrycode="MN" value="+95">Myanmar (+95)</option>
                                                <option data-countrycode="NA" value="+264">Namibia (+264)</option>
                                                <option data-countrycode="NR" value="+674">Nauru (+674)</option>
                                                <option data-countrycode="NP" value="+977">Nepal (+977)</option>
                                                <option data-countrycode="NL" value="+31">Netherlands (+31)</option>
                                                <option data-countrycode="AN" value="+599">Netherlands Antilles (+599)</option>
                                                <option data-countrycode="NC" value="+687">New Caledonia (+687)</option>
                                                <option data-countrycode="NZ" value="+64">New Zealand (+64)</option>
                                                <option data-countrycode="NI" value="+505">Nicaragua (+505)</option>
                                                <option data-countrycode="NE" value="+227">Niger (+227)</option>
                                                <option data-countrycode="NG" value="+234">Nigeria (+234)</option>
                                                <option data-countrycode="NU" value="+683">Niue (+683)</option>
                                                <option data-countrycode="KP" value="+850">North Korea (+850)</option>
                                                <option data-countrycode="NF" value="+672">Norfolk Islands (+672)</option>
                                                <option data-countrycode="NP" value="+670">Northern Marianas (+670)</option>
                                                <option data-countrycode="NO" value="+47">Norway (+47)</option>
                                                <option data-countrycode="OM" value="+968">Oman (+968)</option>
                                                <option data-countrycode="PK" value="+92">Pakistan (+92)</option>
                                                <option data-countrycode="PW" value="+680">Palau (+680)</option>
                                                <option data-countrycode="PS" value="+970">Palestine (+970)</option>
                                                <option data-countrycode="PA" value="+507">Panama (+507)</option>
                                                <option data-countrycode="PG" value="+675">Papua New Guinea (+675)</option>
                                                <option data-countrycode="PY" value="+595">Paraguay (+595)</option>
                                                <option data-countrycode="PE" value="+51">Peru (+51)</option>
                                                <option data-countrycode="PH" value="+63">Philippines (+63)</option>
                                                <option data-countrycode="PN" value="+64">Pitcairn (+64)</option>
                                                <option data-countrycode="PL" value="+48">Poland (+48)</option>
                                                <option data-countrycode="PT" value="+351">Portugal (+351)</option>
                                                <option data-countrycode="PR" value="+1787">Puerto Rico (+1787)</option>
                                                <option data-countrycode="QA" value="+974">Qatar (+974)</option>
                                                <option data-countrycode="CG" value="+242">Republic of the Congo (+242)</option>
                                                <option data-countrycode="RE" value="+262">Reunion (+262)</option>
                                                <option data-countrycode="RO" value="+40">Romania (+40)</option>
                                                <option data-countrycode="RU" value="+7">Russia (+7)</option>
                                                <option data-countrycode="RW" value="+250">Rwanda (+250)</option>
                                                <option data-countrycode="BL" value="+590">Saint Barthelemy (+590)</option>
                                                <option data-countrycode="SH" value="+290">Saint Helena (+290)</option>
                                                <option data-countrycode="KN" value="+1869">Saint Kitts &amp; Nevis (+1869)</option>
                                                <option data-countrycode="SC" value="+1758">Saint Lucia (+1758)</option>
                                                <option data-countrycode="SR" value="+597">Suriname (+597)</option>
                                                <option data-countrycode="MF" value="+590">Saint Martin (+590)</option>
                                                <option data-countrycode="PM" value="+508">Saint Saint Pierre and Miquelon (+508)</option>
                                                <option data-countrycode="VC" value="+1784">Saint Vincent and the Grenadines (+1784)</option>
                                                <option data-countrycode="WS" value="+685">Samoa (+685)</option>
                                                <option data-countrycode="SM" value="+378">San Marino (+378)</option>
                                                <option data-countrycode="ST" value="+239">Sao Tome &amp; Principe (+239)</option>
                                                <option data-countrycode="SA" value="+966">Saudi Arabia (+966)</option>
                                                <option data-countrycode="SN" value="+221">Senegal (+221)</option>
                                                <option data-countrycode="CS" value="+381">Serbia (+381)</option>
                                                <option data-countrycode="SC" value="+248">Seychelles (+248)</option>
                                                <option data-countrycode="SL" value="+232">Sierra Leone (+232)</option>
                                                <option data-countrycode="SG" value="+65">Singapore (+65)</option>
                                                <option data-countrycode="SX" value="+1721">Sint Maarten (+1721)</option>
                                                <option data-countrycode="SK" value="+421">Slovakia (+421)</option>
                                                <option data-countrycode="SI" value="+386">Slovenia (+386)</option>
                                                <option data-countrycode="SB" value="+677">Solomon Islands (+677)</option>
                                                <option data-countrycode="SO" value="+252">Somalia (+252)</option>
                                                <option data-countrycode="ZA" value="+27">South Africa (+27)</option>
                                                <option data-countrycode="KR" value="+82">South Korea (+82)</option>
                                                <option data-countrycode="SS" value="+211">South Sudan (+211)</option>
                                                <option data-countrycode="ES" value="+34">Spain (+34)</option>
                                                <option data-countrycode="LK" value="+94">Sri Lanka (+94)</option>
                                                <option data-countrycode="SD" value="+249">Sudan (+249)</option>
                                                <option data-countrycode="SR" value="+597">Suriname (+597)</option>
                                                <option data-countrycode="SJ" value="+47">Svalbard &amp; Jan Mayen (+47)</option>
                                                <option data-countrycode="SZ" value="+268">Swaziland (+268)</option>
                                                <option data-countrycode="SE" value="+46">Sweden (+46)</option>
                                                <option data-countrycode="CH" value="+41">Switzerland (+41)</option>
                                                <option data-countrycode="SY" value="+963">Syria (+963)</option>
                                                <option data-countrycode="TW" value="+886">Taiwan (+886)</option>
                                                <option data-countrycode="TJ" value="+992">Tajikistan (+992)</option>
                                                <option data-countrycode="TZ" value="+255">Tanzania (+255)</option>
                                                <option data-countrycode="TH" value="+66">Thailand (+66)</option>
                                                <option data-countrycode="TG" value="+228">Togo (+228)</option>
                                                <option data-countrycode="TO" value="+676">Tonga (+676)</option>
                                                <option data-countrycode="TT" value="+1868">Trinidad &amp; Tobago (+1868)</option>
                                                <option data-countrycode="TN" value="+216">Tunisia (+216)</option>
                                                <option data-countrycode="TR" value="+90">Turkey (+90)</option>
                                                <option data-countrycode="TM" value="+993">Turkmenistan (+993)</option>
                                                <option data-countrycode="TC" value="+1649">Turks &amp; Caicos Islands (+1649)</option>
                                                <option data-countrycode="TV" value="+688">Tuvalu (+688)</option>
                                                <option data-countrycode="UG" value="+256">Uganda (+256)</option>
                                                <option data-countrycode="UA" value="+380">Ukraine (+380)</option>
                                                <option data-countrycode="AE" value="+971">United Arab Emirates (+971)</option>
                                                <option data-countrycode="GB" value="+44">United Kingdom (+44)</option>
                                                <option data-countrycode="US" value="+1">United States (+1)</option>
                                                <option data-countrycode="UY" value="+598">Uruguay (+598)</option>
                                                <option data-countrycode="UZ" value="+998">Uzbekistan (+998)</option>
                                                <option data-countrycode="VU" value="+678">Vanuatu (+678)</option>
                                                <option data-countrycode="VA" value="+379">Vatican City (+379)</option>
                                                <option data-countrycode="VE" value="+58">Venezuela (+58)</option>
                                                <option data-countrycode="VN" value="+84">Vietnam (+84)</option>
                                                <option data-countrycode="WF" value="+681">Wallis &amp; Futuna (+681)</option>
                                                <option data-countrycode="YE" value="+969">Yemen (North)(+969)</option>
                                                <option data-countrycode="YE" value="+967">Yemen (South)(+967)</option>
                                                <option data-countrycode="ZM" value="+260">Zambia (+260)</option>
                                                <option data-countrycode="ZW" value="+263">Zimbabwe (+263)</option>
                                            </select>

                                            <input className="ls_Sgnpcontactinput" placeholder="Add Country Code" type="text" name="contactNumber" id="contactNumber" onChange={handleinput} value={formData.contactNumber} />
                                        </div>
                                    </div>

                                </Form.Group>

                                <Form.Group className="ls_SgnpPaswdGroup" controlId="formBasicPassword">
                                    {/* <Form.Label>Enter your Password</Form.Label> */}
                                    <br />
                                    <input className='lsSgnppasswdInput' id="password" type="password" placeholder="Password" name="password" onChange={handleinput} value={formData.password} />
                                </Form.Group>

                                <Button onClick={handleSubmit} id="sign-in-button" variant="primary" type="submit" style={{
                                    padding: '3% 2% 3% 3%',
                                    marginLeft: '3%',
                                    width: '90%',
                                    backgroundColor: '#0089ED',
                                    border: 'none',
                                    borderRadius: '7px',
                                    color: 'white',
                                    fontSize: '15px',
                                }}>
                                    Sign Up
                                </Button>

                                <Form.Group className="Singuplink"
                                    style={{
                                        marginTop: '5%',
                                        marginBottom: '5%',
                                        width: '100%',
                                        textAlign: 'center'
                                    }}>
                                    <Form.Label style={{ color: 'white' }}>Already have an Account? <a href="/login" style={{
                                        textDecoration: 'none',color:"rgb(0, 137, 237)",fontWeight:"bold"
                                    }}>SignIn</a></Form.Label>
                                </Form.Group>


                            </Form>

                        </Card.Body>
                    </Card>
                </div>

                {/* <div className="SigninAs"
                    style={{
                        marginTop: '5%',
                        marginLeft: '8%',
                        height: '50%',
                        width: '40%',
                    }}>
                    <div className='heading'>
                        <span style={{
                            padding: '3%',
                            fontSize: '120%'
                        }}>Sign Up as</span>
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
                </div> */}
            </div>
            <div className="ls_bottomnav">
                <div className="ls_siteName">
                    MIT-WPU Verification System :
                </div>
                <div className="ls_scrollingcontent">
                    <marquee direction="left">University-side document verification is integral to every student's future academic and professional ventures as it  confirms the authenticity of details submitted by the student with regards to their academic program, CGPA course etc.</marquee>
                </div>
            </div>
        </>
    )
}

export { clickFunctionSignup }