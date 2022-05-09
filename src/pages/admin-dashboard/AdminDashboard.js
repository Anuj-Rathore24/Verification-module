import React from "react";
import "./../../styles/AdminDashboard.css";
import MitWpuLogo from "../../pages/admin-dashboard/images/MIT-WPU-Logo.png";
import profilePicture from "../../pages/admin-dashboard/images/profilepic-modified.png";

function dashboard() {
    return (
        <div>


        <h1 className="hello">HELLO</h1>
        <div className="WpuLogo">
            <img src={MitWpuLogo} alt="MIT-WPU-Logo" width={90} height={80} />
        </div>
        <div className="profilePicture">
            <img src={profilePicture} alt="profilePicture" height={100} width={100} />
        </div>
        <div className="adminInfo">
            <h3>Admin Name</h3>
            <h3>xyz@mitwpu.edu.in</h3>        
        </div>

        <display>
        <div className="dashboardText">
            Dashboard
        </div>
        <div className="userQuery">
            Query
        </div>
        <div className="queryBar"></div>
        <div className="blueBox">

        </div>
        <div className="white_box">

        </div>

    </display>

    <content>
        <div className="outer_box">

        </div>
        <div className="inner_white_1">

        </div>

        <div className="inner_white_2">

        </div>

        <div className="inner_white_3">
            
        </div>

        <div className="inner_blue_content">

        </div>

        <div className="inner_white_content_1">

        </div>

        <div className="inner_offwhite_1">

        </div>

        <div className="inner_white_content_2">

        </div>
        
        <div className="inner_offwhite_2">

        </div>
    </content>

    <div class="pane">

    </div>

        </div>
    );
}

export default dashboard;