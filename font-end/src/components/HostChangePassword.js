import React, { useState } from 'react';
import './HostChangePassword.css'
import Header from './menu_bar';
import SideBar from './HostSideBar';
// import ChangePasswordLogo from '../img/change-password-logo.png'

function HostChangePassword() {

  return (
    <div className="userPersonalInfromation">

      {/* Header */}
      <header className="menu-bar">
        <Header />
      </header>

      {/* Side Bar */}
      <SideBar />

      {/* Body */}
      <body className="page">
        <div className="change-password-layout">
            <div className="change-password-container">
                <div className="image-container"><img className="change-password-logo" src='/img/change-password-logo.png' /></div>
                <div className="text">Current Password</div>
                <div className="field-container"><input className="text-field" type="password" /></div>
                <div className="text">New Password</div>
                <div className="field-container"><input className="text-field" type="password" /></div>
                <div className="text">Confiirm-Password</div>
                <div className="field-container"><input className="text-field" type="password" /></div>
                <div className="button-container"><button>Confirm</button></div>
            </div>
        </div>
      </body>
    </div>
  );
}

export default HostChangePassword;
