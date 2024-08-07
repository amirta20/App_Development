import React, { useState, createContext, useContext } from 'react';
import NavBar from '../../components/ui/NavBar';
import Footer from '../../components/ui/Footer';
import '../../asset/css/Contact.css';
import { Button, TextField, Typography, Box, Rating } from '@mui/material';

const ReviewContext = createContext();

export function useReviewContext() {
    return useContext(ReviewContext);
}

function Contact() {
    const [username, setUsername] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [rating, setRating] = useState(0);
    const [review, setReview] = useState('');
    const { addReview } = useReviewContext(); // Use context to add review

    const handleRatingChange = (event, newValue) => {
        setRating(newValue);
    };

    const handleReviewChange = (event) => {
        setReview(event.target.value);
    };

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handlePhoneNumberChange = (event) => {
        setPhoneNumber(event.target.value);
    };

    const handleSubmitReview = (event) => {
        event.preventDefault();
        addReview({ username, phoneNumber, rating, review });
        alert('Review submitted!');
        setUsername('');
        setPhoneNumber('');
        setRating(0);
        setReview('');
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
                            label="Username"
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            value={username}
                            onChange={handleUsernameChange}
                        />
                        <TextField
                            label="Phone Number"
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            value={phoneNumber}
                            onChange={handlePhoneNumberChange}
                        />
                        <TextField
                            label="Message"
                            variant="outlined"
                            multiline
                            rows={4}
                            fullWidth
                            margin="normal"
                        />
                    <Typography variant="h4" component="h2" gutterBottom>
                        Your Reviews, Our Improvement
                    </Typography>
                        <Box sx={{ mb: 2 }}>
                            <Rating
                                name="rating"
                                value={rating}
                                onChange={handleRatingChange}
                                size="large"
                            />
                        </Box>
                        <TextField
                            label="Your Review"
                            variant="outlined"
                            multiline
                            rows={4}
                            fullWidth
                            margin="normal"
                            value={review}
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

// Create a provider component for reviews
export function ReviewProvider({ children }) {
    const [reviews, setReviews] = useState([]);

    const addReview = (review) => {
        setReviews([...reviews, review]);
    };

    return (
        <ReviewContext.Provider value={{ reviews, addReview }}>
            {children}
        </ReviewContext.Provider>
    );
}

export default Contact;
