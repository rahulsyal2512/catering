import React, { Component } from 'react';
import cookie from 'react-cookies';
import Helperdel from './Helperdel';
import Helper from './Helper';
import { Link } from 'react-router-dom';
class Salesgroup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            url: "http://192.168.1.16:3001/v1/",
            posts: [],
            name: "",
            SalesgroupName: "",
            editName: '',
            postId: 0
        };

        if (cookie.load('access_token') === undefined) {
            this.props.history.push('/login');
        }
    }
    name = (e) => {
        this.setState({ editName: e.target.value });
    }
    updatePostView = (post) => {
        let i = this.state.posts.findIndex((p) => {
            return post.id == p.id
        });
        this.state.posts[i].is_active = !this.state.posts[i].is_active;
        this.forceUpdate();
    }
    checkboxChange = (e, post) => {
        let body = JSON.stringify({
            id: post.id,
            is_active: !post.is_active
        });
        let res = Helper('updateSalesgroupStatus', 'POST', body);
        res.then((res) => {
            this.updatePostView(post);
        });
    }
    clearDefault =()=> 
    {
        document.getElementById("khalikrna").value="";       
        
    
    };

    fetchPosts = () => {

        let res = Helperdel("salesgroups", "GET");
        res.then((res) => {
            this.setState({
                posts: res,
            });

        });
    }


    selectedRowToInput = (e, post) => {
        this.setState({
            editName: post.name,
            postId : post.id
        });
    }

    updateRow = ()=>{
        let body = JSON.stringify({
            name: this.state.editName,
            id: this.state.postId
        });
        let res = Helper("updateSalesgroup/", 'POST', body);
        res.then((res) => {
            this.fetchPosts();
        });
    }


    submit = () => {
        let body = JSON.stringify({
            name: this.state.editName

        });

        let res = Helper("salesgroups", 'POST', body);
        res.then((res) => {
            this.fetchPosts();
        });
        this.clearDefault();
    }
    render() {
        return (
            <div>
                <div className="sidebar sidebar-hide-to-small sidebar-shrink sidebar-gestures">
                    <div className="nano">
                        <div className="nano-content">
                            <ul>
                                <li className="label">Main</li>
                                <li>
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



                                <li className="active">
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
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="col-sm-12 text-center same" ><b>SALES GROUP</b>
                                        <span><button type="button" className="btn btn-info pull-right" data-toggle="modal" data-target="#myModal">ADD GROUP</button></span>
                                    </div>
                                    <div className="modal" id="myModal">
                                        <div className="modal-dialog">
                                            <div className="modal-content">


                                                <div className="modal-header">
                                                    <h4 className="modal-title">Add Salesgroup</h4>
                                                    <button type="button" className="close" data-dismiss="modal">&times;</button>
                                                </div>


                                                <div className="modal-body">
                                                    <label for="Salesgroup-Name" className="namesales">Salesgroup Name</label>
                                                    <input type="text" className="form-control mycheckbox" id="khalikrna" placeholder="Name" onKeyUp={(e) => this.name(e)} required />
                                                </div>


                                                <div className="modal-footer">

                                                    <button type="button" className="btn btn-info pull-left" onClick={(e) => { this.submit(e) }} data-dismiss="modal">Submit</button>
                                                    <button type="button" className="btn btn-danger pull-right" data-dismiss="modal">Close</button>
                                                </div>

                                            </div>
                                        </div>

                                    </div>
                                    <div className="row">
                                        <div className="col-sm-12">
                                            <div className="modal" id="editModal">
                                                <div className="modal-dialog">
                                                    <div className="modal-content">

                                                        <div className="modal-header">
                                                            <h4 className="modal-title">Edit Salesgroup</h4>

                                                        </div>


                                                        <div className="modal-body">
                                                            <label for="Salesgroup-Name" className="namesales">Salesgroup Name</label>
                                                            <input type="text" className="form-control mycheckbox"  placeholder="Name" value={this.state.editName} onChange={(e) => { this.name(e) }} required />
                                                        </div>


                                                        <div className="modal-footer">

                                                            <button type="button" className="btn btn-info pull-left" id="editbtn" data-dismiss="modal" onClick={this.updateRow}>Submit</button>
                                                            <button type="button" className="btn btn-danger pull-right" data-dismiss="modal">Close</button>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-12">

                                            <table className="table" id="table">
                                                <thead>
                                                    <tr>
                                                        <th scope="col">Salesgroup Name</th>
                                                        <th className="text-center" scope="col">Active/Inactive</th>
                                                        <th scope="col">Edit Salesgroup</th>

                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {
                                                        this.state.posts.map((post, i) => {
                                                            return (
                                                                <tr key={i}>
                                                                    <td  >{post.name}</td>
                                                                    <td className="text-center"> <input type="checkbox" checked={post.is_active} onChange={(e) => { this.checkboxChange(e, post) }} /> </td>
                                                                    <td className="text-center"><button className="btn btn-info" data-toggle="modal" data-target="#editModal" onClick={(e) => { this.selectedRowToInput(e, post) }}><i class="fa fa-edit"></i> Edit </button></td>
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

            </div>
        );
    }
    componentDidMount() {
        this.fetchPosts();
    }
}

export default Salesgroup;
