import React from "react";
import './Login.css';
import Button from '@material-ui/core/Button';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import AppBar from '@material-ui/core/AppBar';
import TextField from '@material-ui/core/TextField';
import { Link } from "react-router-dom";
import axios from 'axios';

export default class LoginPage extends React.Component {
  
    constructor(props){
        super(props);
        this.state={
        user:'',
        pass:''
        }
       }

    handleChange = (e) => {
        const {name,value} = e.target
        this.setState({[name]:value})
    }

    handleSubmit = (e) => {
        console.log("Handle submit method");
        <Link to="/store">next page</Link>
        /*
        var apiBaseUrl = "http://localhost:3000/api/";
        var payload={
        "username":this.state.user,
        "password":this.state.pass
        }
        axios.post(apiBaseUrl+'login', payload)
        .then(function (response) {
        console.log(response);
        if(response.data.code == 200){
        console.log("Login successfull");
        <Link to="/store" />
        }
        else if(response.data.code == 204){
        console.log("Username password do not match");
        alert("username password do not match")
        }
        else{
        console.log("Username does not exists");
        alert("Username does not exist");
        }
        })
        .catch(function (error) {
        console.log(error);
        });*/
    }

    render () {  
      return (
        <div className="Login-header">
                <h1>LOGIN</h1>
        <MuiThemeProvider>
          <div>
          <AppBar
             title="Login"
           />
           <TextField
             hintText="Enter your Username"
             floatingLabelText="Username"
             onChange = {(event,newValue) => this.setState({username:newValue})}
             />
           <br/>
             <TextField
               type="password"
               hintText="Enter your Password"
               floatingLabelText="Password"
               onChange = {(event,newValue) => this.setState({password:newValue})}
               />
             <br/> <br/>
             <Button onSubmit={this.handleSubmit} variant="contained" color="primary">Login</Button>
             </div>
         </MuiThemeProvider>
         </div>
        );
    }
}