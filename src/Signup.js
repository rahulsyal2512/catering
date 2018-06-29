import React, { Component } from 'react';
import Helper from './Helper';
import {Link} from 'react-router-dom';

class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            first_name:'',
            last_name:'',
            location:''            
        };
    }

    email = (e) => {
        this.setState({ email: e.target.value });
    }
    password = (e) => {
        this.setState({ password: e.target.value });
    } 
    firstname= (e) => {
        this.setState({ first_name: e.target.value });
    }
    lastname = (e) => {
        this.setState({ last_name: e.target.value });
    }
    location = (e) => {
        this.setState({ location: e.target.value });
    }
    register = () => {
        let body = JSON.stringify({
            first_name:this.state.first_name,
            last_name:this.state.last_name,
            location:this.state.location,
            email:this.state.email,
            password:this.state.password
        });
    
        let res = Helper("http://192.168.1.16:3001/v1/users", 'POST', body);
        res.then((res)=>{
            alert("kuch bhi");
		});
        }
  render() {
      var mystyle= 
      {
            fontSize:'40px'
      };
    return (
 <div  className="bg-primary login3 ">     



<div className="unix-login">
    <div className="container">
        <div className="row">
            <div className="col-lg-6 col-lg-offset-3">
                <div className="login-content">
                    <div className="login-logo">
                        <a href="index-2.html"><span className="quick "style={mystyle}>SWEETY HUT</span></a>
                    </div>
                    <div className="login-form">
                        <h4>Register to Administration</h4>
                        <form>
                                <div className="form-group">
                                        <label>First Name</label>
                                        <input type="text" className="form-control" placeholder="First Name" onKeyUp={(e)=>this.firstname(e)} required/>
                                </div>
                                <div className="form-group">
                                        <label>Last Name</label>
                                        <input type="text" className="form-control" placeholder="Last Name" onKeyUp={(e)=>this.lastname(e)}/>
                                </div>
                            <div className="form-group">
                                <label>Email address</label>
                                <input type="email" className="form-control" placeholder="Email" onKeyUp={(e)=>this.email(e)}/>
                            </div>
                            <div className="form-group">
                                <label>Password</label>
                                <input type="password" className="form-control" placeholder="Password" onKeyUp={(e)=>this.password(e)}/>
                            </div>
                            <div className="form-group">
                                    <label>Location</label>
                                    <input type="location" className="form-control" placeholder="Location" onKeyUp={(e)=>this.location(e)}/>
                            </div>	
                        
                            <button type="submit" className="btn btn-primary btn-flat m-b-30 m-t-30" onClick={(e)=>this.register()} >Register</button>
                            
                            <div className="register-link m-t-15 text-center">
                                <p>Already have account ? <Link to="./login"> Sign in </Link></p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

  
</div>
    );
  }
}

export default Signup;
