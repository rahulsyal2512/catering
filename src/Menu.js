import React, { Component } from 'react';
import cookie from 'react-cookies';
import Helper from './Helper';
import 'whatwg-fetch';
import { Link } from 'react-router-dom';
import Header from './header';
import {
    ToastContainer,
    toast
} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loader1 from './Loader1';
class Menu extends Component {
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
    constructor(props) {
        super(props);
        this.state = {
            url: "http://192.168.43.14:3001/v1/",
            posts: [],
            loc: [],
            menu_name: "",
            description: "",
            location_id: "",
            data: "",
            image: null,
            editMenuName: "",
            editDescription: "",
            editLocationId: "",
            editItemId: "",
            editImage: null,
            postId: 0,
            postId1: 0,
            image_updated:false,
            loader: true

        };

        if (cookie.load('access_token') === undefined) {
            this.props.history.push('/login');
        }
    }
    menu_name = (e) => {
        this.setState({ editMenuName: e.target.value });
    }
    description = (e) => {
        this.setState({ editDescription: e.target.value });
    }
    // location_id = (e) => {
    //     this.setState({ location_id: e.target.value });
    // }
    item_id = (e) => {
        this.setState({ editItemId: e.target.value });
    }

    fileSelect = (e) => {
        var input = e.target;
        var reader = new FileReader();
        reader.onload = function () {
            var storeImg = reader.result;
            var img = document.getElementById('img');
            img.src = storeImg;
        };
        reader.readAsDataURL(input.files[0]);
        this.setState
            (
            {
                editImage: input.files[0]
            }
            );
    }

    editFileSelect = (e) => {
        var input = e.target;
        var reader = new FileReader();
        reader.onload = function () {
            var storeImg = reader.result;
            var img2 = document.getElementById('img2');
            img2.src = storeImg;
        };
        reader.readAsDataURL(input.files[0]);
        this.setState
            (
            {
                editImage: input.files[0],
                image_updated: true
            }
            );

    }

    submit = () => {
      this.toggleLoader();
        let data = new FormData();
        data.append('menu_name', this.state.editMenuName);
        data.append('description', this.state.editDescrition);
        data.append('location_id', this.state.editLocationId);
        data.append('item_id', this.state.editItemId);
        data.append('image', this.state.editImage);

        let body = data

        let res = Header(this.state.url+"menus", 'POST', body);
        res.then((res) => {
            this.toggleLoader();

            this.fetchPostsAgain();

        });
    this.notify1("Menu Added Successfully ");

    }


    dropdown = (e) => {
        let selectedValue = e.target.options[e.target.selectedIndex].value;
        this.setState({
            editLocationId: selectedValue,
        });
    }
    fetchLocation = () => {
        let res = Helper("locations", "GET");
        res.then((res) => {
            this.setState({
                loc: res,
            });
        });
    }

    fetchPosts = () => {
        let res = Helper("menus", "GET");
        res.then((res) => {
            this.setState({
                posts: res,
            });
        });
    this.notify("Posts Fetched Successfully");

    }
    fetchPostsAgain = () => {
        let res = Helper("menus", "GET");
        res.then((res) => {
            this.setState({
                posts: res,
            });


        });
    }

    selectedRowToInput = (e, post) => {
        this.setState({
            editMenuName: post.menu_name,
            editDescription: post.description,
            editLocationId: post.location_id,
            editItemId: post.item_id,
            editImage: post.image,
            postId1: post.menu_id
        });
        console.log(post.menu_id);
    }

    updateRow = () => {
      this.toggleLoader();
        let editData = new FormData();
        editData.append('menu_name', this.state.editMenuName);
        editData.append('description', this.state.editDescription);
        editData.append('location_id', this.state.editLocationId);
        editData.append('item_id', this.state.editItemId);
        editData.append('image', this.state.editImage);
        editData.append('id', this.state.postId1);
        editData.append('image_updated', this.state.image_updated);

        let body = editData
        let res = Header(this.state.url+"updateMenu/", 'POST', body);
        res.then((res) => {
            this.fetchPostsAgain();
            this.toggleLoader();

        });

        this.notify1("Menu Editing Done");
    }

    render() {

         let selection = {
            width: "300px",
            height: "40px",
            color: "black"
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
        let image1 =
        {
            marginTop: "10px",
            height: "50px",
            width: "50px",
            marginLeft: "20px"
        }
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
                                <li className="active">
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
                                    <div className="col-sm-12 text-center same " ><b>Menu</b>
                                        <button type="button" className="btn btn-info pull-right" data-toggle="modal" data-target="#myModal">ADD MENU</button>
                                    </div>
                                    <div className="modal fade" id="myModal">
                                        <div className="modal-dialog ">
                                            <div className="modal-content ">


                                                <div className="modal-header">
                                                    <span className="modal-title" style={font}><b>Add Menu</b></span>
                                                    <button type="button" className="close" style={font1} data-dismiss="modal">&times;</button>
                                                </div>


                                                <div className="modal-body">
                                                    <div className="row">
                                                        <div className=" col-md-6 col-xl-3 ">
                                                            <label for="Menu Name" style={style}>Menu Name</label>
                                                            <input type="text" className="form-control" style={mystyle} placeholder=" Enter Menu Name.." onKeyUp={(e) => this.menu_name(e)} required />
                                                        </div>
                                                        <div className=" col-lg-6 col-md-6 col-sm-6  col-xs-6 " >

                                                            <label for="Description" style={style}>Description</label>
                                                            <input type="text" className="form-control" style={mystyle} placeholder="Enter Description.." onKeyUp={(e) => this.description(e)} required />

                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className=" col-md-6 col-xl-3 ">

                                                            <label for="Location" style={style}>Location</label><br />
                                                            <select name="location" style={selection} onChange={(e) => { this.dropdown(e) }} >
                                                                <option value="Select from Below..">Select from Below..</option>
                                                                {
                                                                    this.state.loc.map((post, i) => {
                                                                        return (
                                                                            <option value={post.id}>{post.location}</option>
                                                                        );
                                                                    })
                                                                }
                                                            </select>
                                                            {/* <input type="text" className="form-control" style={mystyle} placeholder=" Enter your location.. " onKeyUp={(e) => this.location_id(e)} required /> */}
                                                        </div>
                                                        <div className=" col-md-6 col-xl-3 ">

                                                            <label for="Item" style={style}>Item</label>
                                                            <input type="number" className="form-control" style={mystyle} placeholder="Enter Item.." onKeyUp={(e) => this.item_id(e)} required />
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className=" col-md-6 col-xl-3 ">

                                                            <label for="Image" style={style}>Image</label><br />
                                                            SELECT A FILE : <input type="file" accept="image/*" onChange={(e) => this.fileSelect(e)} />
                                                            <img id="img" style={image1} />

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
                                    <div className="row">
                                        <div className="col-sm-12">
                                            <div className="modal fade" id="editModal">
                                                <div className="modal-dialog">
                                                    <div className="modal-content">


                                                        <div className="modal-header">
                                                            <h4 className="modal-title">Edit Menu</h4>
                                                        </div>

                                                        <div className="modal-body">
                                                            <div className="row">
                                                                <div className=" col-md-6 col-xl-3 ">
                                                                    <label for="Menu Name" style={style}>Menu Name</label>
                                                                    <input type="text" className="form-control" style={mystyle} value={this.state.editMenuName} placeholder=" Enter Menu Name.." onChange={(e) => this.menu_name(e)} required />
                                                                </div>
                                                                <div className=" col-lg-6 col-md-6 col-sm-6  col-xs-6 " >

                                                                    <label for="Description" style={style}>Description</label>
                                                                    <input type="text" className="form-control" style={mystyle} value={this.state.editDescription} placeholder="Enter Description.." onChange={(e) => this.description(e)} required />

                                                                </div>
                                                            </div>
                                                            <div className="row">
                                                                <div className=" col-md-6 col-xl-3 ">

                                                                    <label for="Location" style={style}>Location</label><br />
                                                                    <select name="location" style={selection} onChange={(e) => { this.dropdown(e) }}value={this.state.editLocationId} >

                                                                        {
                                                                            this.state.loc.map((post, i) => {
                                                                                return (
                                                                                    <option value={post.id}>{post.location}</option>
                                                                                );
                                                                            })
                                                                        }
                                                                    </select>
                                                                </div>
                                                                <div className=" col-md-6 col-xl-3 ">

                                                                    <label for="Item" style={style}>Item</label>
                                                                    <input type="number" className="form-control" style={mystyle} value={this.state.editItemId} placeholder="Enter Item.." onChange={(e) => this.item_id(e)} required />
                                                                </div>
                                                            </div>

                                                            <div className="row">
                                                                <div className=" col-md-6 col-xl-3 ">

                                                                    <label for="Image" style={style}>Image</label><br />
                                                                    SELECT A FILE : <input type="file" accept="image/*" onChange={(e) => this.editFileSelect(e)} />
                                                                    <img src={"http://192.168.43.14:3001/"+ this.state.editImage} id="img2" style={image1} />
                                                                </div>
                                                            </div>

                                                        </div>


                                                        <div className="modal-footer">

                                                            <button type="button" className="btn btn-info pull-left" id="editbtn" data-dismiss="modal"  onClick={this.updateRow}>Submit</button>
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
                                                        <th scope="col">Menu Name</th>
                                                        <th scope="col">Description</th>
                                                        <th scope="col">Location</th>
                                                        <th scope="col">Item</th>
                                                        <th scope="col">IMAGE</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {
                                                        this.state.posts.map((post, i) => {
                                                            return (
                                                                <tr key={i}>
                                                                    <td >{post.menu_name}</td>
                                                                    <td >{post.description}</td>
                                                                    <td className="text-left" >{post.location_id}</td>
                                                                    <td className="text-center">{post.item_id}</td>
                                                                    <td className="text-right"><img src={"http://192.168.43.14:3001/" + post.image} style={image1} /></td>
                                                                    <td className="text-center"><button className="btn btn-info" data-toggle="modal" data-target="#editModal"
                                                                        onClick={(e) => { this.selectedRowToInput(e, post) }}><i class="fa fa-edit"></i> Edit </button></td>
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
    toggleLoader(){
        this.setState({
            loader: !this.state.loader
        });
    }
    componentDidMount() {
        this.fetchLocation();
        this.fetchPosts();
        this.toggleLoader();
    }

}

export default Menu;
