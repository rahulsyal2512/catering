import React, { Component } from 'react';
import cookie from 'react-cookies';
// import Helperdel from './Helperdel';
import $ from 'jquery';
import Helper from './Helper';
import { Link } from 'react-router-dom';
import {
    ToastContainer,
    toast
} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loader1 from './Loader1';

class Location extends Component {
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
            url: "http://192.168.43.14:3001/v1/",
            posts: [],
            location: "",
            address: "",
            phone_number: "",
            tax_rate: "",
            category: [

                { is_beverage: "" },
                { is_dessert: "" },
                { is_salad: "" },
                { is_sandwich: "" }
            ],
            editLocation: "",
            editAddress: "",
            editPhoneNumber: "",
            editTaxRate: "",
            editBeverage: "",
            editDessert: "",
            editSalad: "",
            editSandwich: "",
            postId: 0,
            postId1:"",
            loader: true
        };
        if (cookie.load('access_token') === undefined) {
            this.props.history.push('/login');
        }
    } getValueUsingClass() {
        var chkArray = [];

        $(".chk:checked").each(function () {
            chkArray.push($(this).val());
        });

        var selected;
        selected = chkArray.join(',');
    }

    location = (e) => {
        this.setState({ editLocation: e.target.value });
    }
    address = (e) => {
        this.setState({ editAddress: e.target.value });
    }
    phone_number = (e) => {
        this.setState({ editPhoneNumber: e.target.value });
    }
    tax_rate = (e) => {
        this.setState({ editTaxRate: e.target.value });
    }
    // category = (e) => {

    //     this.setState({
    //         is_beverage: e.target.checked,
    //         is_dessert: e.target.checked,
    //         is_salad: e.target.checked,
    //         is_sandwich: e.target.checked
    //     });
    // }


    fetchPosts = () => {
        let res = Helper("locations", "GET");
        res.then((res) => {
            this.setState({
                posts: res,
            });
            this.notify("Posts Fetched Successfully");
        });
    }

    fetchPostsAgain = () => {
        let res = Helper("locations", "GET");
        res.then((res) => {
            this.setState({
                posts: res,
            });
        });
    }

    is_beverage = (e) => {
        this.setState(
            {
                editBeverage: e.target.checked
            }
        );
    }
    is_dessert = (e) => {
        this.setState(
            {
                editDessert: e.target.checked
            }
        );
    }

    is_salad = (e) => {
        this.setState(
            {
                editSalad: e.target.checked
            }
        );
    }
    is_sandwich = (e) => {
        this.setState(
            {
                editSandwich: e.target.checked
            }
        );
    }

    getValueUsingClass() {
        var chkArray = [];

        $(".chk:checked").each(function () {
            chkArray.push($(this).val());
        });

        var selected;
        selected = chkArray.join(',');
        console.log(selected);
        return selected;
    }
    getValueUsingClass1() {
        var chkArray = [];

        $(".chk1:checked").each(function () {
            chkArray.push($(this).val());
        });

        var selected;
        selected = chkArray.join(',');
        console.log(selected);
        return selected;
    }
    selectedRowToInput = (e, post) => {
        let options = post.category.split(",");
        let beverage = (options.findIndex((option) => {
            return (option.toLowerCase()) === 'beverage'
        })) != -1 ? true: false;
        let salad = (options.findIndex((option) => {
            return (option.toLowerCase()) === 'salad'
        })) != -1 ? true: false;

        let dessert = (options.findIndex((option) => {
            return (option.toLowerCase()) === 'dessert'
        })) != -1 ? true: false;

        let sandwich = (options.findIndex((option) => {
            return (option.toLowerCase()) === 'sandwich'
        })) != -1 ? true: false;

        this.setState({
            editLocation: post.location,
            editAddress: post.address,
            editPhoneNumber: post.phone_number,
            editTaxRate: post.tax_rate,
            editBeverage : beverage,
            editSalad : salad,
            editDessert : dessert,
            editSandwich : sandwich,
            postId1: post.id
        });
    }

    updateRow = ()=>{
      this.toggleLoader();
        let newOptions = this.getValueUsingClass1();
        let body = JSON.stringify({
            location: this.state.editLocation,
            address: this.state.editAddress,
            phone_number: this.state.editPhoneNumber,
            tax_rate: this.state.editTaxRate,
            category: newOptions,
            id: this.state.postId1

        });
        let res = Helper("updateLocation/", 'POST', body);
        res.then((res) => {
            this.fetchPostsAgain();
            this.toggleLoader();
        });
        this.notify1("Location Edited");

    }

    submit = () => {
      this.toggleLoader();
        let options = this.getValueUsingClass();
        let body = JSON.stringify({
            location: this.state.editLocation,
            address: this.state.editAddress,
            phone_number: this.state.editPhoneNumber,
            tax_rate: this.state.editTaxRate,
            category: options
        });


        let res = Helper("locations", 'POST', body);
        res.then((res) => {
            this.fetchPostsAgain();
            this.toggleLoader();
        });
        this.notify1("Location Added Successfully");

    }
    render() {

        let margindena =
        {
            marginTop: "10px",
            marginLeft: "10px"
        }

        let margindena1 =
        {
            marginTop: "10px",
            marginRight: "10px"
        }

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

                                <li className="active">
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
                                    <div className="col-sm-12 text-center same " ><b>Location</b>
                                        <button type="button" className="btn btn-info pull-right" data-toggle="modal" data-target="#myModal">ADD LOCATION</button>
                                    </div>
                                    <div className="modal fade" id="myModal">
                                        <div className="modal-dialog ">

                                            <div className="modal-content ">


                                                <div className="modal-header">
                                                    <span className="modal-title" style={font}><b>Location</b></span>
                                                    <button type="button" className="close" style={font1} data-dismiss="modal">&times;</button>
                                                </div>


                                                <div className="modal-body">
                                                    <div className="row">
                                                        <div className=" col-md-6 col-xl-3 ">
                                                            <label for="Location" style={style}>Location</label>
                                                            <input type="text" className="form-control" style={mystyle} placeholder=" Enter location.." onKeyUp={(e) => this.location(e)} required />
                                                        </div>
                                                        <div className=" col-lg-6 col-md-6 col-sm-6  col-xs-6 " >

                                                            <label for="Address" style={style}>Address</label>
                                                            <input type="text" className="form-control" style={mystyle} placeholder="Enter Address.." onKeyUp={(e) => this.address(e)} required />

                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className=" col-md-6 col-xl-3 ">

                                                            <label for="Phone Number" style={style}>Phone Number</label>
                                                            <input type="number" className="form-control" style={mystyle} placeholder=" Enter your phone number.. " onKeyUp={(e) => this.phone_number(e)} required />
                                                        </div>
                                                        <div className=" col-lg-6 col-md-6 col-sm-6 col-xs-6 ">

                                                            <label for="Tax Rate" style={style}>Tax rate</label>
                                                            <input type="number" className="form-control" style={mystyle} placeholder="Enter Tax rate.." onKeyUp={(e) => this.tax_rate(e)} required />
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className=" col-sm-12 ">

                                                            <div className="row">
                                                                <div className="col-xs-3" style={style} >

                                                                    <input type="checkbox" value="" class="chk" onChange={(e) => this.is_beverage(e)} /><span style={style}>Beverage</span>
                                                                </div>
                                                                <div className="col-xs-3" style={style}>

                                                                    <input type="checkbox" value="Salad" class="chk" onChange={(e) => this.is_salad(e)} /><span style={style}>Salad</span>
                                                                </div>
                                                                <div className="col-xs-3" style={style}>

                                                                    <input type="checkbox" value="Deserts" class="chk" onChange={(e) => this.is_dessert(e)} /><span style={style}>Dessert</span>
                                                                </div>
                                                                <div className="col-xs-3" style={style}>

                                                                    <input type="checkbox" value="Sandwich" class="chk" onChange={(e) => this.is_sandwich(e)} class="chk" /><span style={style}> Sandwich</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>


                                                <div className="modal-footer">

                                                    <button type="button" className="btn btn-info pull-left" onClick={(e) => this.submit(e)} data-dismiss="modal">Submit</button>
                                                    <button type="button" className="btn btn-danger pull-right" data-dismiss="modal">Close</button>
                                                </div>

                                            </div>

                                        </div>



                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-12">
                                    <div className="modal fade" id="editModal">
                                        <div className="modal-dialog">
                                            <div className="modal-content">


                                                <div className="modal-header">
                                                    <h4 className="modal-title">Edit Location</h4>

                                                </div>


                                                <div className="modal-body">
                                                    <div className="row">
                                                        <div className=" col-md-6 col-xl-3 ">
                                                            <label for="Location" style={style}>Location</label>
                                                            <input type="text" className="form-control" style={mystyle} value={this.state.editLocation} placeholder="Enter Location.." onChange={(e) => this.location(e)} required />
                                                        </div>
                                                        <div className=" col-md-6 col-xl-3 " >

                                                            <label for="Address" style={style}>Address</label>
                                                            <input type="text" className="form-control" style={mystyle} value={this.state.editAddress} placeholder="Enter Address.." onChange={(e) => this.address(e)} required />

                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className=" col-md-6 col-xl-3 ">

                                                            <label for="phone number" style={style}>Phone Number</label>
                                                            <input type="number" className="form-control" style={mystyle} value={this.state.editPhoneNumber} placeholder=" Enter your choice.. " onChange={(e) => this.phone_number(e)} required />
                                                        </div>
                                                        <div className=" col-md-6 col-xl-3 ">

                                                            <label for="tax rate" style={style}>Tax Rate</label>
                                                            <input type="number" className="form-control" style={mystyle} value={this.state.editTaxRate} placeholder="Enter tax rate.." onChange={(e) => this.tax_rate(e)} required />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-sm-12 ">
                                                        <div className="row ">
                                                            <div className="col-xs-3" style={style} >

                                                                <input type="checkbox" value="Beverage" checked={this.state.editBeverage} class="chk1" onChange={(e) => this.is_beverage(e)} /><span style={style}>Beverage</span>
                                                            </div>
                                                            <div className="col-xs-3" style={style} >
                                                                <input type="checkbox" value="Salad" checked={this.state.editSalad} class="chk1" onChange={(e) => this.is_salad(e)} /><span style={style}>Salad</span>
                                                            </div>
                                                            <div className="col-xs-3" style={style}>

                                                                <input type="checkbox" value="Dessert" checked={this.state.editDessert} class="chk1" onChange={(e) => this.is_dessert(e)} /><span style={style}>Dessert</span>
                                                            </div>
                                                            <div className="col-xs-3" style={style}>

                                                                <input type="checkbox" value="Sandwich" checked={this.state.editSandwich} class="chk1" onChange={(e) => this.is_sandwich(e)} /><span style={style}> Sandwich</span>
                                                            </div>
                                                        </div>
                                                    </div>



                                                    <div className="modal-footer" >

                                                        <button type="button" className="btn btn-info pull-left" id="editbtn" data-dismiss="modal" style={margindena} onClick={this.updateRow}>Submit</button>
                                                        <button type="button" className="btn btn-danger pull-right" data-dismiss="modal" style={margindena1}>Close</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-12">

                                    <table className="table" id="table">
                                        <thead>
                                            <tr>
                                                <th scope="col">Location</th>
                                                <th scope="col">Address</th>
                                                <th scope="col">Phone Number</th>
                                                <th scope="col">Tax Rate</th>
                                                <th scope="col">Category</th>
                                                <th scope="col"></th>

                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                this.state.posts.map((post, i) => {
                                                    return (
                                                        <tr key={i}>
                                                            <td >{post.location}</td>
                                                            <td >{post.address}</td>
                                                            <td >{post.phone_number}</td>
                                                            <td >{post.tax_rate}</td>
                                                            <td >{post.category}</td>
                                                            <td className="text-center"><button className="btn btn-info" data-toggle="modal" data-target="#editModal" onClick={(e) => this.selectedRowToInput(e, post)}><i class="fa fa-edit"></i> Edit </button></td>
                                                        </tr>

                                                    );
                                                })
                                            }
                                        </tbody>
                                    </table>
                                    <ToastContainer autoClose={4000}/>
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
    toggleLoader(){
        this.setState({
            loader: !this.state.loader
        });
    }
    componentDidMount() {
        this.fetchPosts();
        this.toggleLoader();
    }
}

export default Location;
