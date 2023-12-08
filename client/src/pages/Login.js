import React, { useState } from "react";
import axios from "axios";

//Copy the url from the Insomia "LoginUser" http://localhost:3001/auth.login
function Login() {
  const [usernameLogin, setUsername] = useState("");
  const [passwordLogin, setPassword] = useState("");

  const login = () => {
    //自行創立一個物件叫data包含username及password
    const data = { username: usernameLogin, password: passwordLogin };
    axios.post("http://localhost:3001/auth/login", data).then((response) => {
      console.log(response.data);
    });
  };
  return (
    <div className="loginContainer">
      <label>USERNAME: </label>
      <input
        type="text"
        onChange={(event) => {
          setUsername(event.target.value);
        }}
      />
      <label>PASSWORD: </label>
      <input
        type="password"
        onChange={(event) => {
          setPassword(event.target.value);
        }}
      />
      <button onClick={login}>LOGIN</button>
    </div>
  );
}

export default Login;
