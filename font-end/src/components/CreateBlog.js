
import React, { Component } from 'react';
import Header from '../Component/Header';
// import Header from './Header.js'
// import { Link ,withRouter,Route } from 'react-router-dom';
import moment from 'moment';

export class CreateBlog extends Component {
	
	constructor() {
		
		super();
		this.state = {
			username : 'A',
			profileImg: './img/icon-uploadimg.png',
			topic: '',
			des: '',
			date : new Date().toLocaleDateString(),
			
			
		};
		this.state.date = moment(this.state.date).format('DD-MM-YYYY');
		this.handleChange = this.handleChange.bind(this);
		// console.log(this.state);
	}
	handleChange(evt) {
		this.setState({ [evt.target.name]: evt.target.value });
		console.log(this.state);
	}
	imageHandler = (e) => {
		const reader = new FileReader();
		reader.onload = () =>{
		  if(reader.readyState === 2){
			this.setState({profileImg: reader.result})
		  }
		}
		reader.readAsDataURL(e.target.files[0])
	  };
   btnHandler=(e)=>{
	
   if(this.state.profileImg != './img/icon-uploadimg.png' && this.state.topic != ''&& this.state.des != ''){
	this.props.history.push(`${this.state.username}/${this.state.topic}/${this.state.date}/${this.state.des}/${this.state.profileImg}`);  

   }
   else{
	alert("Please fill up.");
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
			</div>
		);
	}
}

export default CreateBlog;