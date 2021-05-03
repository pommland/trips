import React, { useState , useEffect } from 'react';
import Header from './menu_bar';
import SideBar from './UserSideBar';
import NotiJaa from './NotiJaa';
import { updateUser, isAuth, getCookie, signout } from '../helpers/auth';
import axios from 'axios';
import {NotificationContainer, NotificationManager} from 'react-notifications';
import 'react-notifications/lib/notifications.css';
const Bcrypt = require("bcryptjs");


function UserChangePassword() {


  const [formData, setFormData] = useState({
    username : '',
    email : '',
    current_password:'',
    new_password:'',
    confirm_password:'',
    password : '',
    textChange: 'Update',
  });

  const handleChange = text => e => {
    setFormData({ ...formData, [text]: e.target.value });
  };

  const {
    current_password,
    new_password,
    confirm_password,
    password
  } = formData;

  const changePassword = e => {
    if (document.getElementById("new-password").value != document.getElementById("confirm-password").value
        || !Bcrypt.compareSync(document.getElementById("current-password").value,formData.password)) {
          NotificationManager.error('Password is not correct!', 'Click me!', 5000, () => {
            alert('callback');
          });
        console.log("Password is not correct!")
    }
    else {
      e.preventDefault();
      setFormData({ ...formData, textChange: 'Submitting' });
      
      axios
      .post(
        `${process.env.REACT_APP_API_URL}api/update/${isAuth()._id}`,
        {
          username: formData.username,
          email   : formData.email,
          password: new_password
        }
      )
      .then(res => {
        updateUser(res, () => {
          // NotiJaa.createNotification('success','Password has been change!');
          // toast.success('Profile Updated Successfully');
          setFormData({ ...formData, textChange: 'Update' });
        });
      })
      .catch(err => {
        console.log(err.response);
      });
      
    }
  };


  useEffect(() => {
    loadProfile();
  }, []);

  const loadProfile = () => {
    // const token = getCookie('token');
    axios
      .get(`${process.env.REACT_APP_API_URL}api/${isAuth()._id}`)
      .then(res => {
        setFormData({ ...formData, 
          username : res.data.username,
          password : res.data.password,
          email    : res.data.email
        });
      })
      .catch(err => {
        // toast.error(`Error To Your Information ${err.response.statusText}`);
        /*if (err.response.status === 401) {
          signout(() => {
            UserChangePassword.push('/login');
          });
        }*/
        NotificationManager.error('Not Found User_ID!', 'Click me!', 5000, () => {
          alert('Please,Login Again!');
        });
        console.log("Not Found User_ID!");
      });
  };


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
      <NotificationContainer/>
    </div>
  );
}

export default UserChangePassword;
