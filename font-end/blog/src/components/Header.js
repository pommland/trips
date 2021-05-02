import '../styles/headerStyles.css'
import React from 'react'
import { Link } from 'react-router-dom';
function Header() {
    return (
        <div className='header'>
            <a className='logo'>Trips</a>
            <div className='header-right'>
                <a className='menu'>Home</a>
                <div className ='v1'></div>
                <a className='menu'>About us</a>
                <div className ='v1'></div>
                <Link to ='/allblog' className='menu'>Blog</Link>
                <div className ='v1'></div>
                <a className='menu'>Contacts</a>
                <div className ='v1'></div>
                <button className='btn'>Log in | Register</button>
            </div >

        </div>
    )
}

export default Header
