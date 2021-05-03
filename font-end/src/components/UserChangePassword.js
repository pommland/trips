import React, { useState } from 'react';
import Header from './menu_bar';
import SideBar from './UserSideBar';
import NotiJaa from './NotiJaa';

function UserChangePassword() {

  const [formData, setFormData] = useState({
    current_password:'',
    new_password:'',
    confirm_password:''
  });

  const handleChange = text => e => {
    setFormData({ ...formData, [text]: e.target.value });
  };

  const {
    current_password,
    new_password,
    confirm_password
  } = formData;

  function changePassword() {
    if (document.getElementById("new-password").value != document.getElementById("confirm-password").value) {
      
      return
    }
    else {
      
    }
  }

  console.log(formData)
  return (
    <div className="userPersonalInfromation">

      {/* Side Bar */}
      <SideBar />

      {/* Body */}
      <body className="page">
        <div className="change-password-layout">
            <div className="change-password-container">
                <div className="image-container"><img className="change-password-logo" src='/img/change-password-logo.png' /></div>
                <div className="text">Current Password</div>
                <div className="field-container"><input className="text-field" pattern=".{8,}" type="password" id="current-password" onChange={handleChange('current_password')}  value={current_password} /></div>
                <div className="text">New Password</div>
                <div className="field-container"><input className="text-field" pattern=".{8,}" type="password" id="new-password" onChange={handleChange('new_password')}  value={new_password}  /></div>
                <div className="text">Confiirm Password</div>
                <div className="field-container"><input className="text-field" pattern=".{8,}" type="password" id="confirm-password" onChange={handleChange('confirm_password')}  value={confirm_password}  /></div>
                <div className="button-container"><button onClick={changePassword}>Confirm</button></div>
            </div>
        </div>
      </body>
    </div>
  );
}

export default UserChangePassword;
