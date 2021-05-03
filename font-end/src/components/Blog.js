import React, {useState,useEffect} from 'react'
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios';
function Blog({ blog }) {
    const url_img = "http://localhost:5000/image/files/" + blog.image
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
        </div>
    )
}

export default Blog
