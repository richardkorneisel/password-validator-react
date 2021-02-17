import React, { Component } from 'react';
import './Validator.css';class Validator extends Component {
  constructor(){
    super()
    this.state = {
      email: "",
      password: "",
      passwordConfirm: "",
      valid: true
    }
  }
  passwordOne=(event)=>{
    this.setState({
      password: event.target.value
    })
  }
  passwordTwo=(event)=>{
    this.setState({
      passwordConfirm: event.target.value
    })
  }  
  passwordCheck=()=>{
    if (this.state.password === this.state.passwordConfirm){
      this.setState({
        valid: true
      })
      console.log(this.state.valid)
        alert('Passwords Match');   
    }
    else {
      this.setState({
        valid: false
      })
      console.log(this.state.valid)
      alert('Passwords Do Not Match');  
    }
  }  
  render() {
    console.log(this.state.valid)
    return (
      <div className="form">
        <h1>Sign Up</h1>
        <input type="email" placeholder="email" />
        <input type="password" placeholder="password" onChange={this.passwordOne}/>
        <input type="password" placeholder="password confirm" onChange={this.passwordTwo}/>
        <button onClick={this.passwordCheck}>Submit</button>
      </div>
    );
  }
}export default Validator;