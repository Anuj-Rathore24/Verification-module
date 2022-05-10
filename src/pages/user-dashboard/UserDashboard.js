import React from 'react'

import "./../../styles/UserDashboard.css";
import MitWpuLogo from "../../pages/user-dashboard/images/MIT-WPU-Logo.png";
import image from "../../pages/user-dashboard/images/img_avatar.png";

function user ()  {
  return (
      <div className="topbar">
    <div className="topbarWrapper">
      <div className="topLeft">
        <img src={MitWpuLogo} alt="MIT-WPU-Logo" width={90} height={80}/>
      </div>
      <div className="topRight">
      <div class="admin_info">
                <img class = 'avatar' src ={image} alt="profilePicture" height={90} width={90}/>
                <div class = 'details'>
                  
                  <h3 id="admin_name" >
                      Your Name
                  </h3>
                  <h4 id="admin_mail ">
                      xyz@mitwpu.edu.in
                  </h4>
                </div>
                
            </div>
        </div>
    </div>
    <div class='dashboard'>
      <h2 class='heading'>Dashboard</h2>
     </div>
     <div class = 'options'>
       <a href="/">Upload Documents</a>
       <a href="/">Review Documents</a>
       <a href="/">Raise a Ticket</a>
       <a href="/">Help Centre</a>
     </div>
     <div class = 'container'>

     </div>
  </div> 
      )
}

export default user