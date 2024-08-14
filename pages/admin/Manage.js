import React, { useState, useEffect } from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/Inbox';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, TextField, MenuItem, FormControl, InputLabel, Select } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import logo from '../../asset/images/Impeccable.png';
import axios from 'axios';

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

const ManageUsers = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [events, setEvents] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchField, setSearchField] = useState('eventName');

  useEffect(() => {
    // Fetch events from the backend
    axios.get('http://localhost:9001/manage/getall')
      .then(response => {
        setEvents(response.data);
      })
      .catch(error => {
        console.error('Error fetching events:', error);
      });
  }, []);

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

  const handleDelete = (eventId) => {
    console.log('Deleting event with ID:', eventId);

    axios.delete(`http://localhost:9001/manage/${eventId}`)
      .then(response => {
        console.log('Delete response:', response);
        if (response.status === 200) {
          setEvents(prevEvents => prevEvents.filter(event => event.eventId !== eventId));
        } else {
          console.error('Failed to delete event:', response.statusText);
        }
      })
      .catch(error => {
        console.error('Error deleting event:', error);
      });
  };

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchFieldChange = (event) => {
    setSearchField(event.target.value);
  };

  // Filter events based on search query and field
  const filteredEvents = events.filter(event => {
    return event[searchField]?.toString().toLowerCase().includes(searchQuery.toLowerCase());
  });

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
            sx={{ mr: 2, ...(open && { display: 'none' }), color: '#0E86A9' }}
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
            {theme.direction === 'ltr' ? (
              <ChevronLeftIcon style={{ color: '#0E86A9' }} />
            ) : (
              <ChevronRightIcon style={{ color: '#0E86A9' }} />
            )}
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
                <InboxIcon />
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
        <Typography variant="h4" gutterBottom style={{ color: "#0E86A9", textAlign: "center" }}>
          Manage Events
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
          <FormControl sx={{ width: '200px' }}>
            <InputLabel id="search-field-label">Search Field</InputLabel>
            <Select
              labelId="search-field-label"
              id="search-field"
              value={searchField}
              onChange={handleSearchFieldChange}
              label="Search Field"
            >
              <MenuItem value="eventId">Event ID</MenuItem>
              <MenuItem value="eventName">Event Name</MenuItem>
              <MenuItem value="date">Date</MenuItem>
              <MenuItem value="location">Location</MenuItem>
              {/* Add other fields as needed */}
            </Select>
          </FormControl>
          <TextField
            id="search-query"
            label="Search"
            variant="outlined"
            value={searchQuery}
            onChange={handleSearch}
            sx={{ width: '400px' }}
          />
        </Box>
        <TableContainer component={Paper}>
          <Table aria-label="event table">
            <TableHead>
              <TableRow>
                <TableCell>Id</TableCell>
                <TableCell>Event Name</TableCell>
                <TableCell>Date</TableCell>
                <TableCell>Time</TableCell>
                <TableCell>Location</TableCell>
                <TableCell>Venue</TableCell>
                <TableCell>Food Provided</TableCell>
                <TableCell>Menu Type</TableCell>
                <TableCell>Dress Code</TableCell>
                <TableCell>Additional Notes</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredEvents.map((event) => (
                <TableRow key={event.eventId}>
                  <TableCell>{event.eventId}</TableCell>
                  <TableCell>{event.eventName}</TableCell>
                  <TableCell>{event.date}</TableCell>
                  <TableCell>{event.time}</TableCell>
                  <TableCell>{event.location}</TableCell>
                  <TableCell>{event.venue}</TableCell>
                  <TableCell>{event.food}</TableCell>
                  <TableCell>{event.foodType}</TableCell>
                  <TableCell>{event.theme}</TableCell>
                  <TableCell>{event.additionalDetails}</TableCell>
                  <TableCell>
                    <Button variant="contained" color="error" onClick={() => handleDelete(event.eventId)}>
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Main>
    </Box>
  );
};

export default ManageUsers;
