import Home1 from './Home1';
import './App.css';
import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Login from './Login';
import Account from './Account';
import CreateBlog from './components/CreateBlog';
import SingleBlog from './components/SingleBlog';
import AllBlog from './components/AllBlog';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import UserChangePassword from './components/UserChangePassword';
import UserPersonalInformation from './components/UserPersonalInformation';

function App() {
    return (
    <BrowserRouter>
      <>
          <Switch>
              <PrivateRoute
                  exact
                  path="/Allblog"
                  component={AllBlog}
              />
              <PrivateRoute
                  exact
                  path="/:username/:topic/:date/:description/:image"
                  component={SingleBlog}
              />
              <PrivateRoute
                  exact
                  path="/cblog"
                  component={CreateBlog}
              />
              <PrivateRoute
                  exact
                  path="/Account"
                  component={Account}
              />
              <PrivateRoute
                  exact
                  path="/"
                  component={Home1}
              />
              <PrivateRoute
                  exact
                  path="/Acount/Information"
                  component={UserPersonalInformation}
              />
              <PrivateRoute
                  exact
                  path="/Acount/Change_password"
                  component={UserChangePassword}
              />
              <Route exact path="/login" component={Login} />
              <Redirect to="/login"/>
          </Switch>
      </>
    </BrowserRouter>
  );
}

export default App;

// function App() {


//   return (
//     <>
//       <Home1/>
//     </>
    
//   );
// }

// export default App;
