import React from 'react'
import { PageStatus } from './State'


function Home() {
  PageStatus.pageStatus = false;
  return (
    <div><h1>HOME</h1></div>
  )
}

export default Home