import React, { useState, useEffect } from 'react';
import { updateUser, isAuth, getCookie, signout } from '../helpers/auth';
import { Link } from 'react-router-dom';

function UserPersonalInformation() {

  var img_src = "/img/km.png";

  var information = {
    username: "Someone",
    email: "something@kmitl.ac.th",
    tel: "000000000",
    address: "ได้ยินเสียงแว่วดังแผ่วมาแต่ ไกล ไกล ชุ่มชื่นฤทัย หวานใดจะปาน ฟังเสียงบรรเลง ขับเพลงประสาน จากทิพย์วิมาน ประทานกล่อมใจ",
    role: "User"
  };

  const [formData, setFormData] = useState({
    username:'',
    email:'',
    tel:'',
    address:'',
    role:'',
    img:''
  });

  function editInformation() {
    document.getElementById('account-information-edit-button').style.display = 'none';
    document.getElementById('account-information-save-button').style.display = '';
    document.getElementById('account-information-cancel-button').style.display = '';
    document.getElementById('account-information-display-username').style.display = 'none';
    document.getElementById('account-information-display-email').style.display = 'none';
    document.getElementById('account-information-display-tel').style.display = 'none';
    document.getElementById('account-information-display-address').style.display = 'none';
    document.getElementById('account-information-edit-username').style.display = '';
    document.getElementById('account-information-edit-email').style.display = '';
    document.getElementById('account-information-edit-tel').style.display = '';
    document.getElementById('account-information-edit-address').style.display = '';
    document.getElementById('account-information-edit-username').value = information.username;
    document.getElementById('account-information-edit-email').value = information.email;
    document.getElementById('account-information-edit-tel').value = information.tel;
    document.getElementById('account-information-edit-address').value = information.address;
  }

  function saveInformation() {
    document.getElementById('account-information-edit-button').style.display = '';
    document.getElementById('account-information-save-button').style.display = 'none';
    document.getElementById('account-information-cancel-button').style.display = 'none';
    document.getElementById('account-information-display-username').style.display = '';
    document.getElementById('account-information-display-email').style.display = '';
    document.getElementById('account-information-display-tel').style.display = '';
    document.getElementById('account-information-display-address').style.display = '';
    document.getElementById('account-information-edit-username').style.display = 'none';
    document.getElementById('account-information-edit-email').style.display = 'none';
    document.getElementById('account-information-edit-tel').style.display = 'none';
    document.getElementById('account-information-edit-address').style.display = 'none';
  }

  function cancel() {
    document.getElementById('account-information-edit-button').style.display = '';
    document.getElementById('account-information-save-button').style.display = 'none';
    document.getElementById('account-information-cancel-button').style.display = 'none';
    document.getElementById('account-information-display-username').style.display = '';
    document.getElementById('account-information-display-email').style.display = '';
    document.getElementById('account-information-display-tel').style.display = '';
    document.getElementById('account-information-display-address').style.display = '';
    document.getElementById('account-information-edit-username').style.display = 'none';
    document.getElementById('account-information-edit-email').style.display = 'none';
    document.getElementById('account-information-edit-tel').style.display = 'none';
    document.getElementById('account-information-edit-address').style.display = 'none';
  }

  function chooseImage() {

  }

  return (
    <div className="user-personal-information">

      {/* Side Bar */}
      <div className="side-bar-container">
          <div className="user-side-none-bar-selceted"><div className="side-bar-menu"><Link to="/"><a><i class="fas fa-home" /><div>Home</div></a></Link></div></div>
          <div className="user-side-bar-selceted"><div className="side-bar-menu"><a><i class="far fa-user"/><div>Personal Information</div></a></div></div>
          <div className="user-side-none-bar-selceted"><div className="side-bar-menu"><Link to="/Acount/Change_password"><a><i class="fas fa-unlock-alt"/><div>Change Password</div></a></Link></div></div>
          <div className="user-side-none-bar-selceted"><div className="side-bar-menu"><Link to="/"><a><i class="fas fa-map-marked-alt"/><div>My TripS</div></a></Link></div></div>
          <div className="user-side-none-bar-selceted"><div className="side-bar-menu"><a onClick={signout}><i class="fas fa-sign-out-alt"/><div>Log Out</div></a></div></div>
      </div>

      {/* Body */}
      <body>
        <div className="information-layout">
          <div className="information-container">
            <div className="account-profile-image-container">
              <a className="account-profile-image-change-button" onClick={chooseImage}>
                <img className="account-profile-image" src="/img/km.png" />
              </a>
            </div>
            
              
            <div className="personal-information">
              <div className="information-column">

                {/* Left Column */}
                <div className="information-left">
                  <div>Username</div>
                  <div>E-Mail</div>
                  <div>Tel.</div>
                  <div>Address</div>
                  <div></div>
                  <div>Role</div>
                </div>
                
                {/* Right Column */}
                <div className="information-right">
                  <div>
                    <div id="account-information-display-username">{information.username}</div>
                    <div><input className="account-information-edit-text-field" id="account-information-edit-username" type="text" maxLength='16' style={{display:'none'}}/></div>
                  </div>
                  <div>
                    <div id="account-information-display-email">{information.email}</div>
                    <div><input className="account-information-edit-text-field" id="account-information-edit-email" type="text" maxLength='32' style={{display:'none'}}/></div>
                  </div>
                  <div>
                    <div id="account-information-display-tel">{information.tel}</div>
                    <div><input className="account-information-edit-text-field" id="account-information-edit-tel" type="text" maxLength='12' style={{display:'none'}}/></div>
                  </div>
                  <div className="account-information-text-area-container">
                    <div id="account-information-display-address">{information.address}</div>
                    <textarea className="account-information-edit-address" id="account-information-edit-address" rows="3" cols="50" maxLength='100' style={{display:'none'}}></textarea>
                  </div>
                  <div>
                    <div></div>
                    <div id="account-information-display-role">{information.role}</div>
                  </div>
                </div>

              </div>
            </div>

            <div className="information-button-container">
              <div><button className="account-information-edit-button" id="account-information-edit-button" style={{display:''}} onClick={editInformation}>Edit</button></div>
              <div><button className="account-information-edit-button" id="account-information-save-button" style={{display:'none'}} onClick={saveInformation}>Save</button></div>
              <div><button className="account-information-cancel-button" id="account-information-cancel-button" style={{display:'none'}} onClick={cancel}>Cancel</button></div>
            </div>
          </div>
        </div>
      </body>
    </div>
  );
}

export default UserPersonalInformation;
