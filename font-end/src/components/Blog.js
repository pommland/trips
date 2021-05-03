import React from 'react'
import { Link, Redirect } from 'react-router-dom';
function Blog({ blog }) {

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
                        <img src={`./img/${blog.image} `} className='pic' />
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
