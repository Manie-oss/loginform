import React, { Component } from "react";
import axios from "axios";
import "./App.css";

class App extends Component {
  constructor(props){
    super(props)
      this.state = {
        name : "",
        password : ""
    }
  }

  submitForm = (event) =>  {
    console.log(this.state);
    axios.post('localhost:8080/login', this.state)
    .then(response => {
      console.log(response)
    }) 
    .catch(error => {
      console.log(error)
    })
  }
    

  render() {
    return(
      <div className="App">
        <form>
          <input type="text" id = "uname" name="name" placeholder = "UserName" onChange = {(event) => this.setState({ ...this.setState, name: event.target.value})}/><br />
          <input type="password" id = "pass" name="pass" placeholder = "Password" onChange = {(event) => this.setState({ ...this.setState, password: event.target.value})}/><br />
        </form>
        <button type = "button" onClick = { this.submitForm }>LogIn</button>
    </div>
    );
  }
}

export default App;
