import React, { Component } from 'react';
import cookie from 'react-cookies';
import Helper from './Helper';
import { Link } from 'react-router-dom';
class Preparation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            preparation: "",
            description: "",
            choice: "",
            serving_size: "",
            price: "",
            krochange1:"",
            krochange2:"",
            krochange3:"",
            krochange4:"",
            krochange5:"",


        };

        if (cookie.load('access_token') === undefined) {
            this.props.history.push('/login');
        }
    }
    preparation = (e) => {
        this.setState({ krochange1: e.target.value });
    }
    description = (e) => {
        this.setState({ krochange2: e.target.value });
    }
    choice = (e) => {
        this.setState({ krochange3: e.target.value });
    }
    serving_size = (e) => {
        this.setState({ krochange4: e.target.value });
    }
    price = (e) => {
        this.setState({ krochange5: e.target.value });
    }

    fetchPosts = () => {

        let res = Helper("preparations", "GET");
        res.then((res) => {
            this.setState({
                posts: res,
            });

        });
    }

    selectedRowToInput = (e, post) => {
        this.setState({
            krochange1: post.preparation,
            krochange2: post.description,
            krochange3: post.choice,
            krochange4: post.serving_size,
            krochange5: post.price,
            
        });
        // document.getElementById("krochange1").value = post.preparation;
        // document.getElementById("krochange2").value = post.description;
        // document.getElementById("krochange3").value = post.choice;
        // document.getElementById("krochange4").value = post.serving_size;
        // document.getElementById("krochange5").value = post.price;

        var edit = document.getElementById("editbtn");
        edit.addEventListener('click', () => {
            console.log(post.id);
            let body = JSON.stringify({
                        preparation: this.state.krochange1,
                        description: this.state.krochange2,
                        choice: this.state.krochange3,
                        serving_size: this.state.krochange4,
                        price: this.state.krochange5,
                        id: post.id
            });
            let res = Helper("updatePreparation", 'POST', body);
            res.then((res) => {
                this.fetchPosts();
            }); 
        })
  }

      submit = () => {
        let body = JSON.stringify({
            preparation: this.state.krochange1,
            description: this.state.krochange2,
            choice: this.state.krochange3,
            serving_size: this.state.krochange4,
            price: this.state.krochange5

        });

        let res = Helper(this.state.url+"preparations", 'POST', body);
        res.then((res) => {
            this.fetchPosts();
        });
    }
    render() {

        let style =
            {
                paddingTop: "10px",
                // color:"Blue",
                fontSize: "17px",

            };

        let mystyle =
            {
                width: "300px",
                borderColor: "#000",
                borderSize: "1px",
                border: "solid",
                borderWidth: "thin"
            };
        let font =
            {
                fontSize: "30px",
                fontFamily: "Bell MT"
            }
        let font1 =
            {
                fontSize: "20px"
            }
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
                    <li className="active">
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
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="col-sm-12 text-center same " ><b>Preparation</b>
                                        <button type="button" className="btn btn-info pull-right" data-toggle="modal" data-target="#myModal">ADD PREPARATION</button>
                                    </div>
                                    <div className="modal fade" id="myModal">
                                        <div className="modal-dialog ">
                                            <div className="modal-content ">


                                                <div className="modal-header">
                                                    <span className="modal-title" style={font}><b>Add Preparation</b></span>
                                                    <button type="button" className="close" style={font1} data-dismiss="modal">&times;</button>
                                                </div>


                                                <div className="modal-body">
                                                    <div className="row">
                                                        <div className=" col-lg-6 col-md-6 col-sm-6 col-xs-6 ">
                                                            <label for="Preparation-Name" style={style}>Preparation</label>
                                                            <input type="text" className="form-control" style={mystyle} placeholder=" Enter preparation.." onChange={(e) => this.preparation(e)} required />
                                                        </div>
                                                        <div className=" col-lg-6 col-md-6 col-sm-6  col-xs-6 " >

                                                            <label for="Description" style={style}>Description</label>
                                                            <input type="text" className="form-control" style={mystyle} placeholder="Enter Description.." onChange={(e) => this.description(e)} required />

                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className=" col-lg-6 col-md-6 col-sm-6 col-xs-6 ">

                                                            <label for="base-serving-size" style={style}>Choice</label>
                                                            <input type="number" className="form-control" style={mystyle} placeholder=" Enter your choice.. " onKeyUp={(e) => this.choice(e)} required />
                                                        </div>
                                                        <div className=" col-lg-6 col-md-6 col-sm-6 col-xs-6 ">

                                                            <label for="salesgroup-id" style={style}>Serving Size</label>
                                                            <input type="number" className="form-control" style={mystyle} placeholder="Enter Serving size.." onKeyUp={(e) => this.serving_size(e)} required />
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className=" col-lg-6 col-md-6 col-sm-6 col-xs-6 ">

                                                            <label for="salesgroup-id" style={style}> Price</label>
                                                            <input type="text" className="form-control" style={mystyle} placeholder="Enter Price.." onKeyUp={(e) => this.price(e)} required />

                                                        </div>

                                                    </div>

                                                </div>


                                                <div className="modal-footer">

                                                    <button type="button" className="btn btn-info pull-left" onClick={(e) => this.submit(e)} data-dismiss="modal">Submit</button>
                                                    <button type="button" className="btn btn-danger pull-right" data-dismiss="modal">C  lose</button>
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
                                                            <div className="row">
                                                                <div className=" col-lg-6 col-md-6 col-sm-6 col-xs-6 ">
                                                                    <label for="Preparation-Name" style={style}>Preparation</label>
                                                                    <input type="text" className="form-control" style={mystyle} value={this.state.krochange1} placeholder=" Enter preparation.." onChange={(e) => this.preparation(e)} required />
                                                                </div>
                                                                <div className=" col-lg-6 col-md-6 col-sm-6  col-xs-6 " >

                                                                    <label for="Description" style={style}>Description</label>
                                                                    <input type="text" className="form-control" style={mystyle} value={this.state.krochange2} placeholder="Enter Description.." onChange={(e) => this.description(e)} required />

                                                                </div>
                                                            </div>
                                                            <div className="row">
                                                                <div className=" col-lg-6 col-md-6 col-sm-6 col-xs-6 ">

                                                                    <label for="base-serving-size" style={style}>Choice</label>
                                                                    <input type="number" className="form-control" style={mystyle} value={this.state.krochange3} placeholder=" Enter your choice.. " onChange={(e) => this.choice(e)} required />
                                                                </div>
                                                                <div className=" col-lg-6 col-md-6 col-sm-6 col-xs-6 ">

                                                                    <label for="salesgroup-id" style={style}>Serving Size</label>
                                                                    <input type="number" className="form-control" style={mystyle} value={this.state.krochange4} placeholder="Enter Serving size.." onChange={(e) => this.serving_size(e)} required />
                                                                </div>
                                                            </div>
                                                            <div className="row">
                                                                <div className=" col-lg-6 col-md-6 col-sm-6 col-xs-6 ">

                                                                    <label for="salesgroup-id" style={style}> Price</label>
                                                                    <input type="text" className="form-control" style={mystyle} value={this.state.krochange5} placeholder="Enter Price.." onChange={(e) => this.price(e)} required />

                                                                </div>

                                                            </div>

                                                        </div>


                                                        <div className="modal-footer">

                                                            <button type="button" className="btn btn-info pull-left" id="editbtn" data-dismiss="modal">Submit</button>
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
                                                        <th scope="col">Preparation</th>
                                                        <th scope="col">Description</th>
                                                        <th scope="col">Choice</th>
                                                        <th scope="col">Serving Size</th>
                                                        <th scope="col" className="text-center">Price</th>
                                                        <th scope="col">Edit</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {
                                                        this.state.posts.map((post, i) => {
                                                            return (
                                                                <tr key={i}>
                                                                    <td >{post.preparation}</td>
                                                                    <td >{post.description}</td>
                                                                    <td >{post.choice}</td>
                                                                    <td >{post.serving_size}</td>
                                                                    <td >{post.price}</td>
                                                                    <td className="text-center"><button className="btn btn-info" data-toggle="modal" data-target="#editModal" onClick={(e)=>{this.selectedRowToInput(e,post)}}><i class="fa fa-edit"></i> Edit </button></td>
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

export default Preparation;
