import React from 'react'

import { Link } from 'react-router-dom';
function NavUser() {
    return (
        <>
             {/* <!-- Navbar --> */}
             <nav class="navbar navbar-expand-md navbar-dark navbar-custom fixed-top">

                
{/* <!-- Mobile Menu Toggle Button --> */}
<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-awesome fas fa-bars"></span>
    <span class="navbar-toggler-awesome fas fa-times"></span>
</button>
{/* <!-- end of mobile menu toggle button --> */}

<div class="collapse navbar-collapse" id="navbarsExampleDefault">
    <ul class="navbar-nav ml-auto">
        <li class="nav-item">
            <a class="nav-link page-scroll" href="/">HOME <span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item">
            <a class="nav-link page-scroll" href="/#intro">INTRO</a>
        </li>
        <li class="nav-item">
            <a class="nav-link page-scroll" href="/#member">MEMBERS</a>
        </li>
        
        <li class="nav-item">
           
                <a class="nav-link page-scroll" href="/#popblog">BLOG</a>

        </li>
        <li class="nav-item">
            <Link to="/Allblog">
                <a class="nav-link page-scroll" href="#headerblog">BLOG link</a>
            </Link>
        </li>

        <li class="nav-item">
            <a class="nav-link page-scroll" href="/#about">ABOUT</a>
        </li>
    </ul>
    <Link to="/Account">
    <a class="btn-solid-lg page-scroll">
            Account
    </a>
    </Link>
</div>
</nav> 
{/* <!-- end of navbar --> */}           
        </>
    )
}

export default NavUser
