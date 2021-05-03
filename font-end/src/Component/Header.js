import React from 'react'
import { Link } from 'react-router-dom';

function Header() {
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
                            <a class="nav-link page-scroll" href="/#header">HOME <span class="sr-only">(current)</span></a>
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
                                <a class="nav-link page-scroll">BLOG link</a>
                            </Link>
                        </li>

                        <li class="nav-item">
                            <a class="nav-link page-scroll" href="/#about">ABOUT</a>
                        </li>
                    </ul>
                    <Link to="/Login">
                    <a class="btn-solid-lg page-scroll">
                            LOGIN | SIGNUP
                    </a>
                    </Link>
                </div>
            </nav> 
            {/* <!-- end of navbar --> */}


           {/* // <!-- Header --> */}
           <header id="header" class="header">
                <div class="header-content">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-12">
                                <div class="text-container">
                                    <h1>
                                        TripS, Welcome
                                    </h1>
                                    <p class="p-heading p-large">
                                        Adventure Awaits, Go Find It.
                                        เราพร้อมสนับสนุนทุกการเดินทางของคุณ
                                    </p>

                                    <a class="btn-solid-lg page-scroll" href="#create" >
                                        CREATE TRIP
                                    </a>
                                </div>
                            </div>
                        </div> 
                    </div> 
                </div> 
            </header> 
            {/* // <!-- end of header --> */}
 
        </>
    )
}

export default Header
