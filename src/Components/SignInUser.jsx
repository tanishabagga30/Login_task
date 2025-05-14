import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import '../App.css'; 

const SignInUser = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate("/already_user"); 


  };

  return (
    <div className="signin-container">
      <div className="signin-card">
        <div className="signin-header">
          <h1>
            Sign in to your <br />
            PopX account
          </h1>
          <p>
            Lorem ipsum dolor sit amet,
            <br />
            consectetur adipiscing elit.
          </p>
        </div>

        <Box component="form" noValidate autoComplete="off" className="signin-form">
          <TextField
            required
            fullWidth
            id="email-address"
            label="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="example@gmail.com"
            variant="outlined"
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
          />

          <TextField
            required
            fullWidth
            id="password"
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="******"
            variant="outlined"
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Box>

        <button className="signin-button" onClick={handleSubmit}>
          Login
        </button>
      </div>
    </div>
  );
};

export default SignInUser;
