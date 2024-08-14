import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NavBar from '../../components/ui/NavBar';
import Footer from '../../components/ui/Footer';
import '../../asset/css/Payments.css'; 
import { Button, Typography } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';

function Payments() {
    const location = useLocation();
    const navigate = useNavigate();
    const { eventDetails, totalAmount } = location.state || {};

    const [cardHolder, setCardHolder] = useState('');

    useEffect(() => {
        const authKey = sessionStorage.getItem('authKey');
        if (!authKey) {
            navigate('/login');
        }
    }, [navigate]);

    const handlePayment = async () => {
        const emailId = localStorage.getItem('emailId'); // Retrieve emailId from local storage

        try {
            const response = await axios.post('http://localhost:9001/paymentadmin/details', {
                amount: parseInt(totalAmount * 100, 10), // Amount in paise
                eventName: eventDetails?.eventName,
                emailId: emailId
            });

            const { orderId, currency, amount } = response.data;

            if (!window.Razorpay) {
                throw new Error('Razorpay script not loaded');
            }

            const options = {
                key: 'rzp_test_C8hbsGoJG1L86P', // Razorpay key
                amount: amount, // Amount in paise (integer)
                currency: currency,
                name: 'Event Booking',
                description: eventDetails?.eventName,
                order_id: orderId,
                handler: async function (response) {
                    const { razorpay_payment_id } = response;

                    try {
                        const verificationResponse = await axios.post('http://localhost:9001/paymentadmin/verify', {
                            paymentId: razorpay_payment_id,
                        });

                        if (verificationResponse.data.verified) {
                            await savePaymentDetails(razorpay_payment_id, eventDetails?.eventName, amount, emailId);
                            navigate('/confirm', { state: { eventDetails, totalAmount } });
                        } else {
                            throw new Error('Payment verification failed');
                        }
                    } catch (error) {
                        console.error('Payment verification error:', error);
                        alert('Payment verification failed. Please try again.');
                    }
                },
                prefill: {
                    name: cardHolder,
                    email: emailId
                },
                theme: {
                    color: '#3399cc'
                }
            };

            const razorpay = new window.Razorpay(options);
            razorpay.open();
        } catch (error) {
            console.error('Error creating payment order:', error);
            alert('Error creating payment order. Please try again.');
        }
    };

    const savePaymentDetails = async (paymentId, eventName, amount, emailId) => {
        const paymentData = {
            paymentId,
            emailId,
            eventName,
            amount,
        };

        try {
            await axios.post('http://localhost:9001/paymentadmin/save', paymentData);
        } catch (error) {
            console.error('Error saving payment details:', error);
            alert('Error saving payment details. Please try again.');
        }
    };

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
                    <Typography variant="h6">
                        <strong>Total Amount:</strong> ₹{totalAmount || 'N/A'}
                    </Typography>
                </div>
                <div className="payment-form">
                    <Button variant="contained" color="primary" onClick={handlePayment} fullWidth>
                        Pay Now
                    </Button>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Payments;
