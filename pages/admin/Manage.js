import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { useState, useEffect } from 'react';
import { Button, Card, CardContent, TextField, Grid } from '@mui/material';
import logo from '../../asset/images/Impeccable.png';
import { useNavigate } from 'react-router-dom';

const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }),
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
  backgroundColor: '#FFFFFF',
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

export default function PersistentDrawerLeft() {
  const theme = useTheme();
  const navigate = useNavigate();

  const [open, setOpen] = React.useState(false);
  const [newBooking, setNewBooking] = useState({ eventId: '', user: '' });
  const [bookings, setBookings] = useState([
    { id: 1, event: 'Wedding', user: 'Peter', status: 'Pending' },
    { id: 2, event: 'Party', user: 'Sam', status: 'Pending' },
  ]);
  const [eventDetails, setEventDetails] = useState(null);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleNavigation = (path) => {
    navigate(path);
    setOpen(false);
  };

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    setBookings([
      ...bookings,
      { id: bookings.length + 1, event: `Event ${newBooking.eventId}`, user: newBooking.user, status: 'Pending' }
    ]);
    setNewBooking({ eventId: '', user: '' });
  };

  const handleStatusChange = (id, status) => {
    setBookings(bookings.map(booking =>
      booking.id === id ? { ...booking, status } : booking
    ));
  };

  useEffect(() => {
    // Retrieve event details from local storage
    const savedEventDetails = localStorage.getItem('eventDetails');
    if (savedEventDetails) {
      setEventDetails(JSON.parse(savedEventDetails));
    }
  }, []);

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1, color: '#0E86A9' }}>
            Manage Users
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <img src={logo} alt="Logo" style={{ height: '60px', width: 'auto' }} />
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          <ListItem disablePadding>
            <ListItemButton onClick={() => handleNavigation('/admin')}>
              <ListItemIcon style={{ color: "#0E86A9" }}>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary="Dashboard" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton onClick={() => handleNavigation('/manage')}>
              <ListItemIcon style={{ color: "#0E86A9" }}>
                <MailIcon />
              </ListItemIcon>
              <ListItemText primary="Manage Users" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton onClick={() => handleNavigation('/paymentadmin')}>
              <ListItemIcon style={{ color: "#0E86A9" }}>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary="Payments" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton onClick={() => handleNavigation('/login')}>
              <ListItemIcon style={{ color: "#0E86A9" }}>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary="Logout" />
            </ListItemButton>
          </ListItem>
        </List>
        <Divider />
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
        <Box sx={{ padding: '20px' }}>
          <Typography variant="h4" gutterBottom style={{ color: "#0E86A9", textAlign: "center" }}>
            Manage the bookings
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <Card>
                <CardContent>
                  <Typography variant="h5">Events</Typography>
                  <Typography variant="body1">
                    List of available events:
                  </Typography>
                  <ul>
                    <li>Event A - 01/08/2024</li>
                    <li>Event B - 05/08/2024</li>
                    <li>Event C - 10/08/2024</li>
                  </ul>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={6}>
              <Card>
                <CardContent>
                  <Typography variant="h5">Create Booking</Typography>
                  <form onSubmit={handleBookingSubmit}>
                    <TextField
                      label="Event ID"
                      value={newBooking.eventId}
                      onChange={(e) => setNewBooking({ ...newBooking, eventId: e.target.value })}
                      fullWidth
                      margin="normal"
                    />
                    <TextField
                      label="User"
                      value={newBooking.user}
                      onChange={(e) => setNewBooking({ ...newBooking, user: e.target.value })}
                      fullWidth
                      margin="normal"
                    />
                    <Button type="submit" variant="contained" color="primary">
                      Book Event
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
          <Box sx={{ marginTop: '20px' }}>
            <Card>
              <CardContent>
                <Typography variant="h5">Bookings</Typography>
                <ul>
                  {bookings.map(booking => (
                    <li key={booking.id}>
                      {booking.event} - {booking.user} - {booking.status}
                      <Button
                        variant="contained"
                        color="success"
                        onClick={() => handleStatusChange(booking.id, 'Accepted')}
                        sx={{ marginLeft: '10px' }}
                      >
                        Accept
                      </Button>
                      <Button
                        variant="contained"
                        color="error"
                        onClick={() => handleStatusChange(booking.id, 'Canceled')}
                        sx={{ marginLeft: '10px' }}
                      >
                        Cancel
                      </Button>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </Box>
          {eventDetails && (
            <Box sx={{ marginTop: '20px' }}>
              <Card>
                <CardContent>
                  <Typography variant="h5">Event Details</Typography>
                  <Typography variant="body1">
                    <strong>Event Name:</strong> {eventDetails.eventName}
                    <br />
                    <strong>Date:</strong> {eventDetails.date}
                    <br />
                    <strong>Time:</strong> {eventDetails.time}
                    <br />
                    <strong>Location:</strong> {eventDetails.location}
                    <br />
                    <strong>Dress Code:</strong> {eventDetails.dressCode}
                    <br />
                    <strong>Additional Notes:</strong> {eventDetails.additionalNotes}
                  </Typography>
                </CardContent>
              </Card>
            </Box>
          )}
        </Box>
      </Main>
    </Box>
  );
}
