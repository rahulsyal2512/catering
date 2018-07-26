import React, { Component } from 'react';

import { Link } from 'react-router-dom';

class Reports extends Component {
    render() {
        return (
            <div>

                <div>
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
                    <li>
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
                    <li className="active">
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

                </div>
            </div>
                );
              }
            }
            
            export default Reports;
