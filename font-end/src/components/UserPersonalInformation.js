import React, { useState, useEffect } from 'react';
import { updateUser, isAuth, getCookie, signout } from '../helpers/auth';
import { Link ,Redirect } from 'react-router-dom';
import axios from 'axios';
import {NotificationContainer, NotificationManager} from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import Preloader from '../Component/Preloader';
function UserPersonalInformation() {


  useEffect(() => {
    loadProfile();
  }, []);

  const [formData, setFormData] = useState({
    username:'',
    password:'',
    email:'',
    tel:'',
    address:'',
    role:'',
    profileImg: '/img/icon-uploadimg.png',
    img:''
  });

  const handleChange = text => e => {
    setFormData({ ...formData, [text]: e.target.value });
  };

  const {
    username,
    password,
    email,
    tel,
    address,
    role,
    profileImg,
    img
  } = formData;

	const [baseImage, setBaseImage] = useState('/img/icon-uploadimg.png');
  
  const uploadImage = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertBase64(file);
    setFormData({...formData,img : file,profileImg : file.name})
    setBaseImage(base64);
    console.log(e.target.files[0]);
  };


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

  var information = {
    username: "Someone",
    email: "something@kmitl.ac.th",
    tel: "000000000",
    address: "ได้ยินเสียงแว่วดังแผ่วมาแต่ ไกล ไกล ชุ่มชื่นฤทัย หวานใดจะปาน ฟังเสียงบรรเลง ขับเพลงประสาน จากทิพย์วิมาน ประทานกล่อมใจ",
    role: "User"
  };


  const loadProfile = () => {
    axios
      .get(`${process.env.REACT_APP_API_URL}api/${isAuth()._id}`)
      .then(res => {
        console.log(res.data)
        information.username = res.data.username;
        information.email    = res.data.email;
        information.tel = res.data.Tel;
        information.address = res.data.address;
        information.role = res.data.roles == 1 ? "Enterprise" : "Traveler";
        setFormData({ ...formData, 
          username : res.data.username,
          password : res.data.password,
          email    : res.data.email,
          tel : res.data.Tel,
          address : res.data.address,
          role : res.data.roles == 1 ? "Enterprise" : "Traveler",
          profileImg : res.data.img != '/img/icon-uploadimg.png' ? `${process.env.REACT_APP_API_URL}image/files/`+res.data.img :res.data.img
        });
        console.log(res.data.img)
        setBaseImage(res.data.img != '/img/icon-uploadimg.png' ? `${process.env.REACT_APP_API_URL}image/files/`+res.data.img :res.data.img)
        NotificationManager.info('Fill Data!...');
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
        logout()
      });



  }


  const handleSubmit = e =>{
    e.preventDefault();
    if(isAuth()){
      if(profileImg != './img/icon-uploadimg.png' && formData.username != '' && formData.tel != '' && formData.address != ''){
        NotificationManager.info('Uploading...');
        var sendData = new FormData();
        console.log(formData.img)
        sendData.append("file", formData.img);
        // console.log("FormData : ",formData)
        //upload img
        axios.post(`${process.env.REACT_APP_API_URL}image/files`,sendData,
        {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        })
        .then(res => {
          const new_name = res.data.file.filename;
          setFormData({profileImg : new_name})
          axios.post(`${process.env.REACT_APP_API_URL}api/update/`+isAuth()._id,{
            username : formData.username,
            password : formData.password,
            email    : formData.email,
            Tel : formData.tel,
            address : formData.address,
            img : new_name
          })
          .then(res => {
            updateUser(res, () => {
              NotificationManager.success("User Updated!","Congratulation!");
            });
            logout()
          })
          .catch(err => {
            NotificationManager.error("ERROR", 'Click me!', 5000, () => {
              alert('Try Again!');
            });
            // alert(err)
            axios.delete(`${process.env.REACT_APP_API_URL}image/files/delete`,{
              filename : formData.img
            })
            .then(res => {NotificationManager.info('clear image!')})
            .catch(err => {NotificationManager.warning('clear image!', 'Close after 3000ms', 3000)})
          });
        })
        .catch(err => {
          NotificationManager.error('Fail to update Image part (Old Image)!', 'Click me!', 5000, () => {
          alert('Try Again!');});
          axios.post(`${process.env.REACT_APP_API_URL}api/update/`+isAuth()._id,{
            username : formData.username,
            password : formData.password,
            email    : formData.email,
            Tel : formData.tel,
            address : formData.address,
          })
          .then(res => {
            updateUser(res, () => {
              NotificationManager.success("User Updated!","Congratulation!");
            });
            logout()
          })
        });
        
          
      
         }
         else{
        NotificationManager.warning('Please fill up or Upload Image!', 'Close after 3000ms', 3000);
         }
    }else{
      NotificationManager.info('Please,Login!');
      <Redirect to='/Login' />
    }


  }


  function editInformation() {
    document.getElementById('account-information-edit-button').style.display = 'none';
    document.getElementById('account-information-save-button').style.display = '';
    document.getElementById('account-information-cancel-button').style.display = '';
    document.getElementById('account-information-display-username').style.display = 'none';
    document.getElementById('account-information-display-email').style.display = 'none';
    document.getElementById('account-information-display-tel').style.display = 'none';
    document.getElementById('account-information-display-address').style.display = 'none';
    document.getElementById('account-information-profile-change-button').style.display = '';
    document.getElementById('account-information-edit-username').style.display = '';
    document.getElementById('account-information-edit-email').style.display = '';
    document.getElementById('account-information-edit-tel').style.display = '';
    document.getElementById('account-information-edit-address').style.display = '';
    document.getElementById('account-information-edit-username').value = formData.username;
    document.getElementById('account-information-edit-email').value = formData.email;
    document.getElementById('account-information-edit-tel').value = formData.tel;
    document.getElementById('account-information-edit-address').value = formData.address;
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
    document.getElementById('account-information-profile-change-button').style.display = 'none';
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
    document.getElementById('account-information-profile-change-button').style.display = 'none';
  }

  function logout() {
    signout(() => {
      <Link to="/" />
    });
  }

  return (
    <div className="user-personal-information">
      
      {/* Side Bar */}
      <div className="side-bar-container">
        <div className="user-side-bar-none-selceted"><Link className="side-bar-menu" to="/"><a className="side-bar-text-container"><i class="fas fa-home" /><div>Home</div></a></Link></div>
        <div className="user-side-bar-selceted"><div className="side-bar-menu"><a className="side-bar-text-container"><i class="far fa-user"/><div>Personal Information</div></a></div></div>
        <div className="user-side-bar-none-selceted"><Link className="side-bar-menu" to="/Acount/Change_password"><a className="side-bar-text-container"><i class="fas fa-unlock-alt"/><div>Change Password</div></a></Link></div>
        <div className="user-side-bar-none-selceted"><Link className="side-bar-menu" to=""><a className="side-bar-text-container"><i class="fas fa-map-marked-alt"/><div>My TripS</div></a></Link></div>
        <div className="user-side-bar-none-selceted"><Link className="side-bar-menu" onClick={logout}><Link><i class="fas fa-sign-out-alt"/><div>Log Out</div></Link></Link></div>
      </div>

      {/* Body */}
      <body>
      {formData.name = '' 
      ?(<Preloader />):(
      
        <div className="information-layout">
          <div className="information-container">
            <div className="account-profile-image-container">
            <div >
							<div className="account-information-profile-image-container">
								<img src={baseImage} className="account-information-profile-image" alt="" id="account-profile-img" className="img" />
							</div>
							<input className="account-information-profile-image" type="file" id="input" onChange={(e) => uploadImage(e)} />
							<div className="account-information-profile-change">
								<label htmlFor="input" style={{display:'none'}} id="account-information-profile-change-button">
									<i className="material-icons"></i>
						      Choose your Photo
					      </label>
						</div>
					</div>

          

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
                    <div id="account-information-display-username">{formData.username}</div>
                    <div><input className="account-information-edit-text-field" id="account-information-edit-username" type="text" minLength='6' maxLength='16' style={{display:'none'}}
                    onChange = {handleChange('username')}
                    value={formData.username}/></div>
                  </div>
                  <div>
                    <div id="account-information-display-email">{formData.email}</div>
                    <div><input className="account-information-edit-text-field" id="account-information-edit-email" type="text" maxLength='32' style={{display:'none'}}
                    onChange = {handleChange('email')}
                    value={formData.email}/></div>
                  </div>
                  <div>
                    <div id="account-information-display-tel">{formData.tel}</div>
                    <div><input className="account-information-edit-text-field" id="account-information-edit-tel" type="text" maxLength='12' style={{display:'none'}}
                    onChange = {handleChange('tel')}
                    value={formData.tel}/></div>
                  </div>
                  <div className="account-information-text-area-container">
                    <div id="account-information-display-address">{formData.address}</div>
                    <textarea className="account-information-edit-address" id="account-information-edit-address" rows="3" cols="50" maxLength='100' style={{display:'none'}}
                    onChange = {handleChange('address')}
                    value={formData.address}></textarea>
                  </div>
                  <div>
                    <div></div>
                    <div id="account-information-display-role">{role}</div>
                  </div>
                </div>

              </div>
            </div>

            <div className="information-button-container">
              <div><button className="account-information-edit-button" id="account-information-edit-button" style={{display:''}} onClick={editInformation}>Edit</button></div>
              <div><button className="account-information-edit-button" id="account-information-save-button" style={{display:'none'}} onClick={handleSubmit}>Save</button></div>
              <div><button className="account-information-cancel-button" id="account-information-cancel-button" style={{display:'none'}} onClick={cancel}>Cancel</button></div>
            </div>
          </div>
        </div>
      )}
      </body>
      <NotificationContainer/>
    </div>
  );
}

export default UserPersonalInformation;