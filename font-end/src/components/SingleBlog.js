import React, { Component } from 'react'
import Header from '../Component/Header';
import AllBlog from './AllBlog.js'
import { useParams } from 'react-router-dom';
import PopularList from './PopularList.js'
import { Link  } from 'react-router-dom';
function SingleBlog() {

    let { username, topic, date, description, image } = useParams();
    const url_img = `${process.env.REACT_APP_API_URL}image/files/` + image
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
            <head>
                    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    <title>floating button demo</title>
                    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css" />

                </head>

        
            <Link to='/cblog'>
                <a className="float">
                    <i className="fa fa-plus my-float">
                    </i>
                </a>
                <div className="label-container">
                    <div className="label-text">Create Your Blog</div>
                    <i className="fa fa-play label-arrow"></i>
                </div>
            </Link>


        </div>
    )

}

export default SingleBlog
