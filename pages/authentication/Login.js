import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import '../../asset/css/Login.css'; 
import pic from '../../asset/images/loginpic1.png'; 

const defaultTheme = createTheme();

export default function Login() {
  const navigate = useNavigate();
  const [role, setRole] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  React.useEffect(() => {
    const savedUserData = localStorage.getItem('userInfo');
    if (savedUserData) {
      const userData = JSON.parse(savedUserData);
      setEmail(userData.email);
      setPassword(userData.password);
    }
  }, []);

  const handleChangeRole = (event) => {
    setRole(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const inputEmail = data.get('email');
    const inputPassword = data.get('password');

    // Check if admin credentials are provided
    if (inputEmail === 'amirta@admin.in' && inputPassword === 'asdf') {
      alert('Admin login successful!');
      navigate('/admin'); // Navigate to the admin page
      return;
    }

    const savedUserData = localStorage.getItem('userInfo');
    if (savedUserData) {
      const userData = JSON.parse(savedUserData);
      if (userData.email === inputEmail && userData.password === inputPassword) {
        localStorage.setItem('userName', userData.name); // Save user name to localStorage
        alert('Login successful!');
        navigate('/event');
      } else {
        alert('Incorrect email or password');
      }
    } else {
      alert('No user data found. Please sign up first.');
    }
  };

  return (
    <div className="container">
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
              <h1 className="cursive-text" style={{ fontSize: '50px' }}>Login</h1>
              <div className="role">
                <FormControl variant="standard" sx={{ m: 2, minWidth: 120 }}>
                  <InputLabel id="demo-simple-select-standard-label">Role</InputLabel>
                  <Select
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                    value={role}
                    onChange={handleChangeRole}
                    label="Role"
                  >
                    <MenuItem value="User">User</MenuItem>
                    <MenuItem value="Admin">Admin</MenuItem>
                  </Select>
                </FormControl>
              </div>
              <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <div className="input-line">
                      <TextField
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        InputProps={{
                          disableUnderline: true,
                          style: { borderBottom: '1px solid #0E86A9' }, 
                        }}
                        InputLabelProps={{ style: { color: '#0E86A9' } }} 
                      />
                    </div>
                  </Grid>
                  <Grid item xs={12}>
                    <div className="input-line">
                      <TextField
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="new-password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        InputProps={{
                          disableUnderline: true,
                          style: { borderBottom: '1px solid #0E86A9' }, 
                        }}
                        InputLabelProps={{ style: { color: '#0E86A9' } }} 
                      />
                    </div>
                  </Grid>
                  <Grid item xs={12}>
                    <Link href="/sign" variant="body2">
                      Don't have an account? Create a new one
                    </Link>
                  </Grid>
                </Grid>
                <Button
                  style={{ backgroundColor: '#0E86A9' }}
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 2, mb: 2 }}
                >
                  Login
                </Button>
              </Box>
            </Box>
          </Container>
        </ThemeProvider>
      </div>
      <div className="image-container">
        <img src={pic} alt="Login Visual" />
      </div>
    </div>
  );
}
