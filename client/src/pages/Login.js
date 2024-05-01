import React, { useState, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../helpers/AuthContext";

//Copy the url from the Insomia "LoginUser" http://localhost:3001/auth.login
function Login() {
  const [usernameLogin, setUsername] = useState("");
  const [passwordLogin, setPassword] = useState("");
  const { setAuthState } = useContext(AuthContext);

  let navigate = useNavigate();
  const login = () => {
    //自行創立一個物件叫data包含username及password
    const data = { username: usernameLogin, password: passwordLogin };
    axios.post("http://localhost:3001/auth/login", data).then((response) => {
      if (response.data.error) alert(response.data.error);
      else {
        localStorage.setItem("accessToken", response.data); //front-end save the token int he sessionStorage
        //console.log(sessionStorage.getItem("accessToken"));
        //changed sessionStorage.setItem("accessToken", response.data) to localStorage
        setAuthState(true);
        navigate("/"); //登陸後自動轉跳到首頁
      }
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
