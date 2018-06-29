import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'whatwg-fetch';
import { Link } from 'react-router-dom';


class App extends Component {
  constructor(){
    super();
    this.state = {
      title: '',
      author:'',
      image:''
    };
  }

  handleTitle=(e)=>{
    this.setState({
      title: e.target.value
    });
  }

  handleAuthor=(e)=>{
    this.setState({
      author: e.target.value
    });
  }

  savePost=()=>{
    let fd = new FormData();
    fd.append('image',this.state.image);
    fd.append('title', this.state.title);
    fd.append('author', this.state.author);
    
    fetch("http://localhost:3000/posts",
      {
        method: 'POST',
        headers:{
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(
          {
            title: this.state.title,
            author: this.state.author
          }
        )
      }
    )
    .then((response)=>{
      return response.json();
    })
    .then((res)=>{
      console.log(res);
      alert("inserted");
    })
    .catch((err)=>{
      console.log("Error while inserting post ", err);
    })
  }

  handleFileChange = (e)=>{
    this.setState({
      image: e.target.files[0]
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Link to="/home">Home</Link>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        Enter Title:  -<input type="text" onKeyUp={(e)=>{this.handleTitle(e)}}/> <br/>
        Enter Author:-<input type="text" onKeyUp={(e)=>{this.handleAuthor(e)}}/> <br/>

        <button onClick={this.savePost}>Save Post</button>
        
        <input type="file" onChange={(e)=> {this.handleFileChange(e)}}/>

      </div>
    );
  }
}

export default App;
