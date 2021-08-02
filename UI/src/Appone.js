import React, { useState } from "react"; // useState is the hook to use state variables inside the functional components
import axios from "axios"; //library to communicate with server through http protocol.
import "./App.css"; //connecting app.css file

const Appone = () => {
  //arrow function named Appone
  const [logincredentials, setLogincredentials] = useState({
    //declared a new state variable called logincredentials.
    name: "", // these are passed as an initial state inside the useState
    password: "",
  });

  function submitForm(logincredentials) {
    //another syntax of defining function which has logincredentials as an argument
    return axios
      .post("http://localhost:8080/login", logincredentials) //posts request(passes the data to the server) to the API server at the specified path. axios.post() takes two parameter. i.e.,path and the data to be sent to the server
      .then((response) => //post method return a promise.Syntax for returning promises.
        setLogincredentials(() => ({ //sets the new state and returns.
          ...logincredentials,
          resback: response.data,
        }))
      )
      .catch((error) => {
        console.log(error);
      });
  }

  function createAccount(logincredentials){
    return axios
    .post("http://localhost:8080/newaccount", logincredentials)
    .then((response) => 
      setLogincredentials(() => ({
        ...logincredentials,
        resback: response.data,
     }))
    )
    .catch((error) => {
      console.log(error);
    });
  }

  return (
    <div className="App">
      <form>
        <input
          type="text"
          id="uname"
          name="name"
          placeholder="UserName"
          onChange={(event) =>
            setLogincredentials({
              ...logincredentials,
              name: event.target.value,
            })
          }
        />
        <br />
        <input
          type="password"
          id="pass"
          name="pass"
          placeholder="Password"
          onChange={(event) =>
            setLogincredentials({
              ...logincredentials,
              password: event.target.value,
            })
          }
        />
        <br />
      </form>
      <button type="button" onClick={() => submitForm(logincredentials)}>
        LogIn
      </button>
      <button type="button" onClick={() => createAccount(logincredentials)}>
        SignUp
      </button>
      <div>{logincredentials.resback}</div>
    </div>
  );
};

export default Appone;
