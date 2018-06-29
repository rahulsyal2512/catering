import React, { Component } from 'react';

import {Link} from 'react-router-dom';

class Profile extends Component {
  render() {
    return (
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
                    <li className="active">
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
                                    <a href="#">
                                        <img className="pull-left m-r-10 avatar-img" src="assets/images/avatar/3.jpg" alt="" />
                                        <div className="notification-content">
                                            <small className="notification-timestamp pull-right">02:34 PM</small>
                                            <div className="notification-heading ">Mr. Saifun</div>
                                            <div className="notification-text">5 members joined today </div>
                                        </div>
                                    </a>
                                </li>

                                <li>
                                    <a href="#">
                                        <img className="pull-left m-r-10 avatar-img" src="assets/images/avatar/3.jpg" alt="" />
                                        <div className="notification-content">
                                            <small className="notification-timestamp pull-right">02:34 PM</small>
                                            <div className="notification-heading">Mariam</div>
                                            <div className="notification-text">likes a photo of you</div>
                                        </div>
                                    </a>
                                </li>

                                <li>
                                    <a href="#">
                                        <img className="pull-left m-r-10 avatar-img" src="assets/images/avatar/3.jpg" alt="" />
                                        <div className="notification-content">
                                            <small className="notification-timestamp pull-right">02:34 PM</small>
                                            <div className="notification-heading">Tasnim</div>
                                            <div className="notification-text">Hi Teddy, Just wanted to let you ...</div>
                                        </div>
                                    </a>
                                </li>

                                <li>
                                    <a href="#">
                                        <img className="pull-left m-r-10 avatar-img" src="assets/images/avatar/3.jpg" alt="" />
                                        <div className="notification-content">
                                            <small className="notification-timestamp pull-right">02:34 PM</small>
                                            <div className="notification-heading">Ishrat Jahan</div>
                                            <div className="notification-text">Hi Teddy, Just wanted to let you ...</div>
                                        </div>
                                    </a>
                                </li>
                                <li className="text-center">
                                    <a href="#" className="more-link">See All</a>
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
                                    <a href="#">
                                        <img className="pull-left m-r-10 avatar-img" src="assets/images/avatar/1.jpg" alt="" />
                                        <div className="notification-content">
                                            <small className="notification-timestamp pull-right">02:34 PM</small>
                                            <div className="notification-heading">Saiul Islam</div>
                                            <div className="notification-text">Hi Teddy, Just wanted to let you ...</div>
                                        </div>
                                    </a>
                                </li>

                                <li className="notification-unread">
                                    <a href="#">
                                        <img className="pull-left m-r-10 avatar-img" src="assets/images/avatar/2.jpg" alt="" />
                                        <div className="notification-content">
                                            <small className="notification-timestamp pull-right">02:34 PM</small>
                                            <div className="notification-heading">Ishrat Jahan</div>
                                            <div className="notification-text">Hi Teddy, Just wanted to let you ...</div>
                                        </div>
                                    </a>
                                </li>

                                <li>
                                    <a href="#">
                                        <img className="pull-left m-r-10 avatar-img" src="assets/images/avatar/3.jpg" alt="" />
                                        <div className="notification-content">
                                            <small className="notification-timestamp pull-right">02:34 PM</small>
                                            <div className="notification-heading">Saiul Islam</div>
                                            <div className="notification-text">Hi Teddy, Just wanted to let you ...</div>
                                        </div>
                                    </a>
                                </li>

                                <li>
                                    <a href="#">
                                        <img className="pull-left m-r-10 avatar-img" src="assets/images/avatar/2.jpg" alt="" />
                                        <div className="notification-content">
                                            <small className="notification-timestamp pull-right">02:34 PM</small>
                                            <div className="notification-heading">Ishrat Jahan</div>
                                            <div className="notification-text">Hi Teddy, Just wanted to let you ...</div>
                                        </div>
                                    </a>
                                </li>
                                <li className="text-center">
                                    <a href="#" className="more-link">See All</a>
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
                                <h1>Email </h1>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 p-0">
                        <div className="page-header">
                            <div className="page-title">
                                <ol className="breadcrumb text-right">
                                    <li><a href="#">My Account</a></li>
                                    <li><a href="#">Profile</a></li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="main-content">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="card alert">
                                <div className="card-body">
									<div className="user-profile">
										<div className="row">
											<div className="col-lg-4">
												<div className="user-photo m-b-30">
													<img className="img-responsive" src="assets/images/user-profile.jpg" alt="" />
												</div>
												<div className="user-work">
													<h4>work</h4>
													<div className="work-content">
														<h3>HTML Cooker Bangladesh </h3>
														<p>123, South Mugda</p>
														<p>Dhaka, 1214</p>
													</div>
													<div className="work-content">
														<h3>Unix Bangladesh</h3>
														<p>123, South Mugda</p>
														<p>Dhaka, 1214</p>
													</div>
												</div>
												<div className="user-skill">
													<h4>Skill</h4>
													<ul>
														<li><a href="#">Branding</a></li>
														<li><a href="#">UI/UX</a></li>
														<li><a href="#">Web Design</a></li>
														<li><a href="#">Wordpress</a></li>
														<li><a href="#">Magento</a></li>
													</ul>
												</div>
											</div>
											<div className="col-lg-8">
												<div className="user-profile-name">Saiful Islam</div>
												<div className="user-Location"><i className="ti-location-pin"></i> Dhaka, Bangladesh</div>
												<div className="user-job-title">Product Designer</div>
												<div className="ratings">
													<h4>Ratings</h4>
													<div className="rating-star">
														<span>8.9</span>
														<i className="ti-star color-primary"></i>
														<i className="ti-star color-primary"></i>
														<i className="ti-star color-primary"></i>
														<i className="ti-star color-primary"></i>
														<i className="ti-star"></i>
													</div>
												</div>
												<div className="user-send-message"><button className="btn btn-primary btn-addon" type="button"><i className="ti-email"></i>Send Message</button></div>
												<div className="custom-tab user-profile-tab">
													<ul className="nav nav-tabs" role="tablist">
														<li role="presentation" className="active"><a href="#1" aria-controls="1" role="tab" data-toggle="tab">About</a></li>
													</ul>
													<div className="tab-content">
														<div role="tabpanel" className="tab-pane active" id="1">
															<div className="contact-information">
																<h4>Contact information</h4>
																<div className="phone-content">
																	<span className="contact-title">Phone:</span>
																	<span className="phone-number">+8801629599859</span>
																</div>
																<div className="address-content">
																	<span className="contact-title">Address:</span>
																	<span className="mail-address">123, Rajar Goli, South Mugda</span>
																</div>
																<div className="email-content">
																	<span className="contact-title">Email:</span>
																	<span className="contact-email">hello@htmlcooker.com</span>
																</div>
																<div className="website-content">
																	<span className="contact-title">Website:</span>
																	<span className="contact-website">www.htmlcooker.com</span>
																</div>
																<div className="skype-content">
																	<span className="contact-title">Skype:</span>
																	<span className="contact-skype">htmlcooker</span>
																</div>
															</div>
															<div className="basic-information">
																<h4>Basic information</h4>
																<div className="birthday-content">
																	<span className="contact-title">Birthday:</span>
																	<span className="birth-date">January 31, 1990 </span>
																</div>
																<div className="gender-content">
																	<span className="contact-title">Gender:</span>
																	<span className="gender">Male</span>
																</div>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
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
}

export default Profile;
