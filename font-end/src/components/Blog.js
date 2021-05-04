import React, {useState,useEffect} from 'react'
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios';
import {NotificationContainer, NotificationManager} from 'react-notifications';
import 'react-notifications/lib/notifications.css';
function Blog({ blog }) {
    const url_img = `${process.env.REACT_APP_API_URL}image/files/` + blog.image
    return (
        <div>

            <div className='container-blogtop'>
                <div className='container-topic'>
                    <a className='topic'>{blog.topic}</a>
                    <a>Posted by </a>
                    <a>{blog.username}</a>
                </div>
                <hr />
                <div className='container-blog '>
                    <div className='container-pic '>
                        <img src={url_img} className='pic' />
                    </div>
                    <div className='container-des'>
                        <p className='des'>{blog.description}</p>
                        <div className ='see-more'>
                            <Link to={`/${blog.username}/${blog.topic}/${blog.date}/${blog.description}/${blog.image}`} className ='see-more'>See More</Link>
                        </div>
                        

                    </div>
                </div>
            </div>
            <NotificationContainer/>
        </div>
    )
}

export default Blog
