import React from 'react'
import { Link } from 'react-router-dom';


function WaitActivate() {
    return (
        <>
            <header id="header" class="headerwait">
                <div class="header-content">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-12">
                                <div class="text-container">
                                    <h1>
                                        TripS, Welcome
                                    </h1>
                                    <p class="p-heading p-large">
                                    Please click the activation link we sent to your email.
                                    </p>
                                    <Link to="/login">
                                    <a class="btn-solid-lg page-scroll" href="" >
                                        Back
                                    </a>
                                    </Link>
                                </div>
                            </div>
                        </div> 
                    </div> 
                </div> 
            </header> 
        </>
    )
}

export default WaitActivate
