import React, { useState } from 'react';
import { updateUser, isAuth, getCookie, signout } from '../helpers/auth';
import axios from 'axios';
import {NotificationContainer, NotificationManager} from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import { Link } from 'react-router-dom';

function HostAddHotel() {

  const [baseImage, setBaseImage] = useState('/img/icon-uploadimg.png');
  
  const uploadImage = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertBase64(file);
    setBaseImage(base64);
    console.log(e.target.files[0]);
  };

  console.log(baseImage)

  const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        resolve(fileReader.result);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };
  
  function logout() {
    signout(() => {
      <Link to="/" />
    });
  }

  return (
    <div className="userPersonalInfromation">

      {/* Side Bar */}
      <div className="side-bar-container">
      <div className="user-side-bar-none-selceted"><Link className="side-bar-menu" to="/"><a className="side-bar-text-container"><i class="fas fa-home" /><div>Home</div></a></Link></div>
        <div className="user-side-bar-none-selceted"><Link className="side-bar-menu" to="/Account/host/Information"><a className="side-bar-text-container"><i class="far fa-user"/><div>Personal Information</div></a></Link></div>
        <div className="user-side-bar-none-selceted"><Link className="side-bar-menu" to="/Account/host/Change_password"><a className="side-bar-text-container"><i class="fas fa-unlock-alt"/><div>Change Password</div></a></Link></div>
        <div className="user-side-bar-selceted"><div className="side-bar-menu"><a className="side-bar-text-container"><i class="fas fa-hotel"/><div>Add Hotel</div></a></div></div>
        <div className="user-side-bar-none-selceted"><Link className="side-bar-menu" onClick={logout}><Link><i class="fas fa-sign-out-alt"/><div>Log Out</div></Link></Link></div>
      </div>

      {/* Body */}
      <body>
        <div className="information-layout">
          <div className="add-hotel-container">
            <div className="add-hotel-image-container">
              <div className="account-information-profile-image-container">
                  <img src={baseImage} className="account-information-profile-image" alt="" id="account-profile-img" className="img" />
              </div>
              <input className="account-information-profile-image" type="file" id="input" onChange={(e) => uploadImage(e)} />
              <div className="account-information-profile-change">
                <label htmlFor="input" id="account-information-profile-change-button">
                  <i className="material-icons"></i>
                  Choose your Photo
                </label>
              </div>

              <div className="add-hotel-data-container">
                
                <div className="add-hotel-data-block">
                  <div className="add-hotel-container-1">
                    <div className="add-hotel-container-1-left">      
                      <div className="add-hotel-text">Name</div>
                      <div className="add-hotel-field-container">
                        <input className="add-hotel-text-field" type="text" id="hotel-name"/>
                      </div>
                    </div>
                    
                    <div className="add-hotel-container-1-right"> 
                      <div className="add-hotel-text">Price</div>
                      <div className="add-hotel-field-container">
                        <input className="add-hotel-text-field" type="number" id="hotel-price"/>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="add-hotel-data-block">
                  <div className="add-hotel-text">E-mail</div>
                  <div className="add-hotel-field-container">
                    <input className="add-hotel-text-field" type="text" id="hotel-email"/>
                  </div>
                </div>

                <div className="add-hotel-data-block">
                  <div className="add-hotel-text">Address</div>
                  <div className="add-hotel-field-container">
                    <input className="add-hotel-text-field" type="number" id="hotel-address"/>
                  </div>
                </div>

                <div className="add-hotel-data-block">
                  <div className="add-hotel-text">Tel</div>
                  <div className="add-hotel-field-container">
                    <input className="add-hotel-text-field" type="number" id="hotel-tel"/>
                  </div>
                </div>

                <div className="add-hotel-data-block">
                  <div className="add-hotel-text">Description</div>
                  <div className="add-hotel-field-container">
                    <input className="add-hotel-text-field" type="text" id="hotel-description"/>
                  </div>
                </div>

                <div className="add-hotel-data-block">
                  <div className="available-container">
                    <div className="hotel-available-container">
                      <input type="checkbox"/>
                    </div>  
                    <div className="add-hotel-text-available">Available</div>
                  </div>
                </div>

                <div className="add-hotel-data-block">
                  <div className="add-hotel-button-container">
                    <button className="ADD-button">ADD</button>
                  </div>
                </div>
              </div>

            </div>                            
          </div>
        </div>
      </body>
    </div>
  );
}

export default HostAddHotel;
