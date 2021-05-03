import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home1 from "./Home1";
import Login from "./Login";
import AllBlog from "./components/AllBlog";
import SingleBlog from "./components/SingleBlog";
import CreateBlog from "./components/CreateBlog";
const rootElement = document.getElementById("root");
    ReactDOM.render(
      <BrowserRouter>
       <Switch>
        <Route exact path="/" component={Home1} />
        <Route path="/Login" component={Login} />
        <Route path="/Allblog" component={AllBlog} /> 
        <Route path="/:username/:topic/:date/:description/:image" component={SingleBlog} />
        <Route path="/cblog" component={CreateBlog}/> 

         {/* <Route path="/content" component={Content}/> */}
         {/* <Route path="/footer" component={Footer}/>  */}
      </Switch>
      </BrowserRouter>,
      rootElement
    );
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
