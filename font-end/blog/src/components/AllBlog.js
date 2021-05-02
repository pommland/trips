import React from 'react'
import Blog from './Blog.js'
import '../styles/blogStyles.css'
import Header from './Header.js'
import PopularBlog from './PopularBlog.js'
import PopularList from './PopularList.js'
function AllBlog() {
    const blogs = [{
        username: 'A',
        topic: 'Header',
        description: 'Google Cloud Text-to-Speech enables developers to synthesize natural-sounding speech with 100+ voices, available in multiple languages and variants. It applies DeepMind’s groundbreaking research in WaveNet and Google’s powerful neural networks to deliver the highest fidelity possible. As an easy-to-use API, you can create lifelike interactions with your users, across many applications and devices.Google Cloud Text-to-Speech enables developers to synthesize natural-sounding speech with 100+ voices, available in multiple languages and variants. It applies DeepMind’s groundbreaking research in WaveNet and Google’s powerful neural networks to deliver the highest fidelity possible. As an easy-to-use API, you can create lifelike interactions with your users, across many applications and devices.Google Cloud Text-to-Speech enables developers to synthesize natural-sounding speech with 100+ voices, available in multiple languages and variants. It applies DeepMind’s groundbreaking research in WaveNet and Google’s powerful neural networks to deliver the highest fidelity possible. As an easy-to-use API, you can create lifelike interactions with your users, across many applications and devices.',
        date: '5 Jan. 2021',
        image: 'woman-on-pier.jpg'
    }, {
        username: 'B',
        topic: 'HeaderB',
        description: 'Google Cloud Text-to-Speech enables developers to synthesize natural-sounding speech with 100+ voices, available in multiple languages and variants. It applies DeepMind’s groundbreaking research in WaveNet and Google’s powerful neural networks to deliver the highest fidelity possible. As an easy-to-use API, you can create lifelike interactions with your users, across many applications and devices.Google Cloud Text-to-Speech enables developers to synthesize natural-sounding speech with 100+ voices, available in multiple languages and variants. It applies DeepMind’s groundbreaking research in WaveNet and Google’s powerful neural networks to deliver the highest fidelity possible. As an easy-to-use API, you can create lifelike interactions with your users, across many applications and devices.Google Cloud Text-to-Speech enables developers to synthesize natural-sounding speech with 100+ voices, available in multiple languages and variants. It applies DeepMind’s groundbreaking research in WaveNet and Google’s powerful neural networks to deliver the highest fidelity possible. As an easy-to-use API, you can create lifelike interactions with your users, across many applications and devices.',
        date: '7 Jan. 2021',
        image: 'wat.jpg'
    }, {
        username: 'C',
        topic: 'HeaderC',
        description: 'CSS variables have access to the DOM, which means that you can create variables with local or global scope, change the variables with JavaScript, and change the variables based on media queries.',
        date: '6 Jan. 2021',
        image: 'Wat-Benchamabophit.jpg'
    }]
    const blogList = blogs.map(blog => <Blog blog={blog} />)
    //const popularList = blogs.map(popular => <PopularBlog blog ={popular}/>)
    return (
        <div>
            <Header />
            <div className='header-blog'>
                <a >BLOGS</a>
            </div>

            <div className='allblog'>
                <div>
                    {blogList}
                </div>
                <div >
                <PopularList />
                </div>
                

            </div>

        </div>
    )
}


export default AllBlog