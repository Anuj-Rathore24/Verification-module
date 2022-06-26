import React from 'react'

//changed class to className
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
      <div className="admin_info">
                <img className = 'avatar' src ={image} alt="profilePicture" height={90} width={90}/>
                <div className = 'details'>
                  
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
    <div className='dashboard'>
      <h2 className='heading'>Dashboard</h2>
     </div>
     <div className = 'options'>
       <a href="/">Upload Documents</a>
       <a href="/">Review Documents</a>
       <a href="/">Raise a Ticket</a>
       <a href="/">Help Centre</a>
     </div>
     <div className = 'container'>

     </div>
  </div> 
      )
}

export default user