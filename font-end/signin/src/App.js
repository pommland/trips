import './style.css';

function App() {
  return (
    
    <div class="container">
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
              <input type="password" placeholder="Password" id="pass" name="password" minlength="8" required/>
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
    
  );
}

export default App;