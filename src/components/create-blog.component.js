import React, { Component } from 'react';



export default class CreateBlog extends Component {
  constructor(props) {
    super(props);

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeDuration = this.onChangeDuration.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      username: '',
      topic: '',
      description: 0,
      date: new Date(),
      users: []
    }
  }

 
  render() {
    return (
      <div>
        <h3>CreateBlog</h3>
       
      
      </div>
    )
  }
}
