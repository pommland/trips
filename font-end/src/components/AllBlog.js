import React, {useState,useEffect} from 'react'
import Blog from './Blog.js'
import Header from '../Component/Header';
import PopularBlog from './PopularBlog.js'
import PopularList from './PopularList.js'
import axios from 'axios';

function AllBlog() {
    
    const [new_blogs, setFormBlog] = useState({
        blog : []
    })

    useEffect(() => {
        getBlogs();
    }, []);


    const getBlogs = () => {
    axios.get('http://localhost:5000/blogs')
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
                {/* <div>
                    {blogList}
                </div> */}
                <div>
                {new_blogs.blog.length === 0 ? (
                    <div>Loading...</div>
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
                

            </div>

        </>
    )
}


export default AllBlog