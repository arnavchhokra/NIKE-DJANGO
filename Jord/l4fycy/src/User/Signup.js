import React from 'react'
import './Signup.css'
import { useNavigate } from "react-router-dom";
function Signup({signup_api}) {

  
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [password2, setPassword2] = React.useState("");
  const [message, setMessage] = React.useState("");
  
  let navigate = useNavigate();
  
  const success = async (text) => {
    console.log("Yeah! Authenticated!");
    await localStorage.setItem("salesToken", text.access);
    window.location = "/"; // Redirect to the desired page after successful signup
  };
  
  const trySignup = async (e) => {
    e.preventDefault();
    console.log("Signing up with", name, email, password, password2);
    
    await signup_api(name, email, password, password2, success, (text) => {
      setMessage(text);
    });
  };


  return (
    <div className="Signup-home">
      <form className="Signup-container">
        <span className="Signup-create">Create New Account</span>
        <span className="Sigunp-login-sub">
          Already a member?{' '}
          <a className="Signup-login" href="/Login">
            Log in
          </a>
        </span>
        <input type="text" className="Signup-Email" name="name"
          placeholder="Name"
          onChange={(e) => {
            setName(e.target.value);
          }}
          value={name}  />
        <input type="email" className="Signup-Email"  htmlFor="email"
          name="email"
          placeholder="Email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          value={email}  />
        <input type="password" className="Signup-Email"  htmlFor="password"
          name="password"
          placeholder="Password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          value={password} />
        <input type="password" className="Signup-Email" htmlFor="password2"
          name="password2"
          placeholder="Password"
          onChange={(e) => {
            setPassword2(e.target.value);
          }}
          value={password2}  />
        <button  type="submit" onClick={trySignup}  className="Signup-btn">Signup</button>
      </form>
    </div>
  )
}

export default Signup
