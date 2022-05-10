import React from "react";
import "./../../styles/AdminDashboard.css";
import MitWpuLogo from "../../pages/admin-dashboard/images/MIT-WPU-Logo.png";
import profilePicture from "../../pages/admin-dashboard/images/profilepic-modified.png";

function UserQuery() {
    return (
        <content>
            <div className="outer_box">

            </div>
            <div className="inner_white_1">
            <h4 className="studentQueryTitle">Student Query - 1</h4>
            </div>

            <div className="inner_white_2">
            <h4 className="studentQueryTitle">Student Query - 2</h4>
            </div>

            <div className="inner_white_3">
            <h4 className="studentQueryTitle">Student Query - 3</h4>
            </div>
        <div className="inner_blue_content">
        <h4 className="queryOne">Query-Example 1</h4>
        <h4 className="queryTwo">Query-Example 1</h4>
        <h4 className="queryThree">Query-Example 1</h4>
        </div>

        <div className="inner_white_content_1">
        <h4 className="queryOne">Query-Example 2</h4>
        <h4 className="queryTwo">Query-Example 2</h4>
        <h4 className="queryThree">Query-Example 2</h4>
        </div>

        <div className="inner_offwhite_1">
        <h4 className="queryOne">Query-Example 3</h4>
        <h4 className="queryTwo">Query-Example 3</h4>
        <h4 className="queryThree">Query-Example 3</h4>
        </div>

        <div className="inner_white_content_2">
        <h4 className="queryOne">Query-Example 4</h4>
        <h4 className="queryTwo">Query-Example 4</h4>
        <h4 className="queryThree">Query-Example 4</h4>
        </div>
        
        <div className="inner_offwhite_2">
        <h4 className="queryOne">Query-Example 5</h4>
        <h4 className="queryTwo">Query-Example 5</h4>
        <h4 className="queryThree">Query-Example 5</h4>
        </div>

        <div>

        </div>
        </content>
    )
} 

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
        <UserQuery />
       
    </content>

    <div class="pane">

    </div>

        </div>
    );
}

export default dashboard;