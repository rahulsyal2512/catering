import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Helper from './Helper';
import Loader1 from './Loader1';
import cookie from 'react-cookies';
import 'whatwg-fetch';
import {
    ToastContainer,
    toast
} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
class Users extends Component {
    notify = (msg) => {
        // toast(msg);

          toast.info(msg, {
            position: toast.POSITION.BOTTOM_CENTER
          });
        }
        notify1 = (msg) => {

              toast.success(msg, {
                position: toast.POSITION.TOP_RIGHT
              });
            }
        notify2 = (msg) => {

                toast(msg, {
                    position: toast.POSITION.TOP_RIGHT,
                    className: 'foo-bar'
                  });
              }
    constructor(props) {
        super(props);
        this.state = {
            // url: "http://192.168.1.16:3001/v1/",
            posts: [],
            loader: true
        };
        if(cookie.load('access_token') === undefined)
		 {
			this.props.history.push('/login');
		 }
    }
    updatePostView=(post)=>
    {
        let i  = this.state.posts.findIndex((p)=>
        {
            return post.id === p.id
        });
        this.state.posts[i].is_active = !this.state.posts[i].is_active;
        if(post.is_active=== true)
        {
            this.notify1(post.first_name +" " + post.last_name + " is now Active");

        }
        else{
         this.notify2(post.first_name +" "+ post.last_name +" is now Inactive");
        }

        this.forceUpdate();
    }
    checkboxChange=(e,post)=>
    {
        this.toggleLoader();
        let body=JSON.stringify({
            id : post.id,
            is_active: !post.is_active
        });
        let res=Helper('users' ,  'POST',body);
        res.then((res)=>
        {
        this.toggleLoader();

            this.updatePostView(post);
        });
    }

        // updatePostView = (post) => {
        //     let i = this.state.posts.findIndex((p) => {
        //         return post.id === p.id
        //     });
        //     this.state.posts[i].is_active = !this.state.posts[i].is_active;
        //     this.forceUpdate();
        // }
        // checkboxChange = (e, post) => {
        //     // console.log("dsdds")
        //     let body = JSON.stringify({
        //         user_id: post.id,
        //         is_active: !post.is_active
        //     });
        //     let res = Helper( 'changeUserStatus', 'POST', body);
        //     res.then((res) => {
        //         this.updatePostView(post);
        //     });
        // }

    fetchPosts = () => {

        let res = Helper("users", "GET");
        res.then((res) => {
            this.setState({
                posts: res,
            });

        });
        this.notify(" Posts Fetched Successfully");

    }

    render() {


        return (
            <div>
             <ToastContainer autoClose={4000}/>
             <Loader1 loader={this.state.loader}/>

<div className="sidebar sidebar-hide-to-small sidebar-shrink sidebar-gestures">
        <div className="nano">
            <div className="nano-content">
                <ul>
                    <li className="label">Main</li>
                    <li >
                        <Link to="./Dashboard">
                            <i className="ti-home"></i> Dashboard </Link>
                    </li>


                    <li className="label">My Account</li>
                    <li>
                        <Link to={"Email"}>
                            <i className="ti-email"></i> Email</Link>
                    </li>
                    <li>
                        <Link to="./Profile">
                            <i className="ti-user"></i> Profile</Link>
                    </li>


                    <li className="label">Others</li>
                    <li>
                        <Link to="./Items">
                            <i className="ti-view-list-alt"></i> Items
                        </Link>

                    </li>
                    <li>
                        <Link to="./Menu">
                            <i className="ti-menu-alt"></i> Menu</Link>
                    </li>
                    <li className="active">
                        <Link to="./Users" >
                            <i className="ti-user"></i> Users
                            <span className="sidebar-collapse-icon "></span>
                        </Link>
                    </li>
                    <li>
                        <Link to="./Preparation">
                            <i className="ti-pencil-alt"></i> Preparation</Link>
                    </li>

                    <li>
                        <Link to="./Location">
                            <i className="ti-location-pin"></i> Location</Link>
                    </li>



                    <li>
                        <Link to="./Salesgroup">
                            <i className="ti-files"></i> Sales Group</Link>
                    </li>

                    <li className="label">Details</li>
                    <li>
                        <Link to="./Reports">
                            <i className="ti-files"></i> Reports </Link>
                    </li>
                </ul>
            </div>
        </div>
    </div>




                <div className="header">
                    <div className="pull-left">
                        <div className="logo">
                            <Link to="./Dashboard">
                                <span>SWEETY HUT</span>
                            </Link>
                        </div>
                        <div className="hamburger sidebar-toggle">
                            <span className="line"></span>
                            <span className="line"></span>
                            <span className="line"></span>
                        </div>
                    </div>

                    <div className="pull-right p-r-15">
                        <ul>

                            <li className="header-icon dib ">
                                <i className="ti-bell"></i>
                                <div className="drop-down">
                                    <div className="dropdown-content-heading">
                                        <span className="text-left">Recent Notifications</span>
                                    </div>
                                    <div className="dropdown-content-body">
                                        <ul>
                                            <li>
                                                <a href="">
                                                    <img className="pull-left m-r-10 avatar-img" src="assets/images/avatar/3.jpg" alt="" />
                                                    <div className="notification-content">
                                                        <small className="notification-timestamp pull-right">02:34 PM</small>
                                                        <div className="notification-heading ">Mr. Saifun</div>
                                                        <div className="notification-text">5 members joined today </div>
                                                    </div>
                                                </a>
                                            </li>

                                            <li>
                                                <a href="">
                                                    <img className="pull-left m-r-10 avatar-img" src="assets/images/avatar/3.jpg" alt="" />
                                                    <div className="notification-content">
                                                        <small className="notification-timestamp pull-right">02:34 PM</small>
                                                        <div className="notification-heading">Mariam</div>
                                                        <div className="notification-text">likes a photo of you</div>
                                                    </div>
                                                </a>
                                            </li>

                                            <li>
                                                <a href="">
                                                    <img className="pull-left m-r-10 avatar-img" src="assets/images/avatar/3.jpg" alt="" />
                                                    <div className="notification-content">
                                                        <small className="notification-timestamp pull-right">02:34 PM</small>
                                                        <div className="notification-heading">Tasnim</div>
                                                        <div className="notification-text">Hi Teddy, Just wanted to let you ...</div>
                                                    </div>
                                                </a>
                                            </li>

                                            <li>
                                                <a href="">
                                                    <img className="pull-left m-r-10 avatar-img" src="assets/images/avatar/3.jpg" alt="" />
                                                    <div className="notification-content">
                                                        <small className="notification-timestamp pull-right">02:34 PM</small>
                                                        <div className="notification-heading">Ishrat Jahan</div>
                                                        <div className="notification-text">Hi Teddy, Just wanted to let you ...</div>
                                                    </div>
                                                </a>
                                            </li>
                                            <li className="text-center">
                                                <a href="" className="more-link">See All</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </li>
                            <li className="header-icon dib">
                                <i className="ti-email"></i>
                                <div className="drop-down">
                                    <div className="dropdown-content-heading">
                                        <span className="text-left">2 New Messages</span>
                                        <a href="email.html">
                                            <i className="ti-pencil-alt pull-right"></i>
                                        </a>
                                    </div>
                                    <div className="dropdown-content-body">
                                        <ul>
                                            <li className="notification-unread">
                                                <a href="">
                                                    <img className="pull-left m-r-10 avatar-img" src="assets/images/avatar/1.jpg" alt="" />
                                                    <div className="notification-content">
                                                        <small className="notification-timestamp pull-right">02:34 PM</small>
                                                        <div className="notification-heading">Saiul Islam</div>
                                                        <div className="notification-text">Hi Teddy, Just wanted to let you ...</div>
                                                    </div>
                                                </a>
                                            </li>

                                            <li className="notification-unread">
                                                <a href="">
                                                    <img className="pull-left m-r-10 avatar-img" src="assets/images/avatar/2.jpg" alt="" />
                                                    <div className="notification-content">
                                                        <small className="notification-timestamp pull-right">02:34 PM</small>
                                                        <div className="notification-heading">Ishrat Jahan</div>
                                                        <div className="notification-text">Hi Teddy, Just wanted to let you ...</div>
                                                    </div>
                                                </a>
                                            </li>

                                            <li>
                                                <a href="">
                                                    <img className="pull-left m-r-10 avatar-img" src="assets/images/avatar/3.jpg" alt="" />
                                                    <div className="notification-content">
                                                        <small className="notification-timestamp pull-right">02:34 PM</small>
                                                        <div className="notification-heading">Saiul Islam</div>
                                                        <div className="notification-text">Hi Teddy, Just wanted to let you ...</div>
                                                    </div>
                                                </a>
                                            </li>

                                            <li>
                                                <a href="">
                                                    <img className="pull-left m-r-10 avatar-img" src="assets/images/avatar/2.jpg" alt="" />
                                                    <div className="notification-content">
                                                        <small className="notification-timestamp pull-right">02:34 PM</small>
                                                        <div className="notification-heading">Ishrat Jahan</div>
                                                        <div className="notification-text">Hi Teddy, Just wanted to let you ...</div>
                                                    </div>
                                                </a>
                                            </li>
                                            <li className="text-center">
                                                <a href="" className="more-link">See All</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </li>
                            <li className="header-icon dib">
                                <img className="avatar-img" src="assets/images/avatar/1.jpg" alt="" />
                                <span className="user-avatar"> Name
                        <i className="ti-angle-down f-s-10"></i>
                                </span>
                                <div className="drop-down dropdown-profile">

                                    <div className="dropdown-content-body">
                                        <ul>
                                            <li>
                                                <a href="../fooadmin/app-profile.html">
                                                    <i className="ti-user"></i>
                                                    <span>Profile</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="../fooadmin/app-email.html">
                                                    <i className="ti-email"></i>
                                                    <span>Inbox</span>
                                                </a>
                                            </li>
                                            <li>
                                                <Link to="./Login">
                                                    <i className="ti-power-off"></i>
                                                    <span>Logout</span>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>


                <div className="content-wrap">
                    <div className="main">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-lg-8 p-0">
                                    <div className="page-header">
                                        <div className="page-title">
                                            <h1>Dashboard</h1>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 p-0">
                                    <div className="page-header">
                                        <div className="page-title">
                                            <ol className="breadcrumb text-right">
                                                <li>
                                                    <a>Main</a>
                                                </li>
                                                <li className="active">Dashboard</li>
                                            </ol>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="container-fluid">
                                <div className="row">

                                    <div className="col-sm-12 text-center same">

                                    <b>USERS</b>


                                    </div>
                                    <div className="col-sm-12">
                                    <table className="table" id="table">
                                            <thead>
                                            <tr>
                                                    <th className="text-center" scope="col">First Name</th>
                                                    <th className="text-center" scope="col">Last Name</th>
                                                    <th className="text-center" scope="col">Email</th>
                                                    <th className="text-center" scope="col">Location</th>
                                                    <th   scope="col">Active/inactive</th>
                                                    {/* <th className="text-center" scope="col">Edit user</th> */}


                                            </tr>
                                            </thead>
                                    <tbody>

                                            {
                                                this.state.posts.map((post, i) => {
                                                    return (
                                            <tr key={i}>
                                                    <td className="text-center" >{post.first_name}</td>
                                                    <td className="text-center" >{post.last_name}</td>

                                                    <td className="text-center" >{post.email}</td>
                                                    <td className="text-center" >{post.location}</td>
                                                    <td><input type="checkbox" checked={post.is_active} onChange={(e) => { this.checkboxChange(e, post) }} /> </td>
                                                    {/* <td > <input type="checkbox" checked={post.is_active} onChange={(e)=>{this.checkboxChange(e,post)}} /> </td> */}
                                                    {/* <td className="text-center"><button className="btn btn-info" onClick={(e)=>this.selectedRowToInput(e,post)}>Edit User</button></td> */}

                                            </tr>

                                                    );
                                                })
                                            }
                                    </tbody>

                                    </table>
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
        this.fetchPosts();
        this.toggleLoader();
    }
}




export default Users;
