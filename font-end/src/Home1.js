
import React from 'react';
import Header from './Component/Header';
import Preloader from './Component/Preloader';
import Intro from './Component/Intro';
import Member from './Component/Member';
import Popblog from './Component/Popblog';
import Footer from './Component/Footer';
import UserChangePassword from './components/UserChangePassword';
import {isAuth} from './helpers/auth';
import {NotificationContainer, NotificationManager} from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import WaitActivate from './Component/WaitActivate';

function Home1() {


  return (
    <>  
      {!isAuth()?(<Preloader/>):null}
      <Header/> 
      <Intro/>
      <Member/>
      <Footer/>
      <NotificationContainer/>
    </>
    
  );
}

export default Home1;
