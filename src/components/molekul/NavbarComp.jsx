import React from 'react'

const NavbarComp = () => {
    return (
        <div className='NavbarComp'>
            <div className="navContainer">
                <div className='logo'>Rivo<span>Travel</span> </div>
                <div className="navItems">
                    <button className="navButton">Register</button>
                    <button className="navButton">Login</button>
                </div>
            </div>
        </div>
    )
}

export default NavbarComp