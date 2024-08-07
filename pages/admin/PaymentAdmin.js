import * as React from 'react';
import { useState } from 'react';
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  IconButton,
  Paper,
  Button,
  TextField
} from '@mui/material';
import { styled, useTheme } from '@mui/material/styles';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
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
  backgroundColor: '#FFFFFF',
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

const PaymentAdmin = () => {
  const theme = useTheme();
  const navigate = useNavigate();

  const [open, setOpen] = React.useState(false);
  const [searchTerm, setSearchTerm] = React.useState('');

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

  const [payments, setPayments] = useState([
    { id: 1, user: 'Sam', event: 'Party', amount: '$100', status: 'Received', method: 'Credit Card' },
    { id: 2, user: 'Peter', event: 'Brand Promotion', amount: '$150', status: 'Pending', method: 'PayPal' },
    { id: 3, user: 'Riya', event: 'Wedding', amount: '$200', status: 'Received', method: 'Bank Transfer' },
  ]);

  const handleStatusToggle = (id) => {
    setPayments(payments.map(payment =>
      payment.id === id
        ? { ...payment, status: payment.status === 'Received' ? 'Pending' : 'Received' }
        : payment
    ));
  };

  const filteredPayments = payments.filter(payment =>
    payment.status.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Box sx={{ padding: '20px' }}>
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
            Payments
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
      <br /><br /><br />
      <Typography variant="h4" gutterBottom style={{ color: "#0E86A9", textAlign: "center" }}>Payments</Typography>
      <Box sx={{ marginBottom: '20px' }}>
        <TextField
          label="Search by Status"
          variant="outlined"
          fullWidth
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </Box>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>User</TableCell>
              <TableCell>Event</TableCell>
              <TableCell>Amount</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Payment Method</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredPayments.map((payment) => (
              <TableRow key={payment.id}>
                <TableCell>{payment.id}</TableCell>
                <TableCell>{payment.user}</TableCell>
                <TableCell>{payment.event}</TableCell>
                <TableCell>{payment.amount}</TableCell>
                <TableCell>
                  {payment.status === 'Received' ? (
                    <Typography color="green">{payment.status}</Typography>
                  ) : (
                    <Typography color="red">{payment.status}</Typography>
                  )}
                </TableCell>
                <TableCell>{payment.method}</TableCell>
                <TableCell>
                  <Button
                    variant="contained"
                    color={payment.status === 'Received' ? 'secondary' : 'primary'}
                    onClick={() => handleStatusToggle(payment.id)}
                    startIcon={payment.status === 'Received' ? <CancelIcon /> : <CheckCircleIcon />}
                  >
                    {payment.status === 'Received' ? 'Mark as Pending' : 'Mark as Received'}
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default PaymentAdmin;
