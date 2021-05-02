import './style.css';
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
            .post(`http://localhost:5000/api/login`, {
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
        <><div class="container">
        <div class="forms-container">
            
          <div class="signin-signup">
            {/* <!-------------------------- SIGN IN!!!! ---------------------------> */}
            <form action= "#" class="sign-in-form" onSubmit = {handleSubmit}>
              <h2 class="title">Sign in</h2>
              <div class="input-field">
                <i class="fas fa-user"></i>
                <input type="text" 
                placeholder="Username" 
                onChange={handleChange('username')}
                value={username}/>
              </div>
              <div class="input-field">
                <i class="fas fa-lock"></i>
                <input type="password" 
                placeholder="Password" 
                id="pass" 
                name="password" 
                minLength="6" required 
                onChange={handleChange('password')}
                value={password}/>
              </div>
              <div class="checkbox">
                <input type="checkbox" value="lsRememberMe" id="rememberMe" /> 
                <label for="rememberMe">Remember me</label>
              </div>
              <input type="submit" value="Login" class="btn solid" />  
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
              {/* <!-- <div class="input-field">
                <i class="fas fa-name"></i>
                <input type="text" placeholder="Name" />
              </div>
              <div class="input-field">
                <i class="fas fa-name"></i>
                <input type="text" placeholder="Surname" />
              </div>
  
              <div class="input-field">
                <i class="fas fa-calendar"></i>
                <input type="text" placeholder="Birthday" onfocus="(this.type='date')" id="date" />
              </div> --> */}
  
              <input type="submit" class="btn" value="Sign up" />
            </form>
          </div>
        </div>
  
        <div class="panels-container">
          <div class="panel left-panel">
            <div class="content">
              <h3>New here ?</h3>
              <p>
                Create your account, Let's Get Started!
              </p>
              <button class="btn transparent" id="sign-up-btn">
                Sign up
              </button>
            </div>
            <img src="img/login.png" class="image" alt="" />
          </div>
          <div class="panel right-panel">
            <div class="content">
              <h3>One of us ?</h3>
              <p>
                Already Have a Account? Let's Enjoy Your Trip!
              </p>
              <button class="btn transparent" id="sign-in-btn" >
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
