
import React, { Component } from 'react';
import Header from '../Component/Header';
import { Link, Redirect } from 'react-router-dom';
// import Header from './Header.js'
// import { Link ,withRouter,Route } from 'react-router-dom';
import moment from 'moment';
import axios from 'axios';
import { authenticate, isAuth } from '../helpers/auth';


export class CreateBlog extends Component {
	
	constructor() {
		
		super();
		this.state = {
			username : 'A',
			profileImg: './img/icon-uploadimg.png',
			img : '',
			topic: '',
			des: '',
			date : new Date().toLocaleDateString(),
			
			
		};
		
		this.handleChange = this.handleChange.bind(this);
		console.log(this.state);
	}
	handleChange(evt) {
		this.setState({ [evt.target.name]: evt.target.value });
		// console.log(this.state);
	}
	
	
	imageHandler = (e) => {
		const reader = new FileReader();
		if(e.target.file[0].size <= 16777216){
		reader.onload = () =>{
		  if(reader.readyState === 2){
			this.setState({profileImg: reader.result})
			this.setState({img : e.target.files[0] })
		  }
		}
		reader.readAsDataURL(e.target.files[0])
		}else{
			alert("Image is more than 16mb,Try Agian!")
		}
	  };
   btnHandler=(e)=>{
	
   if(this.state.profileImg != './img/icon-uploadimg.png' && this.state.topic != ''&& this.state.des != ''){
	var formData = new FormData();
	formData.append("file", this.state.img);
	console.log("FormData : ",formData)
	//upload img
	axios.post('${process.env.REACT_APP_API_URL}image/files',formData,
	{
		headers: {
			'Content-Type': 'multipart/form-data'
		}
	})
	.then(res => {
		this.setState({img : res.data.file.filename})
		this.setState({date : moment(this.state.date).format('DD-MM-YYYY') })
		axios.post('${process.env.REACT_APP_API_URL}blogs/add',{
			username : this.state.username,
			topic : this.state.topic,
			description : this.state.des,
			date : this.state.date,
			image : this.state.img
		})
		.then(res => {
			console.log("Blog Added!" + res)
			this.props.history.push(`${this.state.username}/${this.state.topic}/${this.state.date}/${this.state.des}/${this.state.img}`);})
		.catch(err => {
			alert(err)
			axios.delete('${process.env.REACT_APP_API_URL}image/files/delete',{
				filename : this.state.img
			})
			.then(res => console.log("Image Deleted!"))
			.catch(err => console.log(err))
		});
	})
	.catch(err => alert(err));
	
	  

   }
   else{
	alert("Please fill up.");
   }
   }

   
	render() {
		const { profileImg } = this.state
		// const authuser = () => {
		// 	{username}
		// };
		return (
			<div>
				 <Header /> 
<center>
				<div className='container-create'>
				{/* {isAuth() ? {username} : <Redirect to='/Allblog' />} */}
					<div >
						<div className="container-photo">

							<div className="img-holder">
								<img src= {profileImg} alt="" id="img" className="img" />
							</div>
							<input type="file" accept="image/*" name="image-upload" id="input" onChange={this.imageHandler} />
							<div className="label">
								<label className="image-upload" htmlFor="input">
									<i className="material-icons"></i>
						Choose your Photo
					</label>
							</div>
						</div>
					</div>
					<div className='container-input'>
					
						<form>

							<div>
								<a className='text-des'>Topic :</a>
								<input maxLength ='40' className='topic-input' type="text" name="topic" onChange={this.handleChange} />
							</div><br />
							<div >
								<a className='text-des'>Description :</a>
								<textarea class="form-control" className='des-input' type="text" name="des" onChange={this.handleChange} />
							</div>
						</form>
						
					</div>

				</div>
				<center>
					
				<div className ='container-btn-submit'>
					{/* ให้Linkไปหน้าblogที่สร้าง */}
					 {/* <Link to = {`${this.state.username}/${this.state.topic}/${this.state.date}/${this.state.des}/${this.state.profileImg}`}>   */}
					<button className ='btn-submit' onClick = {this.btnHandler}>Submit</button>
					 {/* </Link>  */}
				</div>
				</center>
				</center>
			</div>
		);
	}
}

export default CreateBlog;