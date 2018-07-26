import React, { Component } from 'react';
import Helper from './Helper';
import Loader from './Loader';
import { Link } from 'react-router-dom';
import cookie from 'react-cookies';


class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            loader: true
        };
        if(cookie.load('access_token'))
        {
            this.props.history.push('/dashboard');
        }
    }

    email = (e) => {
        this.setState({
            email: e.target.value
        });
    }

    password = (e) => {
        this.setState({
            password: e.target.value
        });
    }

    login = () => {
        this.toggleLoader();
        let body = JSON.stringify({
            email: this.state.email,
            password: this.state.password
        });
        let res = Helper("login", 'POST', body);
        res.then((res) => {

            if (res.access_token !== undefined) {
                this.toggleLoader();
                cookie.save("access_token", res.access_token,{path: "/"});

                this.props.history.push("/Dashboard");
            }
            else
            {
                this.toggleLoader();
                alert("Wrong Username/Password!!")
            }

        });
    }


    // setCookie =()=> {
    //     cookie.save("id", this.state.email,{path: "/"});
    //
    // };
    render() {
        var mystyle =
            {
                fontSize: '40px',
            };
        return (
            <div className="container-fluid p-0 ">
            <div className="bg-primary login3">

                <Loader loader={this.state.loader}/>
                <div className="unix-login">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 col-lg-offset-3">
                                <div className="login-content">
                                    <div className="login-logo">
                                        <span className="quick " style={mystyle} >SWEETY HUT</span>
                                    </div>
                                    <div className="login-form">
                                        <form>

                                            <div className="form-group">
                                                <label>Email address</label>
                                                <input type="email" className="form-control" placeholder="Email" onKeyDown={(e)=>{
                                                    if (e.keyCode === 13) {
                                                        this.login();
                                                    }
                                                }} onChange={(e) => this.email(e)} required/>
                                            </div>
                                            <div className="form-group">
                                                <label>Password</label>
                                                <input type="password" className="form-control" placeholder="Password" onKeyDown={(e)=>{
                                                    if (e.keyCode === 13) {
                                                        this.login();
                                                    }
                                                }} onChange={(e) => this.password(e)} required />
                                            </div>
                                            <div className="checkbox">
                                                <label>
                                                    <input type="checkbox" /> Remember Me
                                </label>
                                                <label className="pull-right">
                                                    <a href="">Forgotten Password?</a>
                                                </label>

                                            </div>
                                            <button type="button" className="btn btn-primary btn-flat m-b-30 m-t-30" onClick={(e) => this.login()}>
                                                <span className="login2">Sign in</span></button>

                                            <div className="register-link m-t-15 text-center">
                                                <p>Dont have account ? <Link to="./Signup"> Sign Up Here</Link>
                                                </p>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

</div>
       </div>
        );
    }
    toggleLoader(){
        this.setState({
            loader: !this.state.loader
        });
    }
    componentDidMount(){
        this.toggleLoader();
    }
}

export default Login;
