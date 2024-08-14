import React, { useState } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from 'axios';
import pic from '../../asset/images/loginpic1.png';
import { useNavigate } from 'react-router-dom';
import '../../asset/css/Sign.css';

const defaultTheme = createTheme();

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    setError('');

    const loginData = {
      email: email.toLowerCase(),
      password,
    };

    const generateKey = () => {
      const array = new Uint8Array(32);
      window.crypto.getRandomValues(array);
      return array.join('');
    };

    try {
      const response = await axios.post('http://localhost:9001/sign/login', loginData);

      if (response.status === 201 || response.status === 200) {
        const generatedKey = generateKey(); // Generate key upon successful login
        console.log('Generated Key:', generatedKey);
        const expirationTime = new Date().getTime() + 12 * 60 * 60 * 1000; // 12 hours from now
        sessionStorage.setItem('authKey', JSON.stringify({ generatedKey, expirationTime }));

        const userData = { email: email.toLowerCase(), password };
        localStorage.setItem('userInfo', JSON.stringify(userData)); // Store user details
        localStorage.setItem('loggedInEmail', email.toLowerCase());
        localStorage.setItem('userKey', generatedKey); // Store generated key

        alert('Login successful!');
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('loggedInEmail', email.toLowerCase());

        // Check for specific admin login credentials
        if (email === 'amirta@admin.in' && password === 'asdf') {
          navigate('/admin'); // Navigate to admin page
        } else {
          navigate('/event'); // Navigate to the event page
        }
      }
    } catch (error) {
      console.error('Login error:', error);
      if (error.response && error.response.status === 404) {
        setError('Email not found');
      } else if (error.response && error.response.status === 401) {
        setError('Incorrect password');
      } else {
        setError('An error occurred. Please try again later.');
      }
      setIsLoading(false);
    }
  };

  return (
    <div className="container">
      <div className="image-container">
        <img src={pic} alt="Login Visual" />
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
              <Typography component="h1" variant="h5" className="cursive-text" style={{ fontSize: '50px' }}>
                Login
              </Typography>
              <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      id="email"
                      label="Email"
                      name="email"
                      autoComplete="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
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
                      autoComplete="current-password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="input-line"
                      InputProps={{
                        disableUnderline: true,
                      }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <FormControlLabel
                      control={<Checkbox value="remember" color="primary" />}
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
                  disabled={isLoading}
                >
                  Login
                </Button>
                <Grid container justifyContent="flex-end">
                  <Grid item>
                    <a href="/sign" className="custom-link">
                      Don't have an account? Sign Up
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
