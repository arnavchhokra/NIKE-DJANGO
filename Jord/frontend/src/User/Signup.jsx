import React from 'react'
import './Signup.css'
import { Link, useNavigate } from "react-router-dom";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  ChakraProvider,
  Button,
  Input,
} from '@chakra-ui/react'
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
      <ChakraProvider>
            <div className="Signup-home" style={{width:'200px', display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', width:'100vw' }}>
<FormControl isRequired  style={{width:'280px', color:'white'}}>
<FormLabel>Name</FormLabel>
  <Input onChange={(e) => {
            setName(e.target.value);
          }}  type='name' />
  <FormLabel>Email address</FormLabel>
  <Input onChange={(e) => {
            setEmail(e.target.value);
          }}  type='email' />
  <FormLabel>Password</FormLabel>
  <Input  onChange={(e) => {
            setPassword(e.target.value);
          }}  type='password' />
  <FormLabel>Confirm Password</FormLabel>
  <Input onChange={(e) => {
            setPassword2(e.target.value);
          }}  type='password' />
  <Button
            mt={4}
            colorScheme='teal'
            type='submit'
            onClick={trySignup}
          >
            Signup
          </Button>
          <Button
            mt={4}
            colorScheme='teal'
            type='submit'
            style={{marginLeft:'20px'}}
            onClick={() => window.location.href='/'}
          >
            Go Back
          </Button><br/>
          <a href='/login'>Already a user?</a>

</FormControl>
</div>
</ChakraProvider>
  )
}

export default Signup

