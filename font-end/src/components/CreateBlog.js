
import React, { Component ,useEffect } from 'react';
import Header from '../Component/Header';
import { Link, Redirect } from 'react-router-dom';
// import Header from './Header.js'
// import { Link ,withRouter,Route } from 'react-router-dom';
import moment from 'moment';
import axios from 'axios';
import { authenticate, isAuth } from '../helpers/auth';
import {NotificationContainer, NotificationManager} from 'react-notifications';
import 'react-notifications/lib/notifications.css';


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
		reader.onload = () =>{
		  if(reader.readyState === 2){
			this.setState({profileImg: reader.result})
			this.setState({img : e.target.files[0] })
		  }
		}
		reader.readAsDataURL(e.target.files[0])
		
	  };
   btnHandler=(e)=>{
	if(isAuth()){
		this.setState({username : isAuth().username}) ;
		if(this.state.profileImg != './img/icon-uploadimg.png' && this.state.topic != ''&& this.state.des != ''){
			NotificationManager.info('Uploading...');
			var formData = new FormData();
			formData.append("file", this.state.img);
			console.log("FormData : ",formData)
			//upload img
			axios.post(`${process.env.REACT_APP_API_URL}image/files`,formData,
			{
				headers: {
					'Content-Type': 'multipart/form-data'
				}
			})
			.then(res => {
				
				this.setState({img : res.data.file.filename})
				this.setState({date : moment(this.state.date).format('DD-MM-YYYY') })
				axios.post(`${process.env.REACT_APP_API_URL}blogs/add`,{
					username : this.state.username,
					topic : this.state.topic,
					description : this.state.des,
					date : this.state.date,
					image : this.state.img
				})
				.then(res => {
					console.log("Blog Added!" + res)
					NotificationManager.success("Blog Added!","Congratulation!");
					this.props.history.push(`${this.state.username}/${this.state.topic}/${this.state.date}/${this.state.des}/${this.state.img}`);})
				.catch(err => {
					NotificationManager.error(err, 'Click me!', 5000, () => {
						alert('Try Again!');
					});
					// alert(err)
					axios.delete(`${process.env.REACT_APP_API_URL}image/files/delete`,{
						filename : this.state.img
					})
					.then(res => {NotificationManager.info('Image Deleted!')})
					.catch(err => {NotificationManager.warning('File to clear image!', 'Close after 3000ms', 3000)})
				});
			})
			.catch(err => {NotificationManager.error(err, 'Click me!', 5000, () => {
				alert('Try Again!');
			});});
			
			  
		
		   }
		   else{
			NotificationManager.warning('Please fill up.', 'Close after 3000ms', 3000);
		   }
	}else{
		NotificationManager.info('Please,Login!');
		<Redirect to='/Allblog' />
	}
  
   }

   
	render() {
		const { profileImg } = this.state
		
		return (
			<div>
				 <Header /> 
<center>
				<div className='container-create'>
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
				<NotificationContainer />
			</div>
		);
	}
}

export default CreateBlog;