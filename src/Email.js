import React, { Component } from 'react';
import cookie from 'react-cookies'
import {Link} from 'react-router-dom';

class Email extends Component {
    constructor(props) {
        super(props);
        
        if(cookie.load('access_token') === undefined)
		{
			this.props.history.push('/login');
		}
    }
   
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
                    <li className="active">
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
                </Link >
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
                    <div className="col-lg-8">
                        <div className="page-header">
                            <div className="page-title">
                                <h1>EMAIL</h1>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="page-header">
                            <div className="page-title">
                                <ol className="breadcrumb text-right">
                                    <li><a href="#">My Account</a></li>
                                    <li><a href="#">Email</a></li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="main-content">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="card alert">
                                <div className="card-header">
                                    <h4>Compose Mail </h4>
                                    <div className="card-header-right-icon">
                                        <ul>
                                                <ul className="card-option-dropdown dropdown-menu">
                                                    <li><a href="#"><i className="ti-loop"></i> Update data</a></li>
                                                    <li><a href="#"><i className="ti-menu-alt"></i> Detail log</a></li>
                                                    <li><a href="#"><i className="ti-pulse"></i> Statistics</a></li>
                                                    <li><a href="#"><i className="ti-power-off"></i> Clear ist</a></li>
                                                </ul>
                                            
                                        </ul>
                                    </div>
                                </div>
                                <div className="compose-email">
                                    <div className="mail-box">
                                        <aside className="sm-side">
                                            <div className="user-head">
                                                <a className="inbox-avatar" href="javascript:;">
                                                    <img src="assets/images/user.jpg" alt=""/>
                                                </a>
                                                <div className="user-name">
                                                    <h5><a href="#">Saiful Islam</a></h5>
                                                    <span><a href="#">htmlcooker@gmail.com</a></span>
                                                </div>
                                            </div>
                                            <div className="inbox-body text-center">
                                                <a href="#myModal" data-toggle="modal" title="Compose" className="btn btn-compose"> Compose</a>

                                                <div aria-hidden="true"  role="dialog" tabindex="-1" id="myModal" className="modal fade">
                                                    <div className="modal-dialog">
                                                        <div className="modal-content text-left">
                                                            <div className="modal-header">
                                                                <button aria-hidden="true" data-dismiss="modal" className="close" type="button"><i className="ti-close"></i></button>
                                                                <h4 className="modal-title">Compose</h4>
                                                            </div>
                                                            <div className="modal-body">
                                                                <form className="form-horizontal">
                                                                    <div className="form-group">
                                                                        <label className="col-lg-2 control-label">To</label>
                                                                        <div className="col-lg-10">
                                                                            <input type="text" placeholder="" id="inputEmail1" className="form-control"/>
                                                                        </div>
                                                                    </div>
                                                                    <div className="form-group">
                                                                        <label className="col-lg-2 control-label">Cc / Bcc</label>
                                                                        <div className="col-lg-10">
                                                                            <input type="text" placeholder="" id="cc" className="form-control"/>
                                                                        </div>
                                                                    </div>
                                                                    <div className="form-group">
                                                                        <label className="col-lg-2 control-label">Subject</label>
                                                                        <div className="col-lg-10">
                                                                            <input type="text" placeholder="" id="inputPassword1" className="form-control"/>
                                                                        </div>
                                                                    </div>
                                                                    <div className="form-group">
                                                                        <label className="col-lg-2 control-label">Message</label>
                                                                        <div className="col-lg-10">
                                                                            <textarea rows="10" cols="30" className="form-control" id="texarea1" name="texarea"></textarea>
                                                                        </div>
                                                                    </div>

                                                                    <div className="form-group">
                                                                        <div className="col-lg-offset-2 col-lg-10">
                                                                            <span className="btn green fileinput-button"><i className="fa fa-plus fa fa-white"></i>
																				<span>Attachment</span>
																				<input type="file" name="files[]" multiple=""/>
                                                                            </span>
                                                                            <button className="btn btn-primary" type="submit">Send</button>
                                                                        </div>
                                                                    </div>
                                                                </form>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <ul className="inbox-nav inbox-divider">
                                                <li className="active">
                                                    <a href="#"><i className="fa fa-inbox"></i> Inbox <span className="badge badge-success pull-right m-t-12">2</span></a>
                                                </li>
                                                <li>
                                                    <a href="#"><i className="fa fa-envelope-o"></i> Sent Mail</a>
                                                </li>
                                                <li>
                                                    <a href="#"><i className="fa fa-bookmark-o"></i> Important</a>
                                                </li>
                                                <li>
                                                    <a href="#"><i className=" fa fa-external-link"></i> Drafts <span className="badge badge-info pull-right m-t-12">30</span></a>
                                                </li>
                                                <li>
                                                    <a href="#"><i className=" fa fa-trash-o"></i> Trash</a>
                                                </li>
                                            </ul>
                                            <ul className="nav nav-pills nav-stacked labels-info inbox-divider">
                                                <li>
                                                    <h4>Labels</h4> </li>
                                                <li>
                                                    <a href="#"> <i className=" fa fa-sign-blank text-danger"></i> Work </a>
                                                </li>
                                                <li>
                                                    <a href="#"> <i className=" fa fa-sign-blank text-success"></i> Design </a>
                                                </li>
                                                <li>
                                                    <a href="#"> <i className=" fa fa-sign-blank text-info "></i> Family </a>
                                                </li>
                                                <li>
                                                    <a href="#"> <i className=" fa fa-sign-blank text-warning "></i> Friends </a>
                                                </li>
                                                <li>
                                                    <a href="#"> <i className=" fa fa-sign-blank text-primary "></i> Office </a>
                                                </li>
                                            </ul>
                                            <ul className="nav nav-pills nav-stacked labels-info ">
                                                <li>
                                                    <h4>Buddy online</h4> </li>
                                                <li>
                                                    <a href="#"> <i className=" fa fa-circle text-success"></i>Saiful Islam
                                                        <p>I do not think</p>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#"> <i className=" fa fa-circle text-danger"></i>Dark Coders
                                                        <p>Busy with coding</p>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#"> <i className=" fa fa-circle text-muted "></i>Mentaalist
                                                        <p>I out of control</p>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#"> <i className=" fa fa-circle text-muted "></i>H3s4m
                                                        <p>I am not here</p>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#"> <i className=" fa fa-circle text-muted "></i>Dead man
                                                        <p>I do not think</p>
                                                    </a>
                                                </li>
                                            </ul>

                                            <div className="inbox-body text-center">
                                                <div className="btn-group">
                                                    <a className="btn mini btn-primary" href="javascript:;">
                                                        <i className="fa fa-plus"></i>
                                                    </a>
                                                </div>
                                                <div className="btn-group">
                                                    <a className="btn mini btn-success" href="javascript:;">
                                                        <i className="fa fa-phone"></i>
                                                    </a>
                                                </div>
                                                <div className="btn-group">
                                                    <a className="btn mini btn-info" href="javascript:;">
                                                        <i className="fa fa-cog"></i>
                                                    </a>
                                                </div>
                                            </div>

                                        </aside>
                                        <aside className="lg-side">
                                            <div className="inbox-head">
                                                <h3>Inbox</h3>
                                                <form action="#" className="pull-right position">
                                                    <div className="input-append">
                                                        <input type="text" className="sr-input" placeholder="Search Mail"/>
                                                        <button className="btn sr-btn" type="button"><i className="fa fa-search"></i></button>
                                                    </div>
                                                </form>
                                            </div>
											<div className="mail-option">
												<div className="chk-all">
													<input type="checkbox" className="mail-checkbox mail-group-checkbox" id="checkAll"/>
													<div className="btn-group">
														<a data-toggle="dropdown" href="#" className="btn mini all m-l-10" aria-expanded="false">All<i className="fa fa-angle-down "></i></a>
														<ul className="card-option-dropdown dropdown-menu">
															<li><a href="#"> None</a></li>
															<li><a href="#"> Read</a></li>
															<li><a href="#"> Unread</a></li>
														</ul>
													</div>
												</div>

												<div className="btn-group">
													<a data-original-title="Refresh" data-placement="top" data-toggle="dropdown" href="#" className="btn mini tooltips">
														<i className=" fa fa-refresh"></i>
													</a>
												</div>
												<div className="btn-group hidden-phone">
													<a data-toggle="dropdown" href="#" className="btn mini blue" aria-expanded="false"> More<i className="fa fa-angle-down "></i></a>
													
													<ul className="card-option-dropdown dropdown-menu">
														<li><a href="#"><i className="ti-pencil"></i> Mark as Read</a></li>
														<li><a href="#"><i className="ti-menu-alt"></i>Spam</a></li>
														<li><a href="#"><i className="ti-trash"></i>Delete</a></li>
													</ul>
												</div>
												<div className="btn-group">
													<a data-toggle="dropdown" href="#" className="btn mini blue">Move to<i className="fa fa-angle-down "></i></a>
													<ul className="card-option-dropdown dropdown-menu">
														<li><a href="#">Draft</a></li>
														<li><a href="#">Spam</a></li>
														<li><a href="#"> Delete</a></li>
													</ul>
												</div>

												<ul className="unstyled inbox-pagination">
													<li><span>1-50 of 234</span></li>
													<li>
														<a className="np-btn" href="#"><i className="fa fa-angle-left  pagination-left"></i></a>
													</li>
													<li>
														<a className="np-btn" href="#"><i className="fa fa-angle-right pagination-right"></i></a>
													</li>
												</ul>
											</div>
											<table className="table table-inbox table-hover table-responsive">
												<tbody>
													<tr className="unread">
														<td className="inbox-small-cells">
															<input type="checkbox" className="mail-checkbox"/>
														</td>
														<td className="inbox-small-cells"><i className="ti-star"></i></td>
														<td className="view-message  dont-show">PHPClass</td>
														<td className="view-message ">Added a new className: Login Class Fast Site</td>
														<td className="view-message  inbox-small-cells"><i className="fa fa-paperclip"></i></td>
														<td className="view-message  text-right">9:27 AM</td>
													</tr>
													<tr className="unread">
														<td className="inbox-small-cells">
															<input type="checkbox" className="mail-checkbox"/>
														</td>
														<td className="inbox-small-cells"><i className="ti-star"></i></td>
														<td className="view-message dont-show">Google Webmaster </td>
														<td className="view-message">Improve the search presence of WebSite</td>
														<td className="view-message inbox-small-cells"></td>
														<td className="view-message text-right">March 15</td>
													</tr>
													<tr className="">
														<td className="inbox-small-cells">
															<input type="checkbox" className="mail-checkbox"/>
														</td>
														<td className="inbox-small-cells"><i className="ti-star"></i></td>
														<td className="view-message dont-show">JW Player</td>
														<td className="view-message">Last Chance: Upgrade to Pro for </td>
														<td className="view-message inbox-small-cells"></td>
														<td className="view-message text-right">March 15</td>
													</tr>
													<tr className="">
														<td className="inbox-small-cells">
															<input type="checkbox" className="mail-checkbox"/>
														</td>
														<td className="inbox-small-cells"><i className="ti-star"></i></td>
														<td className="view-message dont-show">Tim Reid, S P N</td>
														<td className="view-message">Boost Your Website Traffic</td>
														<td className="view-message inbox-small-cells"></td>
														<td className="view-message text-right">April 01</td>
													</tr>
													<tr className="">
														<td className="inbox-small-cells">
															<input type="checkbox" className="mail-checkbox"/>
														</td>
														<td className="inbox-small-cells"><i className="ti-star inbox-started"></i></td>
														<td className="view-message dont-show">Freelancer.com <span className="badge badge-danger pull-right m-t-6">urgent</span></td>
														<td className="view-message">Stop wasting your visitors </td>
														<td className="view-message inbox-small-cells"></td>
														<td className="view-message text-right">May 23</td>
													</tr>
													<tr className="">
														<td className="inbox-small-cells">
															<input type="checkbox" className="mail-checkbox"/>
														</td>
														<td className="inbox-small-cells"><i className="ti-star inbox-started"></i></td>
														<td className="view-message dont-show">WOW Slider </td>
														<td className="view-message">New WOW Slider v7.8 - 67% off</td>
														<td className="view-message inbox-small-cells"><i className="fa fa-paperclip"></i></td>
														<td className="view-message text-right">March 14</td>
													</tr>
													<tr className="">
														<td className="inbox-small-cells">
															<input type="checkbox" className="mail-checkbox"/>
														</td>
														<td className="inbox-small-cells"><i className="ti-star inbox-started"></i></td>
														<td className="view-message dont-show">LinkedIn Pulse</td>
														<td className="view-message">The One Sign Your Co-Worker Will Stab</td>
														<td className="view-message inbox-small-cells"><i className="fa fa-paperclip"></i></td>
														<td className="view-message text-right">Feb 19</td>
													</tr>
													<tr className="">
														<td className="inbox-small-cells">
															<input type="checkbox" className="mail-checkbox"/>
														</td>
														<td className="inbox-small-cells"><i className="ti-star"></i></td>
														<td className="view-message dont-show">Drupal Community<span className="badge badge-success pull-right m-t-6">megazine</span></td>
														<td className="view-message view-message">Welcome to the Drupal Community</td>
														<td className="view-message inbox-small-cells"></td>
														<td className="view-message text-right">March 04</td>
													</tr>
													<tr className="">
														<td className="inbox-small-cells">
															<input type="checkbox" className="mail-checkbox"/>
														</td>
														<td className="inbox-small-cells"><i className="ti-star"></i></td>
														<td className="view-message dont-show">Facebook</td>
														<td className="view-message view-message">Somebody requested a new password </td>
														<td className="view-message inbox-small-cells"></td>
														<td className="view-message text-right">June 13</td>
													</tr>
													<tr className="">
														<td className="inbox-small-cells">
															<input type="checkbox" className="mail-checkbox"/>
														</td>
														<td className="inbox-small-cells"><i className="ti-star"></i></td>
														<td className="view-message dont-show">Skype <span className="badge badge-info pull-right m-t-6">family</span></td>
														<td className="view-message view-message">Password successfully changed</td>
														<td className="view-message inbox-small-cells"></td>
														<td className="view-message text-right">March 24</td>
													</tr>
													<tr className="">
														<td className="inbox-small-cells">
															<input type="checkbox" className="mail-checkbox"/>
														</td>
														<td className="inbox-small-cells"><i className="ti-star inbox-started"></i></td>
														<td className="view-message dont-show">Google+</td>
														<td className="view-message">alireza, do you know</td>
														<td className="view-message inbox-small-cells"></td>
														<td className="view-message text-right">March 09</td>
													</tr>
													<tr className="">
														<td className="inbox-small-cells">
															<input type="checkbox" className="mail-checkbox"/>
														</td>
														<td className="inbox-small-cells"><i className="ti-star inbox-started"></i></td>
														<td className="dont-show">Zoosk </td>
														<td className="view-message">7 new singles we think you'll like</td>
														<td className="view-message inbox-small-cells"><i className="fa fa-paperclip"></i></td>
														<td className="view-message text-right">May 14</td>
													</tr>
													<tr className="">
														<td className="inbox-small-cells">
															<input type="checkbox" className="mail-checkbox"/>
														</td>
														<td className="inbox-small-cells"><i className="ti-star"></i></td>
														<td className="view-message dont-show">LinkedIn </td>
														<td className="view-message">Alireza: Nokia Networks, System Group and </td>
														<td className="view-message inbox-small-cells"><i className="fa fa-paperclip"></i></td>
														<td className="view-message text-right">February 25</td>
													</tr>
													<tr className="">
														<td className="inbox-small-cells">
															<input type="checkbox" className="mail-checkbox"/>
														</td>
														<td className="inbox-small-cells"><i className="ti-star"></i></td>
														<td className="dont-show">Facebook</td>
														<td className="view-message view-message">Your account was recently logged into</td>
														<td className="view-message inbox-small-cells"></td>
														<td className="view-message text-right">March 14</td>
													</tr>
													<tr className="">
														<td className="inbox-small-cells">
															<input type="checkbox" className="mail-checkbox"/>
														</td>
														<td className="inbox-small-cells"><i className="ti-star"></i></td>
														<td className="view-message dont-show">Twitter</td>
														<td className="view-message">Your Twitter password has been changed</td>
														<td className="view-message inbox-small-cells"></td>
														<td className="view-message text-right">April 07</td>
													</tr>
													<tr className="">
														<td className="inbox-small-cells">
															<input type="checkbox" className="mail-checkbox"/>
														</td>
														<td className="inbox-small-cells"><i className="ti-star"></i></td>
														<td className="view-message dont-show">InternetSeer Website Monitoring</td>
														<td className="view-message">http://golddesigner.org/ Performance Report</td>
														<td className="view-message inbox-small-cells"></td>
														<td className="view-message text-right">July 14</td>
													</tr>
													<tr className="">
														<td className="inbox-small-cells">
															<input type="checkbox" className="mail-checkbox"/>
														</td>
														<td className="inbox-small-cells"><i className="ti-star inbox-started"></i></td>
														<td className="view-message dont-show">AddMe.com</td>
														<td className="view-message">Submit Your Website to the AddMe Business Directory</td>
														<td className="view-message inbox-small-cells"></td>
														<td className="view-message text-right">August 10</td>
													</tr>
													<tr className="">
														<td className="inbox-small-cells">
															<input type="checkbox" className="mail-checkbox"/>
														</td>
														<td className="inbox-small-cells"><i className="ti-star"></i></td>
														<td className="view-message dont-show">Terri Rexer, S P N</td>
														<td className="view-message view-message">Forget Google AdWords: Un-Limited Clicks fo</td>
														<td className="view-message inbox-small-cells"><i className="fa fa-paperclip"></i></td>
														<td className="view-message text-right">April 14</td>
													</tr>
													<tr className="">
														<td className="inbox-small-cells">
															<input type="checkbox" className="mail-checkbox"/>
														</td>
														<td className="inbox-small-cells"><i className="ti-star"></i></td>
														<td className="view-message dont-show">Bertina </td>
														<td className="view-message">IMPORTANT: Don't lose your domains!</td>
														<td className="view-message inbox-small-cells"><i className="fa fa-paperclip"></i></td>
														<td className="view-message text-right">June 16</td>
													</tr>
													<tr className="">
														<td className="inbox-small-cells">
															<input type="checkbox" className="mail-checkbox"/>
														</td>
														<td className="inbox-small-cells"><i className="ti-star inbox-started"></i></td>
														<td className="view-message dont-show">Laura Gaffin, S P N </td>
														<td className="view-message">Your Website On Google (Higher Rankings Are Better)</td>
														<td className="view-message inbox-small-cells"></td>
														<td className="view-message text-right">August 10</td>
													</tr>
													<tr className="">
														<td className="inbox-small-cells">
															<input type="checkbox" className="mail-checkbox"/>
														</td>
														<td className="inbox-small-cells"><i className="ti-star"></i></td>
														<td className="view-message dont-show">Facebook</td>
														<td className="view-message view-message">Saiful Islam Login faild</td>
														<td className="view-message inbox-small-cells"><i className="fa fa-paperclip"></i></td>
														<td className="view-message text-right">feb 14</td>
													</tr>
												</tbody>
											</table>

                                        </aside>
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

export default Email;
