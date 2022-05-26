import React from 'react'
import { Link } from 'react-router-dom'

const NavbarComp = () => {
    return (
        <div className='NavbarComp'>
            <div className="navContainer">
                <Link style={{ color: 'white', fontWeight: "bold", textDecoration: 'none', fontSize: 25 }} to='/'>
                    <div >Rivo<span>Travel</span> </div>
                </Link>
                <div className="navItems">
                    <button className="navButton">Register</button>
                    <button className="navButton">Login</button>
                </div>
            </div>
        </div>
    )
}

export default NavbarComp