
import React from 'react';
import Header from './Component/Header';
import Preloader from './Component/Preloader';
import Intro from './Component/Intro';
import Member from './Component/Member';
import Popblog from './Component/Popblog';
import Footer from './Component/Footer';
import UserChangePassword from './components/UserChangePassword';
import {isAuth} from './helpers/auth';

function Home1() {


  return (
    <>

    
                
      {!isAuth()?(<Preloader/>):null}
      <Header/>
      <Intro/>
      <Popblog/>
      <Member/>
      <Footer/>
    </>
    
  );
}

export default Home1;
