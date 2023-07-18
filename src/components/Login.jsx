import { useState } from 'react';
import { Box, FormControl, FormLabel, Input, Button, Toast } from '@chakra-ui/react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import er from "../assets/er.jpg"
import { useDispatch, useSelector } from 'react-redux';
import { AdminLogin } from '../Store/Auth/Auth.Action';
import axios from 'axios';
function Login() {
  const navigate = useNavigate()
  // const [username, setUsername] = useState('');
  // const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [form, setForm] = useState({

    email: "",
    password: "",
  })
  // const data = useSelector((store) => {
  //   console.log(store.auth.data)
  // })
  const dispatch = useDispatch();

  const handleChange = (e) => {

    const { name, value } = e.target
    setForm({ ...form, [name]: value })
  };
  const handleLogin = () => {

    if (form.email && form.password) {
      try {
        dispatch(AdminLogin(form,navigate))
        // window.location.href="/Dashboard"

      } catch (error) {
        alert("user or password incorrect")
      }
    }
  };

  return (
    <>
      <Box bgImage={er}
        style={{
          backgroundSize: "cover",
          boxSizing: "border-box",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "scroll",
          // { base: "right" ,md:"center"}
          backgroundPosition: "right",
          height: "100vh",
          width: "100%",


        }}
      >
        <Box h={"200px"}></Box>
        <Box p={"30px"}>
          <Box width={"40%"} minWidth="250px" height={"400px"} bg={"rgba(100,100,100,0.6)"} color={"white"} p={"50px"} borderRadius={"10px"} justify="left">
            <FormControl isInvalid={error !== ''}>
              <FormLabel>Email</FormLabel>
              {/* (event)=>handleChange(event) */}
              <Input type="email" value={form.email} name="email" onChange={handleChange} />
            </FormControl>
            <FormControl isInvalid={error !== ''} mt={4}>
              <FormLabel>Password</FormLabel>
              <Input type="password" value={form.password} name="password" onChange={handleChange} />
            </FormControl>
            {error && <Box mt={4} color="red">{error}</Box>}
            {/* <Link to={"/Dashboard"}> */}
            <Button colorScheme="blue" mt={4} onClick={handleLogin}>
              Login
            </Button>
            {/* </Link> */}
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default Login;