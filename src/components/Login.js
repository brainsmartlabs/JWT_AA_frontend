import { Box, Button, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();

  const [inputs, setInputs] = useState({
    email: "",
    password: ""
  });

  async function handleSubmit(e) {
    e.preventDefault();

    const res = await axios.post('http://localhost:3300/api/user/login', {
      email: inputs.email,
      password: inputs.password
    }).catch(err => console.log(err));

    let data = await res.data;
    if (data.status === 'allow') navigate('/user');
  }

  function handleChange(e) {
    setInputs(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Box width={300} marginLeft='auto' marginRight='auto'
          display='flex' flexDirection='column' alignItems='center'>
          <Typography variant='h2'>Login</Typography>

          <TextField onChange={handleChange}
            value={inputs.email} type="email" name='email'
            variant='outlined' placeholder='Email' margin='normal' />

          <TextField onChange={handleChange}
            value={inputs.password} type="password" name='password'
            variant='outlined' placeholder='Password' margin='normal' />

          <Button variant='contained' type="submit">Login</Button>
        </Box>
      </form>
    </div>
  )
}
export default Login;

