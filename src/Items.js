import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Helper from './Helper';
import './Item.css';
import cookie from 'react-cookies';
import Loader1 from './Loader1';
import {
    ToastContainer,
    toast
} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
class Items extends Component {
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
            // url: "http://192.168.1.16:3001/v1/",
            posts: [],
            prep: [],
            sales: [],
            name: "",
            base_price: "",
            base_serving_size: "",
            preparation_id: "",
            salesgroup_id: "",
            description: "",
            is_gluten_free: "",
            is_vegetarian: "",
            is_vegan: "",
            is_dairy_free: "",
            salesgroup_name: "",
            editName: "",
            editBasePrice: "",
            editBaseServingPrice: "",
            editPreparationId: "",
            editSalesgroupId: "",
            editDescription: "",
            editGluten: "",
            editDiary: "",
            editVegan: "",
            editVegetarian: "",
            postId: 0,
            loader: true
        };

        if (cookie.load('access_token') === undefined) {
            this.props.history.push('/login');
        }
    }
    name = (e) => {
        this.setState({ editName: e.target.value });
    }
    base_price = (e) => {
        this.setState({ editBasePrice: e.target.value });
    }
    base_serving_size = (e) => {
        this.setState({ editBaseServingPrice: e.target.value });
    }
    description = (e) => {
        this.setState({ editDescription: e.target.value });
    }
    is_dairy_free = (e) => {
        this.setState({ editDiary: e.target.checked });
    }
    is_gluten_free = (e) => {
        this.setState({ editGluten: e.target.checked });
    }
    is_vegan = (e) => {
        console.log(e);
        this.setState({ editVegan: e.target.checked });
    }
    is_vegetarian = (e) => {
        this.setState({ editVegetarian :e.target.checked });
    }


    dropdown = (e) => {
        let selectedValue = e.target.options[e.target.selectedIndex].value;
        this.setState({
            editPreparationId: selectedValue,
        });
    }
    dropdown1 = (e) => {
        let salesgrp = e.target.options[e.target.selectedIndex].value;
        console.log(salesgrp);
        this.setState({
            editSalesgroupId: salesgrp,
        });
    }


    submit = () => {
      this.toggleLoader();

        let body = JSON.stringify({
            name: this.state.editName,
            base_price: this.state.editBasePrice,
            base_serving_size: this.state.editBaseServingPrice,
            description: this.state.editDescription,
            salesgroup_id: this.state.editSalesgroupId,
            preparation_id: this.state.editPreparationId,
            is_dairy_free: this.state.editDiary,
            is_gluten_free: this.state.editGluten,
            is_vegan: this.state.editVegan,
            is_vegetarian: this.state.editVegetarian


        });

        let res = Helper("items", 'POST', body);
        res.then((res) => {

            this.fetchPostsAgain();
            this.toggleLoader();

        });
    this.notify1("Item Added");

    }

    selectedRowToInput = (e, post) => {
        this.setState({
            editName: post.name,
            editBasePrice: post.base_price,
            editBaseServingPrice: post.base_serving_size,
            editSalesgroupId: post.salesgroup_id,
            editDescription: post.description,
            editPreparationId: post.preparation_id,
            editGluten: post.is_gluten_free,
            editDiary: post.is_dairy_free,
            editVegan: post.is_vegan,
            editVegetarian: post.is_vegetarian,
            postId: post.id
        });
    }
    updateRow = () => {
      this.toggleLoader();
        let body = JSON.stringify({
            name: this.state.editName,
            base_price: this.state.editBasePrice,
            base_serving_size: this.state.editBaseServingPrice,
            description: this.state.editDescription,
            salesgroup_id: this.state.editSalesgroupId,
            preparation_id: this.state.editPreparationId,
            is_dairy_free: this.state.editDiary,
            is_gluten_free: this.state.editGluten,
            is_vegan: this.state.editVegan,
            is_vegetarian: this.state.editVegetarian,
            id: this.state.postId
        });
        let res = Helper("updateItem/", 'POST', body);
        res.then((res) => {

            this.fetchPostsAgain();
            this.toggleLoader();

        });
        this.notify1("Item Edited Successfully ");

    }

fetchPosts = () => {

    let res = Helper("items", "GET");
    res.then((res) => {
        this.setState({
            posts: res,
        });
    });
    this.notify("Items Fetched Successfuly");

}

fetchPostsAgain = () => {

    let res = Helper("items", "GET");
    res.then((res) => {
        this.setState({
            posts: res,
        });
    });

}
fetchPreparation = () => {

    let res = Helper("preparations", "GET");
    res.then((res) => {
        this.setState({
            prep: res,
        });


    });
}

fetchSalesgroup = () => {
    let res = Helper("salesgroups", "GET");
    res.then((res) => {
        this.setState({
            sales: res,
        });


    });
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
        //   color:"Blue",
        fontWeight: "bold",
        fontSize: "17px",
        marginLeft: "4px"

    };
    let style1 = {
        fontSize: "23px",
        color: "Red",
        textAlign: "Center"
    };

    let mystyle =
    {
        width: "300px",
        borderColor: "#000",
        borderSize: "1px",
        border: "solid",
        borderWidth: "thin",
        marginLeft: "5px"
    };
    return (
        <div>
             <ToastContainer autoClose={4000}/>
             <Loader1 loader={this.state.loader}/>

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
                            <li className="active">
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
                                <div className="col-lg-12 col-md-8 col-sm-6 col-xs-4 text-center same"><b>ITEMS</b>
                                    <span><button type="button" className="btn btn-info col-lg-2 pull-right" data-toggle="modal" data-target="#myModal" >ADD ITEM</button></span>

                                </div>


                                <div className="modal  fade col-xs-12" id="myModal">
                                    <div className="modal-dialog">
                                        <div className="modal-content">


                                            <div className="modal-header text-center">
                                                <h4 className="modal-title" style={style1}>Add Item</h4>

                                            </div>


                                            <div className="modal-body ">

                                                <div className="row">
                                                    <div className=" col-xl-12 col-md-6">
                                                        <label for="Salesgroup-Name" style={style}>Item Name</label>
                                                        <input type="text" className="form-control" style={mystyle} placeholder=" Enter item name....." onChange={(e) => this.name(e)} required />
                                                    </div>
                                                    <div className=" col-lg-6 col-md-6 col-sm-6  col-xs-6 " >

                                                        <label for="Base-price" style={style}>Base Price</label>
                                                        <input type="number" className="form-control" style={mystyle} placeholder="Enter base price.." onChange={(e) => this.base_price(e)} required />

                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-xl-12 col-md-6 ">

                                                        <label for="base-serving-size" style={style}>Base Serving Size</label>
                                                        <input type="number" className="form-control" style={mystyle} placeholder=" Enter base serving size.. " onChange={(e) => this.base_serving_size(e)} required />
                                                    </div>
                                                    <div className=" col-xl-12 col-md-6">

                                                        <label for="salesgroup-id" style={style}>Salesgroup Id</label><br />
                                                        <select name="salegroup_id" style={selection} onChange={(e) => { this.dropdown1(e) }} >
                                                            <option >Select from below..</option>

                                                            {

                                                                this.state.sales.map((post, i) => {
                                                                    return (
                                                                        <option value={post.id}>{post.name}</option>
                                                                    );
                                                                })
                                                            }
                                                        </select>
                                                        {/* <input type="number" className="form-control" style={mystyle} placeholder="Enter salesgroup id..." onChange={(e)=>this.salesgroup_id(e)} required/> */}
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className=" col-xl-12 col-md-6">

                                                        <label for="salesgroup-id" style={style}> Description</label>
                                                        <input type="text" className="form-control" style={mystyle} placeholder="Enter  description..." onChange={(e) => this.description(e)} required />

                                                    </div>
                                                    <div className=" col-xl-12 col-md-6">

                                                        <label for="preparation-id" style={style}>Preparation id</label><br />
                                                        <select name="preparation" style={selection} onChange={(e) => { this.dropdown(e) }} >
                                                            <option >Select from below..</option>
                                                            {
                                                                this.state.prep.map((post, i) => {
                                                                    return (
                                                                        <option value={post.id}>{post.preparation}</option>
                                                                    );
                                                                })
                                                            }
                                                        </select>

                                                        {/* <input type="text" className="form-control" style={mystyle} placeholder="Enter preapartion..." onChange={(e)=>this.preparation_id(e)} required/> */}
                                                    </div>
                                                </div>

                                                <div className="row" style={style}>
                                                    <div className="col-xs-3" style={style} >
                                                        <input type="checkbox" onClick={(e) => this.is_dairy_free(e)} /><span style={style}>Dairy free</span>
                                                    </div>
                                                    <div className="col-xs-3" style={style}>

                                                        <input type="checkbox" onClick={(e) => this.is_gluten_free(e)} /><span style={style}>Gluten free</span>
                                                    </div>
                                                    <div className="col-xs-3" style={style}>

                                                        <input type="checkbox" onClick={(e) => this.is_vegan(e)} /><span style={style}>Vegan</span>
                                                    </div>
                                                    <div className="col-xs-3" style={style}>

                                                        <input type="checkbox" onClick={(e) => this.is_vegetarian(e)} /><span style={style}> Vegetarian</span>
                                                    </div>
                                                </div>

                                            </div>


                                            <div className="modal-footer">

                                                <button type="button" className="btn btn-info  pull-left" onClick={(e) => this.submit(e)} data-dismiss="modal">Submit</button>
                                                <button type="button" className="btn btn-danger pull-right" data-dismiss="modal"><i className="fa fa-times"></i>&nbsp;&nbsp;Close</button>
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
                                                        <h4 className="modal-title">Edit Salesgroup</h4>

                                                    </div>


                                                    <div className="row">
                                                        <div className=" col-xl-12 col-md-6">
                                                            <label for="Salesgroup-Name" style={style}>Item Name</label>
                                                            <input type="text" className="form-control" style={mystyle} value={this.state.editName} placeholder=" Enter item name....." onChange={(e) => this.name(e)} required />
                                                        </div>
                                                        <div className="col-xl-12 col-md-6" >

                                                            <label for="Base-price" style={style}>Base Price</label>
                                                            <input type="number" className="form-control" style={mystyle} value={this.state.editBasePrice} placeholder="Enter base price.." onChange={(e) => this.base_price(e)} required />

                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className=" col-xl-12 col-md-6 ">

                                                            <label for="base-serving-size" style={style}>Base Serving Size</label>
                                                            <input type="number" className="form-control" style={mystyle} value={this.state.editBaseServingPrice} placeholder=" Enter base serving size.. " onChange={(e) => this.base_serving_size(e)} required />
                                                        </div>
                                                        <div className=" col-xl-12 col-md-6">

                                                            <label for="salesgroup-id" style={style}>Salesgroup Id</label><br />
                                                            <select name="salegroup_id" value={this.state.editSalesgroupId} style={selection} onChange={(e) => { this.dropdown1(e) }} >

                                                                {
                                                                    this.state.sales.map((post, i) => {
                                                                        return (
                                                                            <option value={post.id}>{post.name}</option>
                                                                        );
                                                                    })
                                                                }
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className=" col-xl-12 col-md-6">

                                                            <label for="salesgroup-id" style={style}> Description</label>
                                                            <input type="text" className="form-control" style={mystyle} value={this.state.editDescription} placeholder="Enter  description..." onChange={(e) => this.description(e)} required />

                                                        </div>
                                                        <div className=" col-xl-12 col-md-6">

                                                            <label for="preparation-id" style={style}>Preparation id</label><br />
                                                            <select name="preparation" style={selection} value={this.state.editPreparationId} onChange={(e) => { this.dropdown(e) }} >
                                                                {
                                                                    this.state.prep.map((post, i) => {
                                                                        return (
                                                                            <option value={post.id}>{post.preparation}</option>
                                                                        );
                                                                    })
                                                                }
                                                            </select>

                                                            {/* <input type="text" className="form-control" style={mystyle} value={this.state.krochange} placeholder="Enter preapartion..." onChange={(e)=>this.preparation_id(e)} required/> */}
                                                        </div>
                                                    </div>

                                                    <div className="row" style={style}>
                                                        <div className="col-xl-12" style={style} >
                                                            <input type="checkbox" checked={this.state.editDiary} onClick={(e) => this.is_dairy_free(e)} /><span style={style}>Dairy free</span>
                                                        </div>
                                                        <div className="col-xl-12" style={style}>

                                                            <input type="checkbox" checked={this.state.editGluten} onClick={(e) => this.is_gluten_free(e)} /><span style={style}>Gluten free</span>
                                                        </div>
                                                        <div className="col-xl-12" style={style}>

                                                            <input type="checkbox" checked={this.state.editVegan} onClick={(e) => this.is_vegan(e)} /><span style={style}>Vegan</span>
                                                        </div>
                                                        <div className="col-xl-12" style={style}>

                                                            <input type="checkbox" checked={this.state.editVegetarian} onClick={(e) => this.is_vegetarian(e)} /><span style={style}> Vegetarian</span>
                                                        </div>
                                                    </div>


                                                    <div className="modal-footer">

                                                        <button type="button" className="btn btn-info pull-left" id="editbtn" data-dismiss="modal" onClick={this.updateRow}>Submit</button>
                                                        <button type="button" className="btn btn-danger pull-right" data-dismiss="modal">Close</button>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-12">
                                    <table className="table table-bordered" id="table">
                                        <thead>
                                            <tr>
                                                <th scope="col">Item name</th>
                                                <th scope="col">Base Price</th>
                                                <th scope="col">Base serving size</th>
                                                <th scope="col">Preparation Id </th>
                                                <th scope="col">Description</th>
                                                <th scope="col">Salesgroup Id</th>
                                                <th scope="col" className="text-center">Gluten Free</th>
                                                <th scope="col" className="text-center">Vegan </th>
                                                <th scope="col" className="text-center">Vegetarian</th>
                                                <th scope="col" className="text-center">Dairy Free</th>
                                                <th scope="col">Edit</th>



                                            </tr>
                                        </thead>
                                        <tbody>

                                            {
                                                this.state.posts.map((post, i) => {
                                                    return (
                                                        <tr key={i}>
                                                            <td  >{post.name}</td>
                                                            <td  >{post.base_price}</td>
                                                            <td  >{post.base_serving_size}</td>

                                                            <td  >{post.preparation_id}</td>
                                                            <td  >{post.description}</td>

                                                            <td  >{post.salesgroup_name}</td>
                                                            <td className="text-center"> <input type="checkbox" className="checkBoxDisabled" disabled checked={post.is_gluten_free} /> </td>
                                                            <td className="text-center"> <input type="checkbox" className="checkBoxDisabled" disabled checked={post.is_vegan} /> </td>
                                                            <td className="text-center"> <input type="checkbox" className="checkBoxDisabled" disabled checked={post.is_vegetarian} /> </td>
                                                            <td className="text-center"> <input type="checkbox" className="checkBoxDisabled" disabled checked={post.is_dairy_free} /> </td>
                                                            <td className="tet-center"><button className="btn btn-info" data-toggle="modal" data-target="#editModal" onClick={(e) => this.selectedRowToInput(e, post)}><i class="fa fa-edit"></i> Edit </button></td>
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
componentDidMount() {
    this.fetchPreparation();
    this.fetchSalesgroup();
    this.fetchPosts();
    this.toggleLoader();
}
}

export default Items;
