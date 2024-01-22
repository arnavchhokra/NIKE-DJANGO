import React from 'react'
import './Signup.css'
import { useNavigate } from "react-router-dom";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  ChakraProvider,
  Button,
  Input,
} from '@chakra-ui/react'



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
    <ChakraProvider>
          <div className="Signup-home" style={{width:'200px', display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', width:'100vw' }}>
<FormControl isRequired  style={{width:'280px'}}>
<FormLabel>Email address</FormLabel>
<Input onChange={(e) => {
          setEmail(e.target.value);
        }}  type='email' />
<FormLabel>Password</FormLabel>
<Input  onChange={(e) => {
          setPassword(e.target.value);
        }}  type='password' />
<Button
          mt={4}
          colorScheme='teal'
          type='submit'
          onClick={tryLogin}
        >
          Login
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
        <a href='/signup'>Not a user?</a>
</FormControl>
</div>
</ChakraProvider>
)
}

export default Login
