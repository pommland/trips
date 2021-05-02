import React from 'react'
import { Link } from 'react-router-dom';
import '../styles/blogStyles.css'
function PopularBlog({blog}) {
    return (
        <div>
            
            <div>
            <Link to={`/${blog.username}/${blog.topic}/${blog.date}/${blog.description}/${blog.image}`} className ='popular-link' >
                <div className ='popular-topic'>
                   {blog.topic}
                </div>
                </Link>
            </div>
        </div>
    )
}

export default PopularBlog
