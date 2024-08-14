import React from 'react';
import { Facebook, Instagram } from '@mui/icons-material';
import { IconButton, Typography, Box, Container } from '@mui/material';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import '../../asset/css/Footer.css';

function Footer() {
    return (
        <footer className="footer">
            <Container>
                <Box className="footer-content">
                    <Box className="footer-nav">
                        <Typography variant="h6" className="footer-heading">
                            Navigation
                        </Typography>
                        <ul>
                            <li><Link to="/">Home</Link></li> {/* Navigate to Home page */}
                            <li><Link to="/team">Our Team</Link></li> {/* Navigate to Events page */}
                            <li><Link to="/portfolio">Portfolio</Link></li> {/* Navigate to Portfolio page */}
                            <li><Link to="/about">Reach Us</Link></li> {/* Navigate to Contact Us page */}
                        </ul>
                    </Box>
                    <Box className="footer-links">
                        <Typography variant="h6" className="footer-heading">
                            Legal
                        </Typography>
                        <ul>
                            <li><Link to="/privacy-policy">Privacy Policy</Link></li> {/* Navigate to Privacy Policy page */}
                            <li><Link to="/terms-and-conditions">Terms and Conditions</Link></li> {/* Navigate to Terms and Conditions page */}
                        </ul>
                    </Box>
                    <Box className="footer-contact">
                        <Typography variant="h6" className="footer-heading">
                            Contact Us
                        </Typography>
                        <Box className="social-media">
                            <IconButton href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                                <Facebook />
                            </IconButton>
                            <IconButton href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                                <Instagram />
                            </IconButton>
                        </Box>
                        <Typography variant="body2">
                            Email: contact@impeccable.com
                        </Typography>
                        <Typography variant="body2">
                            Phone: +123 456 7890
                        </Typography>
                    </Box>
                </Box>
                <Box className="footer-bottom">
                    <Typography variant="body2" align="center">
                        &copy; {new Date().getFullYear()} Impeccable. All rights reserved.
                    </Typography>
                </Box>
            </Container>
        </footer>
    );
}

export default Footer;
