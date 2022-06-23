import React, {useState, useEffect} from 'react'
import "../styles/Navbar.css"
import logo from "./images/logo.svg"
import menu from "./images/menu.svg"

export default function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false)
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)


  const toggleNav = () => {
    setToggleMenu(!toggleMenu)
  }

  useEffect(() => {

    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    }

    window.addEventListener('resize', changeWidth)

    return () => {
        window.removeEventListener('resize', changeWidth)
    }

  }, [])

  return (
    <nav>
      {(toggleMenu || screenWidth > 500) && (
      <ul className="list">
      <li className="logo"><img src={logo} alt="" /></li> 
      <li className="items">Dashboard</li>
      <li className="items">Payement</li>
      <li className="items">Form</li>

    </ul>
      )}

      <button onClick={toggleNav} className="btn"><img src={menu} alt="" /></button>
    </nav>
  )
}