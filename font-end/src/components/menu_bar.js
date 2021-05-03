import React from 'react';

function menu_bar() {

    var s = "ABC";

    return (
        <div className="menu-bar">
            <div className="menu-container">
                <div className="right-container">
                    <img className="logo" src={"/img/logo.png"} />
                </div>
                <ul className="menu">
                    <li className="menu-notLast"><a href="#">Home</a></li>
                    <li className="menu-notLast"><a href="#">About us</a></li>
                    <li className="menu-notLast"><a href="#">Blog</a></li>
                    <li><a href="#">Contacts</a></li>
                    <li className="login-button"><button href="#" onClick={()=>{}}>Account</button></li>
                </ul>
            </div>
        </div>
    )
}

export default menu_bar
