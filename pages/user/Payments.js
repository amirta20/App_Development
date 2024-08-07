import React from 'react';
import NavBar from '../../components/ui/NavBar';
import Footer from '../../components/ui/Footer';
import '../../asset/css/Payments.css'; 
import { Button, TextField, Typography, Box } from '@mui/material';
import { useLocation } from 'react-router-dom';

function Payments() {
    const location = useLocation();
    const { eventDetails } = location.state || {};

    return (
        <div className="payment-page">
            <NavBar />
            <div className="payment-container">
                <Typography variant="h4" style={{ textAlign: 'center', color: '#0E86A9' }}>
                    Complete Your Booking
                </Typography>
                <div className="event-summary">
                    <Typography variant="h6">
                        <strong>Event:</strong> {eventDetails?.eventName || 'N/A'}
                    </Typography>
                    <Typography variant="body1">
                        <strong>Date:</strong> {eventDetails?.date || 'N/A'}
                    </Typography>
                    <Typography variant="body1">
                        <strong>Location:</strong> {eventDetails?.location || 'N/A'}
                    </Typography>
                </div>
                <div className="payment-form">
                    <form>
                        <TextField
                            label="Name"
                            variant="outlined"
                            fullWidth
                            margin="normal"
                        />
                        <TextField
                            label="Email"
                            variant="outlined"
                            type="email"
                            fullWidth
                            margin="normal"
                        />
                        <TextField
                            label="Card Number"
                            variant="outlined"
                            fullWidth
                            margin="normal"
                        />
                        <div className="card-details">
                            <TextField
                                label="Expiration Date"
                                variant="outlined"
                                margin="normal"
                                style={{ marginRight: '10px' }}
                            />
                            <TextField
                                label="CVV"
                                variant="outlined"
                                margin="normal"
                            />
                        </div>
                        <Button variant="contained" color="primary" type="submit" fullWidth>
                            Pay Now
                        </Button>
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Payments;
