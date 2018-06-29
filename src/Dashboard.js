import React, { Component } from 'react';
import cookie from 'react-cookies';
import {Link} from 'react-router-dom';

class Dashboard extends Component {
    
    constructor(props) {
        super(props);
       
        // if(cookie.load('access_token') === undefined)
		// {
		// 	this.props.history.push('/login');
		// }
    }
  render() {
    return (
 <div>     
      <div className="sidebar sidebar-hide-to-small sidebar-shrink sidebar-gestures">
        <div className="nano">
            <div className="nano-content">
                <ul>
                    <li className="label">Main</li>
                    <li className="active">
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


                <div className="main-content">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="card p-0">
                                        <div className="stat-widget-three">
                                            <div className="stat-icon pelacolor p-48">
                                                <i className="ti-eye"></i>
                                            </div>
                                            <div className="stat-content p-30">
                                                <div className="stat-text">Order Received</div>
                                                <div className="stat-digit">6,250</div>
                                            </div>

                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-6">
                                    <div className="card p-0">
                                        <div className="stat-widget-three">
                                            <div className="stat-icon bg-success p-48">
                                                <i className="ti-bag"></i>
                                            </div>
                                            <div className="stat-content p-30">
                                                <div className="stat-text">Today Delevered</div>
                                                <div className="stat-digit">2,584</div>
                                            </div>

                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-6">
                                    <div className="card p-0">
                                        <div className="stat-widget-three">
                                            <div className="stat-icon bg-warning p-48">
                                                <i className="ti-user"></i>
                                            </div>
                                            <div className="stat-content p-30">
                                                <div className="stat-text">New Customer</div>
                                                <div className="stat-digit">9,874</div>
                                            </div>

                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-6">
                                    <div className="card p-0">
                                        <div className="stat-widget-three">
                                            <div className="stat-icon dujacolor p-48">
                                                <i className="ti-money"></i>
                                            </div>
                                            <div className="stat-content p-30">
                                                <div className="stat-text">Net Earning</div>
                                                <div className="stat-digit">3,5621</div>
                                            </div>

                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-6">
                                    <div className="card bg-success">
                                        <div className="stat-widget-six">
                                            <div className="stat-icon p-15">
                                                <i className="ti-stats-up"></i>
                                            </div>
                                            <div className="stat-content p-t-12 p-b-12">
                                                <div className="text-left dib">
                                                    <div className="stat-heading">Daily sales</div>
                                                    <div className="stat-text">Total: 9765</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-6 ">
                                    <div className="card bg-danger ">
                                        <div className="stat-widget-six">
                                            <div className="stat-icon p-15">
                                                <i className="ti-stats-down"></i>
                                            </div>
                                            <div className="stat-content p-t-12 p-b-12">
                                                <div className="text-left dib">
                                                    <div className="stat-heading">Daily Expense</div>
                                                    <div className="stat-text">Total: 6765</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                   
                                </div>
                                
                            </div>
                           
                        </div>
                    
                       

                    </div>
                    
                    
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="card alert alag">
                                <div className="card-header">
                                    <h4>Menu List</h4>
                                    <li className="doc-link">
                                        <a href="#">
                                            <i className="ti-link"></i>
                                        </a>
                                    </li>

                                </div>
                                <div className="card-body">
                                    <table className="table table-responsive table-hover ">
                                        <tbody>
                                            <tr>
                                                <td className="no-border">Chicken Burger</td>
                                                <td className="no-border">
                                                    <span className="btn btn-primary">$21</span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Hot Dog</td>
                                                <td>
                                                    <span className="btn btn-success">$15</span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Soft Drinks</td>
                                                <td>
                                                    <span className="btn btn-danger">$30</span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Nudulles</td>
                                                <td>
                                                    <span className="btn btn-primary">$25</span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Thai Soup</td>
                                                <td>
                                                    <span className="btn btn-success">$29</span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Fried Rice</td>
                                                <td>
                                                    <span className="btn btn-danger">$14</span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Vegitables</td>
                                                <td>
                                                    <span className="btn btn-success">$18</span>
                                                </td>
                                            </tr>
                                        </tbody>

                                    </table>
                                    
                                </div>
                            </div>
                        </div>


                        <div className="col-lg-8">
                            <div className="card alert">
                                <div className="card-header">
                                    <h4>Online Order List </h4>
                                    <div className="card-header-right-icon">
                                        <ul>
                                            <ul className="card-option-dropdown dropdown-menu">
                                                <li>
                                                    <a href="#">
                                                        <i className="ti-loop"></i> Update data</a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <i className="ti-menu-alt"></i> Detail log</a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <i className="ti-pulse"></i> Statistics</a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <i className="ti-power-off"></i> Clear ist</a>
                                                </li>
                                            </ul>
                                          
                                            <li className="doc-link">
                                                <a href="#">
                                                    <i className="ti-link"></i>
                                                </a>
                                            </li>
                                    
                                        </ul>
                                        
                                    </div>
                                </div>
                                <div className="card-body">
                                    <table className="table table-responsive table-hover ">
                                        <thead>
                                            <tr>
                                                <th>Name</th>
                                                <th>Order ID</th>
                                                <th>Product</th>
                                                <th>Quantity</th>
                                                <th>Price</th>
                                                <th>Delevery</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>Saiful Islam</td>
                                                <td>#12456</td>
                                                <td>Hot Dog</td>
                                                <td>3</td>
                                                <td className="color-success">$21.56</td>
                                                <td>
                                                    <span className="btn btn-success">Paid</span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Jannatul Mariam</td>
                                                <td>#12456</td>
                                                <td>Hot Dog</td>
                                                <td>3</td>
                                                <td className="color-warning">$21.56</td>
                                                <td>
                                                    <span className="btn btn-warning">Pending</span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Anik Hasan</td>
                                                <td>#12456</td>
                                                <td>Hot Dog</td>
                                                <td>3</td>
                                                <td className="color-danger">$21.56</td>
                                                <td>
                                                    <span className="btn btn-danger">Cancel</span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Micheal Qin</td>
                                                <td>#12456</td>
                                                <td>Hot Dog</td>
                                                <td>3</td>
                                                <td className="color-success">$21.56</td>
                                                <td>
                                                    <span className="btn btn-success">paid</span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>John Doe</td>
                                                <td>#12456</td>
                                                <td>Hot Dog</td>
                                                <td>3</td>
                                                <td className="color-success">$21.56</td>
                                                <td>
                                                    <span className="btn btn-success">Paid</span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Jannatul Tasnim</td>
                                                <td>#12456</td>
                                                <td>Hot Dog</td>
                                                <td>3</td>
                                                <td className="color-warning">$21.56</td>
                                                <td>
                                                    <span className="btn btn-warning">Pending</span>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
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

export default Dashboard;
