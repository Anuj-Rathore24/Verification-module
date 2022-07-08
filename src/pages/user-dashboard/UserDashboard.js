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
       <button href="/#/form">Submit a query</button>
       <button href="/#/" >Help Centre</button>
     </div>
     <ContainerItem/>
     </div>
  </div>
      )
}

export default user