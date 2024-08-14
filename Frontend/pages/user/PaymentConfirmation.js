import React, { useEffect } from 'react';
import NavBar from '../../components/ui/NavBar';
import '../../asset/css/Payments.css'; 
import { Typography, Box, Card, CardContent } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

function PaymentConfirmation() {
    const location = useLocation();
    const navigate = useNavigate();
    const { eventDetails, totalAmount } = location.state || {};

    useEffect(() => {
        // Check for authkey in session storage
        const authKey = sessionStorage.getItem('authKey');
        if (!authKey) {
            // Redirect to a blank page if authkey is not found
            navigate('/login');
        }
    }, [navigate]);

    return (
        <div className="confirmation-page">
            <NavBar />
            <div className="confirmation-container">
                <Box display="flex" flexDirection="column" alignItems="center" mt={4}>
                    <Card variant="outlined" style={{ width: '100%', maxWidth: 500, color: '#0E86A9' }}>
                        <CardContent>
                            <Typography variant="h6">
                                <strong>Event:</strong> <span style={{ color: 'black' }}>{eventDetails?.eventName || 'N/A'}</span>
                            </Typography>
                            <Typography variant="body1">
                                <strong>Date:</strong> <span style={{ color: 'black' }}>{eventDetails?.date || 'N/A'}</span>
                            </Typography>
                            <Typography variant="body1">
                                <strong>Location:</strong> <span style={{ color: 'black' }}>{eventDetails?.location || 'N/A'}</span>
                            </Typography>
                            <Typography variant="h6">
                                <strong>Total Amount:</strong> <span style={{ color: 'black' }}>₹{totalAmount || 'N/A'}</span>
                            </Typography>
                        </CardContent>
                    </Card>
                    <CheckCircleIcon style={{ fontSize: 100, color: 'green', marginTop: '20px' }} />
                    <Typography variant="h4" style={{ textAlign: 'center', color: '#0E86A9', marginTop: '20px' }}>
                        Your event has been booked!
                    </Typography>
                </Box>
            </div>
        </div>
    );
}

export default PaymentConfirmation;
