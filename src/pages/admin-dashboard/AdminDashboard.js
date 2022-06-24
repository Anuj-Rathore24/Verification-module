import React from 'react'
import ContainerItem from "./ContainerItem"
import "./../../styles/AdminDashboard.css";
import Topbar from "./AdminTopbar"
//import Footer from "./../Footer.js"

function user ()  {
  return (
     <div>
         <Topbar/>
      <div className='main'>
    <div className='info-label'>
      <div className='d1'>
     </div>
     </div>
      <ContainerItem/>
     </div>
     {/* <Footer/> */}
  </div> 
      )
}

export default user