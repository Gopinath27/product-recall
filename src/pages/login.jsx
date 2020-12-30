import React from "react";
import './Login.css';

export default class LoginPage extends React.Component {
  
    state={
        user:'',
        pass:''
    }

    handleChange = (e) => {
        const {name,value} = e.target
        this.setState({[name]:value})
    }

    handleSubmit = (e) => {
        e.preventDefault();
    }

    render () {  
      return (
        <div className="Login-header">
            <h1>LOGIN</h1>
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type='username' name='user' placeholder='username...' required onChange={this.handleChange}/> <br />
                    <input type='password' name='pass' placeholder='password...' required onChange={this.handleChange}/> <br />
                    <button onSubmit={this.handleSubmit}>Log In</button>
                </form>
            </div>
        </div>
        );
    }
}