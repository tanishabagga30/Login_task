import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import '../App.css';

const CreateAccount = () => {
  const [name, setName] = useState("");
  const [phone_no, setPhone_no] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [company, setCompany] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const navigate = useNavigate();

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleSubmit = () => {
    navigate("/already_user");
  };

  return (
    <div className="signin-container">
      <div className="signin-card">
        <div className="signin-header">
          <h1>Create your <br />PopX account</h1>
        </div>

        <Box component="form" noValidate autoComplete="off" className="signin-form">
          <TextField
            required
            fullWidth
            id="full-name"
            label="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Marry Doe"
            variant="outlined"
            margin="normal"
            InputLabelProps={{ shrink: true }}
          />

          <TextField
            required
            fullWidth
            id="phone-no"
            label="Phone Number"
            value={phone_no}
            onChange={(e) => setPhone_no(e.target.value)}
            placeholder="9876543210"
            variant="outlined"
            margin="normal"
            InputLabelProps={{ shrink: true }}
          />

          <TextField
            required
            fullWidth
            id="email"
            label="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="example@gmail.com"
            variant="outlined"
            margin="normal"
            InputLabelProps={{ shrink: true }}
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
            InputLabelProps={{ shrink: true }}
          />

          <TextField
            fullWidth
            id="company"
            label="Company Name"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            placeholder="PopX"
            variant="outlined"
            margin="normal"
            InputLabelProps={{ shrink: true }}
          />
        </Box>

        <div className="radio-group">
          <label className="radio-label">Are you an Agency? <span className="required">*</span></label>
          <div className="radio-options">
            <label>
              <input
                type="radio"
                value="option1"
                checked={selectedOption === "option1"}
                onChange={handleChange}
              />
              Yes
            </label>
            <label>
              <input
                type="radio"
                value="option2"
                checked={selectedOption === "option2"}
                onChange={handleChange}
              />
              No
            </label>
          </div>
        </div>

        <button className="signin-button" onClick={handleSubmit}>
          Create Account
        </button>
      </div>
    </div>
  );
};

export default CreateAccount;
