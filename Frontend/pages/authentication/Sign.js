import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Button from '@mui/material/Button';
import '../../asset/css/Sign.css';
import pic from '../../asset/images/loginpic1.png';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


const defaultTheme = createTheme();

export default function Sign() {
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const userInfo = {
      fName: data.get('fName'),
      lName: data.get('lName'),
      email: data.get('email'),
      password: data.get('password'),
    };
    
    try {
      const response = await axios.post('http://localhost:9001/sign/details', userInfo);
      
      if (response.status === 201) {
        alert('Sign up successful!');
        localStorage.setItem('userInfo', JSON.stringify(response.data)); // Save user data to localStorage
        navigate("/login");
      } else {
        alert('Sign up failed. Please try again.');
      }
    } catch (error) {
      console.error('There was an error during sign up:', error);
      alert('Sign up failed. Please check your input or try again later.');
    }
  };

  return (
    <div className="container">
      <div className="image-container">
        <img src={pic} alt="Sign Up Visual" />
      </div>
      <div className="form-container">
        <ThemeProvider theme={defaultTheme}>
          <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
              sx={{
                marginTop: 8,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <h1 className="cursive-text" style={{ fontSize: '50px' }}>Sign Up</h1>
              <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      autoComplete="given-name"
                      name="fName"
                      required
                      fullWidth
                      id="fName"
                      label="First Name"
                      autoFocus
                      className="input-line"
                      InputProps={{
                        disableUnderline: true,
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      fullWidth
                      id="lName"
                      label="Last Name"
                      name="lName"
                      autoComplete="family-name"
                      className="input-line"
                      InputProps={{
                        disableUnderline: true,
                      }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      id="email"
                      label="Email"
                      name="email"
                      autoComplete="email"
                      className="input-line"
                      InputProps={{
                        disableUnderline: true,
                      }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      name="password"
                      label="Password"
                      type="password"
                      id="password"
                      autoComplete="new-password"
                      className="input-line"
                      InputProps={{
                        disableUnderline: true,
                      }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <FormControlLabel
                      control={<Checkbox value="allowExtraEmails" color="primary" />}
                      label="Remember Me"
                    />
                  </Grid>
                </Grid>
                <Button
                  style={{ backgroundColor: '#0E86A9' }}
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 2 }}
                >
                  Sign Up
                </Button>
                <Grid container justifyContent="flex-end">
                  <Grid item>
                    <a href="/login">
                      Already have an account? Login
                    </a>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Container>
        </ThemeProvider>
      </div>
    </div>
  );
}
