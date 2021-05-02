import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import SingleBlog from './components/SingleBlog'
import AllBlog from './components/AllBlog'
import { Switch, BrowserRouter, Route, Link } from 'react-router-dom';
ReactDOM.render(

   <BrowserRouter>
      <Switch>
         <Route exact path="/" component={App} />
         <Route path="/:username/:topic/:date/:description/:image" component={SingleBlog} />
          <Route path="/allblog" component={AllBlog} /> 
         {/* <Route path="/content" component={Content}/> */}
         {/* <Route path="/footer" component={Footer}/>  */}
      </Switch>
   </BrowserRouter>,
   document.getElementById('root'));


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
