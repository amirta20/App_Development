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
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { grey } from '@mui/material/colors';
import ListItemText from '@mui/material/ListItemText';
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
  backgroundColor: '#FFFFFF', // Set AppBar background color to white
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

// Sample event data
const eventData = [
  { id: 1, name: 'Party', date: '2024-08-01', bookedBy: 'User 1' },
  { id: 2, name: 'Brand Promotion', date: '2024-08-05', bookedBy: 'User 2' },
  { id: 3, name: 'Wedding', date: '2024-08-10', bookedBy: 'User 3' },
];

// Sample ongoing events data
const ongoingEvents = [
  { id: 1, name: 'Ongoing: Wedding', description: 'Description of ongoing event A' },
  { id: 2, name: 'Ongoing: Brand Promotion', description: 'Description of ongoing event B' },
];

// Sample dashboard metrics data
const dashboardMetrics = [
  { title: 'Daily Views', value: '1,234' },
  { title: 'Bookings', value: '56' },
  { title: 'Enquiries', value: '78' },
  { title: 'Total Earnings', value: '$12,345' },
];

export default function Dashboard() {
  const theme = useTheme();
  const navigate = useNavigate();

  const [open, setOpen] = React.useState(false);

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

  const handleLogout = () => {
    if (window.confirm('Are you sure you want to logout?')) {
      navigate('/login');
    }
  };

  const uniqueUsers = Array.from(new Set(eventData.map(event => event.bookedBy))).length;

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
            Dashboard
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
            <ListItemButton onClick={handleLogout}>
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

        {/* Dashboard Metrics Cards */}
        <Grid container spacing={2} sx={{ mb: 3 }}>
          {dashboardMetrics.map((metric, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card sx={{ mb: 3, bgcolor: grey[200], boxShadow: 3 }}>
                <CardContent>
                  <Typography variant="h6" component="div">
                    {metric.title}
                  </Typography>
                  <Typography variant="h4" component="div" color="#0E86A9">
                    {metric.value}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Typography variant="h6" gutterBottom>
          Booked Events
        </Typography>
        <TableContainer component={Paper} sx={{ marginTop: 2 }}>
          <Table aria-label="events table">
            <TableHead>
              <TableRow>
                <TableCell style={{color:"#0E86A9"}}>ID</TableCell>
                <TableCell style={{color:"#0E86A9"}}>Event Name</TableCell>
                <TableCell style={{color:"#0E86A9"}}>Date</TableCell>
                <TableCell style={{color:"#0E86A9"}}>Booked By</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {eventData.map((event) => (
                <TableRow key={event.id}>
                  <TableCell>{event.id}</TableCell>
                  <TableCell>{event.name}</TableCell>
                  <TableCell>{event.date}</TableCell>
                  <TableCell>{event.bookedBy}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <br /><br />
        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ mb: 3, bgcolor: grey[200], boxShadow: 3 }}>
            <CardContent>
              <Typography variant="h6" component="div">
                Ongoing Events
              </Typography>
              <Typography variant="body2" color="textSecondary" sx={{ mb: 2 }}>
                Check out the current ongoing events and stay updated.
              </Typography>
              {ongoingEvents.map(event => (
                <Box key={event.id} sx={{ mb: 1 }}>
                  <Typography variant="subtitle1" color="textPrimary">
                    {event.name}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {event.description}
                  </Typography>
                  <Button variant="contained" size="small" sx={{ mt: 1 }} style={{backgroundColor:"#0E86A9"}}>
                    Learn More
                  </Button>
                </Box>
              ))}
            </CardContent>
          </Card>
        </Grid>
      </Main>
    </Box>
  );
}
