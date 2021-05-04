import React,{useState , useEffect} from 'react'
import { Link } from 'react-router-dom';
import {isAuth} from '../helpers/auth';
function Header() {
    
    // const [isLoggedIn, setisLoggedIn] = useState(
    //     true
    // );
    // const [isLoggedIn_user, setisLoggedIn_user] = useState(false);
    // const [isLoggedIn_host, setisLoggedIn_host] = useState(false);

    var message ="LOGIN | SIGNUP";
    if(isAuth()){
        message = isAuth().username;
    }
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
                        
                        {/* <li class="nav-item">
                           
                                <a class="nav-link page-scroll" href="/#popblog">BLOG</a>
           
                        </li> */}
                        <li class="nav-item">
                            <Link to="/Allblog">
                                <a class="nav-link page-scroll" href="#headerblog">BLOG</a>
                            </Link>
                        </li>

                        <li class="nav-item">
                            <a class="nav-link page-scroll" href="/#about">ABOUT</a>
                        </li>
                    </ul>
                    {isAuth()? (
                        <Link to="/Acount/Information">
                        <a class="btn-solid-lg page-scroll">
                                {message}
                        </a>
                        </Link>
                    ):(
                    <Link to="/Login">
                    <a class="btn-solid-lg page-scroll">
                            {message}
                    </a>
                    </Link>)}
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
