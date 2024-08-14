import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import NavBar from '../../components/ui/NavBar';
import Footer from '../../components/ui/Footer';
import "../../asset/css/Bill.css";
import { Button, Typography, Box } from '@mui/material'; 
import jsPDF from 'jspdf'; 

function Bill() {
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

    const handleProceedToPay = () => {
        navigate('/payments', { state: { eventDetails, totalAmount } });
    };

    const handleDownloadPDF = () => {
        const doc = new jsPDF();

        doc.setFontSize(20);
        doc.text('Event Bill', 20, 20);
        
        doc.setFontSize(14);
        doc.text(`Event Name: ${eventDetails.eventName}`, 20, 30);
        doc.text(`Date: ${new Date(eventDetails.date).toLocaleDateString()}`, 20, 40);
        doc.text(`Time: ${eventDetails.time}`, 20, 50);
        doc.text(`Location: ${eventDetails.location}`, 20, 60);
        doc.text(`Venue: ${eventDetails.venue}`, 20, 70);
        doc.text(`Food Provided: ${eventDetails.food}`, 20, 80);
        
        if (eventDetails.food === 'Yes') {
            doc.text(`Menu Type: ${eventDetails.foodType}`, 20, 90);
        }

        doc.text(`Theme: ${eventDetails.theme}`, 20, 100);
        doc.text(`Additional Notes: ${eventDetails.additionalDetails}`, 20, 110);
        doc.text(`Total Amount: ₹${totalAmount}`, 20, 120);

        doc.save('Event_Bill.pdf');
    };

    return (
        <div className='bill-page'>
            <NavBar />
            <br /><br />
            <div className='bill-container'>
                {eventDetails ? (
                    <div className='bill-card'>
                        <Typography variant="h4" style={{ marginBottom: '16px' }}>Event Bill</Typography>
                        <div className='bill-details'>
                            <Typography variant="body1"><strong className='field'>Event Name:</strong> <span className='detail'>{eventDetails.eventName}</span></Typography>
                            <Typography variant="body1"><strong className='field'>Date:</strong> <span className='detail'>{new Date(eventDetails.date).toLocaleDateString()}</span></Typography>
                            <Typography variant="body1"><strong className='field'>Time:</strong> <span className='detail'>{eventDetails.time}</span></Typography>
                            <Typography variant="body1"><strong className='field'>Location:</strong> <span className='detail'>{eventDetails.location}</span></Typography>
                            <Typography variant="body1"><strong className='field'>Venue:</strong> <span className='detail'>{eventDetails.venue}</span></Typography>
                            <Typography variant="body1"><strong className='field'>Food Provided:</strong> <span className='detail'>{eventDetails.food}</span></Typography>
                            {eventDetails.food === 'Yes' && (
                                <Typography variant="body1"><strong className='field'>Menu Type:</strong> <span className='detail'>{eventDetails.foodType}</span></Typography>
                            )}
                            <Typography variant="body1"><strong className='field'>Theme:</strong> <span className='detail'>{eventDetails.theme}</span></Typography>
                            <Typography variant="body1"><strong className='field'>Additional Notes:</strong> <span className='detail'>{eventDetails.additionalDetails}</span></Typography>
                            <Typography variant="body1"><strong className='field'>Total Amount:</strong> <span className='detail'>₹{totalAmount}</span></Typography>
                        </div>
                        <Box mt={2} display="flex" gap={2}>
                            <Button
                                variant="contained"
                                color="primary"
                                onClick={handleProceedToPay}
                            >
                                Proceed to Pay
                            </Button>
                            <Button
                                variant="contained"
                                color="secondary"
                                onClick={handleDownloadPDF}
                            >
                                Download
                            </Button>
                        </Box>
                    </div>
                ) : (
                    <Typography variant="body1">No event details available.</Typography>
                )}
            </div>
            <Footer />
        </div>
    );
}

export default Bill;
