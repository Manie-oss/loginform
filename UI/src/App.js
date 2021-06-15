import React, { Component } from "react";
import "./App.css";

class App extends Component {

  submitForm(){
    
  }

  render() {
    return(
      <div className="App">
        <form>
          <input type="text" name="name" placeholder = "UserName"/><br />
          <input type="password" name="pass" placeholder = "Password"/><br />
        </form>
        <button onClick={ () => this.submitForm }>LogIn</button>
    </div>
    );
  }
}

export default App;
