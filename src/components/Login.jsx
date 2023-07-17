import { useState } from 'react';
import { Box, FormControl, FormLabel, Input, Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import er from "../assets/er.jpg"
function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    if (username === 'admin' && password === 'password') {
      // TODO: handle successful login
    } else {
      setError('Invalid username or password');
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
              <FormLabel>Username</FormLabel>
              <Input type="text" value={username} onChange={(event) => setUsername(event.target.value)} />
            </FormControl>
            <FormControl isInvalid={error !== ''} mt={4}>
              <FormLabel>Password</FormLabel>
              <Input type="password" value={password} onChange={(event) => setPassword(event.target.value)} />
            </FormControl>
            {error && <Box mt={4} color="red">{error}</Box>}
            <Link to={"/Dashboard"}>
              <Button colorScheme="blue" mt={4} onClick={handleLogin}>
                Login
              </Button>
            </Link>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default Login;