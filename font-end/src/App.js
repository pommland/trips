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
import MyTripS from './createtrip/MyTripS';
import WaitActivate from './Component/WaitActivate';
import HostIPersonalformation from './components/HostPersonalInformation';
import HostChangePassword from './components/HostChangePassword';
import HostAddHotel from './components/HostAddHotel';

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
                  path="/Account/user/Information"
                  component={UserPersonalInformation}
                />
                <PrivateRoute
                  exact
                  path="/Create"
                  component={MyTripS}
                />
                <PrivateRoute
                  exact
                  path="/Account/user/Change_password"
                  component={UserChangePassword}
                />

                <PrivateRoute
                  exact
                  path="/wait"
                  component={WaitActivate}
                />

                <PrivateRoute
                  exact
                  path="/Account/host/Information"
                  component={HostIPersonalformation}
                />
                <PrivateRoute
                  exact
                  path="/Account/host/Change_password"
                  component={HostChangePassword}
                />
                <PrivateRoute
                  exact
                  path="/Account/host/add_hotel"
                  component={HostAddHotel}
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
//     return (
//       <div>
//         <UserChangePassword />
//       </div>
//     );
//   }
  

// export default App;
