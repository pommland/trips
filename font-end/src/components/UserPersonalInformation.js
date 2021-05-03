import React, { useState, useEffect } from 'react';
import './UserPersonalInformation.css'
import Header from './menu_bar';
import SideBar from './UserSideBar';
import ReactRoundedImage from "react-rounded-image";
import { isElementOfType } from 'react-dom/test-utils';

function UserPersonalInformation() {

  var img_src = "/img/km.png";
  
  var information = {
    username: "Big-Tou",
    name: "Prayuth",
    surname: "Chan-o-cha",
    mail: "-",
    phone: "-",
    birthday: "21/3/2497",
    gender: "Male"
  };

  const [display, setDisplay] = useState(true);

  useEffect(() => {
    if (display == true) {
      console.log('true');
    }
    else {  
      console.log('false');
    }
  });

  function editInformation() {
    setDisplay(false);
    console.log('=====')
    document.getElementById('user-information-edit-button').style.display = 'none';
    document.getElementById('user-information-save-button').style.display = '';
    document.getElementById('user-information-cancel-button').style.display = '';
  }

  function saveInformation() {
    setDisplay(true);
  }

  function cancel() {
    setDisplay(true);
    document.getElementById('user-information-edit-button').style.display = '';
    document.getElementById('user-information-save-button').style.display = 'none';
    document.getElementById('user-information-cancel-button').style.display = 'none';
  }

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
        <div className="information-layout">
          <div className="user-personal-infromation">
            <div className="avatar-image-container">
              <a />
              <ReactRoundedImage className="avatar-image" image={img_src} roundedColor="#00587a" roundedSize="6"/>
            </div>
            <div className="avatar-image-change-button-container">
            </div>
              
            <div className="personalInformation">
              <div className="information-column">
                <div className="information-left">
                  <div>Username</div>
                  <div>Name</div>
                  <div>Surname</div>
                  <div>E-Mail</div>
                  <div>Phone</div>
                  <div>Birthday</div>
                </div>
                <div className="information-right">
                  <div>
                    <div>{information.username}</div>
                    <div><input type="text" value={information.username} /></div>
                  </div>
                  <div>
                    <div>{information.name}</div>
                    <div><input type="text" value={information.username} /></div>
                  </div>
                  <div>
                    <div>{information.surname}</div>
                    <div><input type="text" value={information.username} /></div>
                  </div>
                  <div>
                    <div>{information.mail}</div>
                    <div><input type="text" value={information.mail} /></div>
                  </div>
                  <div>
                    <div>{information.phone}</div>
                    <div><input type="text" value={information.phone} /></div>
                  </div>
                  <div>
                    <div>{information.birthday}</div>
                    <div><input type="text" value={information.birthday} /></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="information-button-container">
              <div><button className="information-edit-button" id="user-information-edit-button" style={{display:''}} onClick={editInformation}>Edit</button></div>
              <div><button className="information-edit-button" id="user-information-save-button" style={{display:'none'}} onClick={saveInformation}>Save</button></div>
              <div><button className="information-cancel-button" id="user-information-cancel-button" style={{display:'none'}} onClick={cancel}>Cancel</button></div>
            </div>
          </div>
        </div>
      </body>
    </div>
  );
}

export default UserPersonalInformation;
