import React from 'react'
import ContainerItem from './UserContainerItem'
import Topbar from './UserTopbar'
import "../../styles/UserDashboard.css";

function user ()  {
  return (
    <div>
    <Topbar/>
    <div className='main'>
    <div className='user-info-label'>
      <div className='info-d1'> </div>
      <div className='info-d2'> </div>
     </div>
     <div className = 'options'>
       <a href="/">Upload Documents</a>
       <a href="/">Review Documents</a>
       <a href="/">Raise a Ticket</a>
       <a href="/">Help Centre</a>
     </div>
     <ContainerItem/>
     </div>
 
  </div>
      )
}

export default user