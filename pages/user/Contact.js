import React, { useState } from 'react';
import NavBar from '../../components/ui/NavBar';
import Footer from '../../components/ui/Footer';
import '../../asset/css/Contact.css';
import { Button, TextField, Typography, Box, Rating } from '@mui/material';
import axios from 'axios';

function Contact() {
    const [name, setName] = useState('');
    const [phoneNo, setPhoneNo] = useState('');
    const [ratings, setRatings] = useState(0);
    const [reviews, setReviews] = useState('');

    const handleRatingChange = (event, newValue) => {
        setRatings(newValue);
    };

    const handleReviewChange = (event) => {
        setReviews(event.target.value);
    };

    const handleUsernameChange = (event) => {
        setName(event.target.value);
    };

    const handlePhoneNumberChange = (event) => {
        setPhoneNo(event.target.value);
    };

    const handleSubmitReview = async (event) => {
        event.preventDefault();
        
        const reviewData = {
            name,
            phoneNo,
            ratings,
            reviews
        };

        try {
            const response = await axios.post('http://localhost:9001/reachus/details', reviewData);
            if (response.status === 201) {
                alert('Review submitted successfully!');
                setName('');
                setPhoneNo('');
                setRatings(0);
                setReviews('');
            }
        } catch (error) {
            console.error('There was an error submitting the review:', error);
            alert('Failed to submit review. Please try again.');
        }
    };

    return (
        <div className="contact-page">
            <NavBar />
            <div className="contact-container">
                <Typography variant="h4" component="h2" gutterBottom>
                    Get in Touch
                </Typography>
                <Typography variant="body1" gutterBottom>
                    We'd love to hear from you! Whether you have a question about our services, pricing, or anything else, our team is ready to answer all your questions.
                </Typography>
                <div className="contact-info">
                    <Typography variant="h6" gutterBottom>
                        Contact Information
                    </Typography>
                    <Typography variant="body2">
                        <strong>Phone:</strong> +91 98765 56789<br />
                        <strong>Email:</strong> contact@eventorganizer.com
                    </Typography>
                    <div className="social-media">
                        <Typography variant="h6" gutterBottom>
                            Follow Us
                        </Typography>
                        <div className="social-icons">
                            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
                            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
                        </div>
                    </div>
                </div>
                <div className="reviews-section">
                    <Box component="form" onSubmit={handleSubmitReview}>
                        <Typography variant="h6" gutterBottom>
                            Leave Your Queries
                        </Typography>
                        <TextField
                            label="Name"
                            variant="outlined"
                            fullWidth
                            id="name"
                            margin="normal"
                            name="name"
                            value={name}
                            onChange={handleUsernameChange}
                        />
                        <TextField
                            label="Phone Number"
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            id="phoneNo"
                            name="phoneNo"
                            value={phoneNo}
                            onChange={handlePhoneNumberChange}
                        />
                        <Typography variant="h4" component="h2" gutterBottom>
                            Your Reviews, Our Improvement
                        </Typography>
                        <Box sx={{ mb: 2 }}>
                            <Rating
                                name="ratings"
                                value={ratings}
                                id="ratings"
                                onChange={handleRatingChange}
                                size="large"
                            />
                        </Box>
                        <TextField
                            label="Your Message"
                            variant="outlined"
                            multiline
                            rows={4}
                            fullWidth
                            margin="normal"
                            value={reviews}
                            id="reviews"
                            name="reviews"
                            onChange={handleReviewChange}
                        />
                        <Button
                            variant="contained"
                            color="primary"
                            type="submit"
                            fullWidth
                        >
                            Submit Review
                        </Button>
                    </Box>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Contact;
