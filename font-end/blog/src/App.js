import logo from './logo.svg';
import './App.css';
import Header from './components/Header.js'
import AllBlog from './components/AllBlog.js'
import { Link } from 'react-router-dom';
import React from 'react';

class App extends React.Component {
  render(){
  return (
    <div>
        <AllBlog />    
    </div>
  );
}
}

export default App;
