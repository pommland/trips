
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import axios from 'axios';
import { authenticate, isAuth } from './helpers/auth';

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
        console.log(process.env.REACT_APP_API_URL);
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
            isAuth() && isAuth().role === 'admin'
              ? Login.push('/admin')
              : Login.push('/private');
            console.log(`Hey ${res.data.username}, Welcome back!`);
          });
        })
        .catch(err => {
          setFormData({
            ...formData,
            username: '',
            password: '',
            textChange: 'Sign In'
          });
          console.log(err.response);
          //toast.error(err.response.data.errors);
        });
    } else {
      toast.error('Please fill all fields');
    }
  };
  return (
    <>
      <div class="container-login">
        <div class="forms-container">
          <div class="signin-signup">

            {/* <!-------------------------- SIGN IN!!!! ---------------------------> */}
            <form action="#" class="sign-in-form">
              <h2 class="title">Sign in</h2>
              <div class="input-field">
                <i class="fas fa-user"></i>
                <input type="text" placeholder="Username" />
              </div>
              <div class="input-field">
                <i class="fas fa-lock"></i>
                <input type="password" placeholder="Password" />
              </div>
              <input type="submit" value="Login" class="btn-signin solid" />

            </form>


            {/* <!-------------------------- SIGN UP!!!! ---------------------------> */}
            <form action="#" class="sign-up-form">
              <h2 class="title">Sign up</h2>
              <div class="input-field">
                <i class="fas fa-user"></i>
                <input type="text" placeholder="Username" />
              </div>
              <div class="input-field">
                <i class="fas fa-lock"></i>
                <input type="password" placeholder="Password" />
              </div>
              <div class="input-field">
                <i class="fas fa-envelope"></i>
                <input type="email" placeholder="Email" />
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
      </div>
    </>
  )
}

export default Login
