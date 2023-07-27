import React from 'react'
import './Signup.css'
import { useNavigate } from "react-router-dom";




const Login = ({login_api})=> {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  let navigate = useNavigate();

  const success = async (text) => {
    console.log("Yeah! Authenticated!");
    await localStorage.setItem("salesToken", text.access);
    window.location = "/";
  };

  const tryLogin = async (e) => {
    e.preventDefault();
    console.log("Loggin in with", email, password);
    await login_api(email, password, success, (text) => {
      setMessage(text);
    });
  };



  return (
    <div className="Signup-home">
      <form className="Signup-container">
        <span className="Signup-create">Login</span>
        <input type="text"
          htmlFor="email"
          name="email"
          placeholder="Enter user"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          value={email} className="Signup-Email"  />
        <input  type="password"
          htmlFor="password"
          name="password"
          placeholder="Enter password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          value={password} className="Signup-Email"/>
        <button type="submit" onClick={tryLogin} className="Signup-btn">Login</button>
      </form>
    </div>
  )
}

export default Login
