
import React, { useState } from 'react';
import axios from 'axios';
import { Link, Redirect } from 'react-router-dom';
import { authenticate, isAuth } from './helpers/auth';
import {NotificationContainer, NotificationManager} from 'react-notifications';
import 'react-notifications/lib/notifications.css';

function Login() {
    const [formData, setFormData] = useState({
        username: '',
        password: '',
        textChange: 'Sign In'
      });
      const { username, password ,textChange} = formData;
      const handleChange = text => e => {
        setFormData({ ...formData, [text]: e.target.value });
      };
      const handleSubmit = e => {
        e.preventDefault();
        if (username && password) {
          setFormData({ ...formData, textChange: 'Submitting' });
          axios
            .post(`${process.env.REACT_APP_API_URL}api/login`, {
              username: username,
              password: password
            })
            .then(res => {
              authenticate(res, () => {
                setFormData({
                  ...formData,
                  username: '',
                  password: '',
                  textChange: 'Submitted'
                  
            });
            // console.log(res.data)
            
            isAuth().role === 'admin'
              ? <Redirect to='/Allblog' />    //Login.push('/admin') 
              : <Redirect to='/' />
            // console.log(`Hey ${res.data.username}, Welcome back!`);
            NotificationManager.success(`Hey ${res.data.user.username}`,'Welcome Back!', 1000);
            
          });
        })
        .catch(err => {
          // console.log(err.response)
          setFormData({
            ...formData,
            username: '',
            password: '',
            textChange: 'Sign In'
          });
          const msg = err.response.data.errors;
          
          NotificationManager.error(msg + '!', 'Click me!', 5000, () => {
            alert('Try Again!');
          });
          //toast.error(err.response.data.errors);
        });
    } else {
      // toast.error('Please fill all fields');
      NotificationManager.warning('Please fill all fields', 'Close after 3000ms', 3000);
    }
  };

  const [formData_r, setFormData_r] = useState({
    username_r: '',
    password_r: '',
    email_r   : '',
    textChange: 'Sign Up'
  });

  const { username_r, password_r ,email_r,textChange_r} = formData_r;
  const handleChange_r = text => e => {
    setFormData_r({ ...formData_r, [text]: e.target.value });
  };
  const handleSubmit_r = e => {
    e.preventDefault();
    console.log(formData_r)
    if (username_r && email_r && password_r) {
        setFormData_r({ ...formData_r, textChange: 'Submitting' });
        axios
          .post(`${process.env.REACT_APP_API_URL}api/register`, {
            username : username_r,
            email : email_r,
            password: password_r
          })
          .then(res => {
            setFormData_r({
              ...formData_r,
              name: '',
              email: '',
              password: '',
              textChange: 'Submitted'
            });
            NotificationManager.success(res.data.message);
            // toast.success(res.data.message);
          })
          .catch(err => {
            setFormData_r({
              ...formData_r,
              name: '',
              email: '',
              password: '',
              textChange: 'Sign Up'
            });
            // console.log(err.response);
            const msg = err.response.data.errors;          
            NotificationManager.error(msg + '!', 'Click me!', 5000, () => {
              alert('Try Again!');
            });
          });
    } else {
      NotificationManager.warning('Please fill all fields', 'Close after 3000ms', 3000);
    }
  };
  

  return (
    <>
      <div class="container-login">
      {isAuth() ? <Redirect to='/' /> : null}
        <div class="forms-container">
          <div class="signin-signup">

            {/* <!-------------------------- SIGN IN!!!! ---------------------------> */}
            <form action="#" class="sign-in-form" onSubmit = {handleSubmit}>
              <h2 class="title">Sign in</h2>
              <div class="input-field">
                <i class="fas fa-user"></i>
                <input type="text" placeholder="Username" 
                onChange={handleChange('username')}
                value={username}/>
              </div>
              <div class="input-field">
                <i class="fas fa-lock"></i>
                <input type="password" placeholder="Password" 
                onChange={handleChange('password')}
                value={password}/>
              </div>
              <input type="submit" value="Login" class="btn-signin solid" />

            </form>


            {/* <!-------------------------- SIGN UP!!!! ---------------------------> */}
            <form action="#" class="sign-up-form" onSubmit={handleSubmit_r}>
              <h2 class="title">Sign up</h2>
              <div class="input-field">
                <i class="fas fa-user"></i>
                <input type="text" placeholder="Username" 
                onChange={handleChange_r('username_r')}
                value={username_r}/>
              </div>
              <div class="input-field">
                <i class="fas fa-lock"></i>
                <input type="password" placeholder="Password" 
                onChange={handleChange_r('password_r')}
                value={password_r}/>
              </div>
              <div class="input-field">
                <i class="fas fa-envelope"></i>
                <input type="email" placeholder="Email" 
                onChange={handleChange_r('email_r')}
                value={email_r}/>
              </div>
              <input type="submit" class="btn-signin" value="Sign up" />
            </form>
          </div>
        </div>

        <div class="panels-container">
          <div class="panel-login left-panel">
            <div class="content">
              <h6>New here ?</h6>
              <p1>
                Create your account, Let's Get Started!
                    </p1><br /><br />
              <button class="btn-signin transparent" id="sign-up-btn">
                Sign up
                    </button>
            </div>
            <img src="img/login.png" class="image" alt="" />
          </div>
          <div class="panel-login right-panel">
            <div class="content">
              <h6>One of us ?</h6>
              <p1>
                Already Have a Account? Let's Enjoy Your Trip!
                    </p1><br /><br />
              <button class="btn-signin transparent" id="sign-in-btn" >
                Sign in
                    </button>
            </div>
            <img src="img/signup.png" class="image" alt="" />
          </div>
        </div>
        <NotificationContainer/>
      </div>
    </>
  )
}

export default Login
