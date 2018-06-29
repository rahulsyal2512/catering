import React, { Component } from 'react';
import cookie from 'react-cookies';
import Helper from './Helper';
import 'whatwg-fetch';
import { Link } from 'react-router-dom';
import Header from './header';
class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            url: "http://192.168.1.16:3001/v1/",
            posts: [],
            loc: [],
            menu_name: "",
            description: "",
            location_id: "",
            item_id: "",
            image: null
        };

        if (cookie.load('access_token') === undefined) {
            this.props.history.push('/login');
        }
    }
    menu_name = (e) => {
        this.setState({ menu_name: e.target.value });
    }
    description = (e) => {
        this.setState({ description: e.target.value });
    }
    // location_id = (e) => {
    //     this.setState({ location_id: e.target.value });
    // }
    item_id = (e) => {
        this.setState({ item_id: e.target.value });
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
                image: input.files[0]
            }
            );
    }
    submit = () => {
        let images = new FormData();
        images.append('menu_name', this.state.menu_name);
        images.append('description', this.state.description);
        images.append('location_id', this.state.location_id);
        images.append('item_id', this.state.item_id);
        images.append('image',this.state.image);        
      
        let body = images

        let res = Header(this.state.url + "menus", 'POST', body);
        res.then((res) => {
            this.fetchPosts();
        });
    }


    dropdown = (e) => {
        let selectedValue = e.target.options[e.target.selectedIndex].value;
        this.setState({
            location_id: selectedValue,
        });
    }
    fetchLocation = () => {
        let res = Helper(this.state.url + "locations", "GET");
        res.then((res) => {
            this.setState({
                loc: res,
            });
        });
    }

    fetchPosts = () => {
        let res = Helper(this.state.url + "menus", "GET");
        res.then((res) => {
            this.setState({
                posts: res,
            });


        });
    }
    selectedRowToInput = (e, post) => {
        document.getElementById("krochange1").value = post.menu_name;
        document.getElementById("krochange2").value = post.description;
        document.getElementById("krochange3").value = post.location_id;
        document.getElementById("krochange4").value = post.item_id;

        var edit = document.getElementById("editbtn");
        edit.addEventListener('click', () => {
            console.log(post);
            let body = JSON.stringify({
                menu_name: this.state.menu_name,
                description: this.state.description,
                location_id: this.state.location_id,
                item_id: this.state.item_id

            });
            let res = Helper(this.state.url + "menus/" + post.menu_id, 'PUT', body);
            console.log(post.menu_id);
            res.then((res) => {
                this.fetchPosts();
            });
        })
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
                                                            <input type="text" className="form-control" style={mystyle} placeholder="Enter Item.." onKeyUp={(e) => this.item_id(e)} required />
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
                                            <div className="modal" id="editModal">
                                                <div className="modal-dialog">
                                                    <div className="modal-content">


                                                        <div className="modal-header">
                                                            <h4 className="modal-title">Edit Menu</h4>

                                                        </div>


                                                        <div className="modal-body">
                                                            <div className="row">
                                                                <div className=" col-md-6 col-xl-3 ">
                                                                    <label for="Menu Name" style={style}>Menu Name</label>
                                                                    <input type="text" className="form-control" style={mystyle} id="krochange1" placeholder=" Enter Menu Name.." onKeyUp={(e) => this.menu_name(e)} required />
                                                                </div>
                                                                <div className=" col-lg-6 col-md-6 col-sm-6  col-xs-6 " >

                                                                    <label for="Description" style={style}>Description</label>
                                                                    <input type="text" className="form-control" style={mystyle} id="krochange2" placeholder="Enter Description.." onKeyUp={(e) => this.description(e)} required />

                                                                </div>
                                                            </div>
                                                            <div className="row">
                                                                <div className=" col-md-6 col-xl-3 ">

                                                                    <label for="Location" style={style}>Location</label><br/>
                                                                    <select name="location" style={selection} onChange={(e) => { this.dropdown(e) }} >
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
                                                                    <input type="text" className="form-control" style={mystyle} id="krochange4" placeholder="Enter Item.." onKeyUp={(e) => this.item_id(e)} required />
                                                                </div>
                                                            </div>

                                                            <div className="row">
                                                                <div className=" col-md-6 col-xl-3 ">

                                                                    <label for="Image" style={style}>Image</label>
                                                                    <input type="file" id="avatar" name="avatar" accept="image/png, image/jpeg" />
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
                                                                    <td className="text-right"><img src={"http://192.168.1.16:3001/" + post.image} id="imgg" style={image1} /></td>
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
    componentDidMount() {
        this.fetchLocation();
        this.fetchPosts();

    }

}

export default Menu;
