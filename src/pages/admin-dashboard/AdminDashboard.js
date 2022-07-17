import React from 'react'
import ContainerItem from "./ContainerItem"
import "./../../styles/AdminDashboard.css";
import Topbar from "./AdminTopbar"
//import Footer from "./../Footer.js"

function user ()  {
  return (
     <div>
         <Topbar/>
      <div className='ad_main'>
    <div className='info-label'>
      <div className='d1'> </div>
      <div className='d2'> </div>
     </div>
      <ContainerItem/>
     </div>
     {/* <Footer/> */}
  </div> 
      )
}

export default user