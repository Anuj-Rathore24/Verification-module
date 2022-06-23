import React from 'react'
import MitWpuLogo from "./images/logo.svg";
import image from "../images/admin.svg";

function AdminTopbar() {
    return (
        <div>
            <div className="topbar">
                <div className="topbarWrap">
                    <div className="topLeft">
                        <img className='logo' src={MitWpuLogo} alt="MIT-WPU-Logo" />
                    </div>
                    <div className="topRight">
                        <div class="admin_info">
                            <img className='avatar' src={image} alt="profilePicture" />
                            <div className='details'>

                                <h3 id="admin_name" >
                                    Your Name
                                </h3>
                                <h4 id="admin_mail ">
                                    Youremail@domainName
                                </h4>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminTopbar
