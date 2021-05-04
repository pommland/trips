import React, {useState,useEffect} from 'react'
import Blog from './Blog.js'
import Header from '../Component/Header';
import { Link  } from 'react-router-dom';
import PopularList from './PopularList.js'
import axios from 'axios';
import Preloader from '../Component/Preloader';
import {NotificationContainer, NotificationManager} from 'react-notifications';
import 'react-notifications/lib/notifications.css';
function AllBlog() {
    
    const [new_blogs, setFormBlog] = useState({
        blog : []
    })

    useEffect(() => {
        getBlogs();
    }, []);


    const getBlogs = () => {
    axios.get(`${process.env.REACT_APP_API_URL}blogs`)
    //`${process.env.REACT_APP_API_URL}api/${isAuth()._id}`
    .then(res => {
        const data = res.data
        for (var i = 0; i < data.length; i++){
            setFormBlog({ ...new_blogs,blog : data 
            })
        }
    })
    .catch(err => {
        // console.log(err);
        return null;
    });
    }
    
    
    
    // console.log(formData)
    //const popularList = blogs.map(popular => <PopularBlog blog ={popular}/>)
    return (
        <>
            <Header />
            <div id="headerblog" className='header-blog'>
                <a >BLOGS</a>
            </div>

            <div  className='allblog'>
                <div>
                {new_blogs.blog.length === 0 ? (
                    <Preloader />
                ) : (
                    new_blogs.blog.map(blog => {
                        return <Blog blog={blog} />;
                    })
                    // blogs.map(blog => <Blog blog={blog} />)
                )}
                </div>
                <div >
                <PopularList />
                </div>
                <head>
                    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    <title>floating button demo</title>
                    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css" />

                </head>

        
            <Link to='/cblog' href="#createblog">
                <a className="float">
                    <i className="fa fa-plus my-float">
                    </i>
                </a>
                <div className="label-container">
                    <div className="label-text">Create Your Blog</div>
                    <i className="fa fa-play label-arrow"></i>
                </div>
            </Link>
                
            <NotificationContainer/>
            </div>

        </>
    )
}


export default AllBlog