import React, { useState } from 'react';
import './HostAddAttraction.css'
import Header from './menu_bar';
import SideBar from './HostSideBar';
// import ChangePasswordLogo from '../img/change-password-logo.png'

function HostAddAttraction() {

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
        
      </body>
    </div>
  );
}

export default HostAddAttraction;
