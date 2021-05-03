import React, { useState } from 'react';
import './UserPersonalInformationEdit.css'
import Header from './menu_bar';
import SideBar from './UserSideBar';
import ReactRoundedImage from "react-rounded-image";

function UserPersonalInformationEdit() {

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

  const [username, setUsername] = useState(information.username); {

  }

  

  function editInformation() {
    
  }

  function cancel() {

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
                  <div><input type="text" value={information.username} /></div>
                  <div><input type="text" value={information.name} /></div>
                  <div><input type="text" value={information.surname} /></div>
                  <div><input type="text" value={information.mail} /></div>
                  <div><input type="text" value={information.phone} /></div>
                  <div><input type="text" value={information.birthday} /></div>
                </div>
              </div>
            </div>
            <div className="information-edit-button-container">
              <div><button className="information-edit-button" onClick={editInformation}>Save</button></div>
              <div><button className="information-cancel-button" onClick={editInformation}>Cancel</button></div>
            </div>
          </div>
        </div>
      </body>
    </div>
  );
}

export default UserPersonalInformationEdit;
