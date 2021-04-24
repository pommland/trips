import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route} from "react-router-dom";



import Navbar from "./components/navbar.component"
import BlogsList from "./components/blogs-list.component";
import EditBlog from "./components/edit-blog.component";
import CreateBlog from "./components/create-blog.component";
import CreateUser from "./components/create-user.component";


function App() {
  return (
    <Router>
      <div className="container"></div>
      <Navbar />
      <br/>
      <Route path="/" exact component={BlogsList} />
      <Route path="/edit/:id" component={EditBlog} />
      <Route path="/create" component={CreateBlog} />
      <Route path="/user" component={CreateUser} />
    </Router>
   
  );
}

export default App;
