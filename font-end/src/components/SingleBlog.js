import React, { Component } from 'react'
import Header from '../Component/Header';
import AllBlog from './AllBlog.js'
import { useParams } from 'react-router-dom';
import PopularList from './PopularList.js'
function SingleBlog() {

    let { username, topic, date, description, image } = useParams();
    const url_img = "http://localhost:5000/image/files/" + image
    return (
        <div>
            <Header />
            <div className='allblog' >
                <div className='container-sblog'>
                    <div className='container-spic'>
                        <img className='spic' src={url_img} />
                    </div>
                    <div className='container-stopic'>
                        {topic}
                    </div>
                    <div className='container-s-date'>
                        <a className='container-date'>{date}</a>
                        <a className='container-username'> Posted by {username}</a>

                    </div>
                    <div className='sdes'>
                        {description}
                    </div>
                    
                </div>
                <div  className ='padding-pop'>
                    <PopularList/>
                    </div>

            </div>



        </div>
    )

}

export default SingleBlog
