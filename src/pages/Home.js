import React from 'react'
const axios=require("axios")


const admin = () => {

  function submitButton(para){
      axios.get("/sendMail",{
        params:{message:para},
      }).then((res)=>{
        console.log(res)
      })
  }
  return (

    <>
    <button onClick={()=>{
      submitButton("Working Bitch")
      
      }}>Click Here</button>
    <div><h1>Home</h1></div>  
    </>
    
    )
}

export default admin