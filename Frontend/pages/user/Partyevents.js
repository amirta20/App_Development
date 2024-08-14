import React, { useState, useEffect } from 'react';
import '../../asset/css/Partyevents.css';
import NavBar from '../../components/ui/NavBar';
import Footer from '../../components/ui/Footer';
import '../../asset/css/Footer.css';
import party11 from '../../asset/images/party11.jpg';
import party1 from '../../asset/images/partysmall1.jpg';
import party2 from '../../asset/images/partysmall2.jpeg';
import party3 from '../../asset/images/m-convention-banquet-hall-table-settings.webp';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const locations = [
    'Chennai', 'Coimbatore', 'Madurai', 'Salem', 'Tiruchirappalli', 
    'Tirunelveli', 'Erode', 'Vellore', 'Dindigul', 'Kanchipuram', 
    'Thanjavur', 'Nagercoil', 'Karur', 'Tirupur', 'Cuddalore', 
    'Ramanathapuram', 'Nagapattinam', 'Tiruvannamalai', 'Pudukkottai', 
    'Virudhunagar', 'Ariyalur', 'Kallakurichi', 'Kumbakonam', 'Virdunagar', 
    'Theni', 'Sivaganga', 'Namakkal', 'Dharmapuri', 'Tenkasi', 
    'Krishnagiri', 'Thoothukudi', 'Perambalur', 'Nilgiris', 'Kanyakumari'
];

const eventTypes = [
    'Charity Events', 'Anniversary', 'Holiday Celebrations', 'Festivals', 'Baby Shower'
];

function Partyevents() {
    const navigate = useNavigate();
    const [eventDetails, setEventDetails] = useState({
        eventName: '',
        name: '',
        date: '',
        time: '',
        location: '',
        venue: '',
        food: 'No',
        foodType: '',
        dressCode: '',
        additionalDetails: '',
        attendees: '',
        emailId: ''
    });

    // Get today's date in YYYY-MM-DD format
    const today = new Date().toISOString().split('T')[0];

    useEffect(() => {
        // Check for authKey in session storage
        const authKey = sessionStorage.getItem('authKey');
        if (!authKey) {
            // Redirect to a blank page if authKey is not found
            navigate('/login');
        }

        // Get emailId from local storage if necessary
        const storedEmailId = localStorage.getItem('emailId');
        if (storedEmailId) {
            setEventDetails((prevDetails) => ({
                ...prevDetails,
                emailId: storedEmailId
            }));
        }
    }, [navigate]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEventDetails({
            ...eventDetails,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const events = JSON.parse(localStorage.getItem('events')) || [];
        localStorage.setItem('events', JSON.stringify([...events, eventDetails]));

        let totalAmount = 7000; // Basic package for party event
        if (eventDetails.food === 'Yes') {
            if (eventDetails.foodType === 'Veg') {
                totalAmount += 3000; // Add 3000 for Veg
            } else if (eventDetails.foodType === 'Non-Veg') {
                totalAmount += 5000; // Add 5000 for Non-Veg
            }
        }
        try {
            // Send event details to backend
            const response = await axios.post('http://localhost:9001/manage/details', {
                ...eventDetails,
                date: new Date(eventDetails.date).toISOString(), // Convert date to ISO format
                time: eventDetails.time // Keep time as string or adjust format as needed
            });

            if (response.status === 201) {
                alert('Event booked successfully!');
                navigate('/bill', { state: { eventDetails, totalAmount } });
            } else {
                alert('Failed to book the event. Please try again.');
            }
        } catch (error) {
            console.error('There was an error booking the event:', error);
            alert(`There was an error booking the event: ${error.response ? error.response.data : error.message}`);
        }
    };

    return (
        <div>
            <NavBar />
            <div className='one'>
                <p className='text'>Dance The Night Away! Call Us : +91 98765 56789</p>
            </div>
            <div className='pic1'>
                <div className='image-container'>
                    <img src={party11} className='party-image' alt='Party' />
                    <div className='text-overlay'>
                        <h1>Party Time!</h1>
                        <p>Join us for a night of fun and excitement.</p>
                    </div>
                </div>
            </div>
            <div className='details-container'>
                <div className='left-text'>
                    <h2 style={{ color: '#0E86A9' }}>Event Information</h2>
                    <p className='paragraph'>
                        Planning a memorable party has never been easier! Whether you're celebrating a birthday, anniversary, corporate event, or just a fun get-together, our party organizing service is here to help you every step of the way. From selecting the perfect venue and catering options to arranging entertainment and decorations, we take care of all the details so you can relax and enjoy the celebration. Our team of experienced event planners will work with you to bring your vision to life, ensuring that every aspect of your event is tailored to your unique style and preferences. Let's make your next party an unforgettable experience—because every great celebration starts with great planning!
                    </p>
                
                    <p className='paragraph'>
                        <b style={{ color: "#0E86A9" }}>Our Party services include:</b><br /><br />
                        Fully organised planning for a basic package of Rs.7000, which includes services like providing DJ, mics, audio/visuals etc.<br /><br />
                        <b style={{ color: "#0E86A9" }}>Our Catering services:</b><br /><br />
                        We provide a variety of menu options in both veg (Rs.3000) and non-veg (Rs.5000) packages.
                    </p>
                    <br /><br /><br />
                    <div className='image-grid'>
                        <img src={party1} alt='Party Image 1' className='grid-image' />
                        <img src={party2} alt='Party Image 2' className='grid-image' />
                        <img src={party3} alt='Party Image 3' className='grid-image' />
                    </div>
                </div>
                <div className='details-section'>
                    <h2 style={{ color: '#0E86A9' }}>Organize Your Party</h2>
                    <form onSubmit={handleSubmit}>
                        <label>
                            Event Name:
                            <select
                                name='eventName'
                                id='eventName'
                                value={eventDetails.eventName}
                                onChange={handleChange}
                                required
                                className='event-name-select'
                            >
                                <option value=''>Select Event Type</option>
                                {eventTypes.map((type) => (
                                    <option key={type} value={type}>
                                        {type}
                                    </option>
                                ))}
                            </select>
                        </label>
                        <label>
                            Name:
                            <input
                                type='text'
                                name='name'
                                id='name'
                                value={eventDetails.name}
                                onChange={handleChange}
                                required
                            />
                        </label>
                        <label>
                            Date:
                            <input
                                type='date'
                                name='date'
                                id='date'
                                min={today} // Minimum date is today
                                value={eventDetails.date}
                                onChange={handleChange}
                                required
                            />
                        </label>
                        <label>
                            Time:
                            <input
                                type='time'
                                name='time'
                                id='time'
                                value={eventDetails.time}
                                onChange={handleChange}
                                required
                            />
                        </label>
                        <label>
                            Location:
                            <select
                                name='location'
                                id='location'
                                value={eventDetails.location}
                                onChange={handleChange}
                                className='event-name-select'

                                required
                            >
                                <option value=''>Select Location</option>
                                {locations.map((location) => (
                                    <option key={location} value={location}>
                                        {location}
                                    </option>
                                ))}
                            </select>
                        </label>
                        <label>
                            Venue:
                            <input
                                type='text'
                                name='venue'
                                id='venue'
                                value={eventDetails.venue}
                                onChange={handleChange}
                                required
                            />
                        </label>
                        <label>
                            Food Required:
                            <select
                                name='food'
                                id='food'
                                value={eventDetails.food}
                                className='event-name-select'

                                onChange={handleChange}
                                required
                            >
                                <option value='No'>No</option>
                                <option value='Yes'>Yes</option>
                            </select>
                        </label>
                        {eventDetails.food === 'Yes' && (
                            <label>
                                Food Type:
                                <select
                                    name='foodType'
                                    id='foodType'
                                    value={eventDetails.foodType}
                                    className='event-name-select'

                                    onChange={handleChange}
                                    required
                                >
                                    <option value=''>Select Food Type</option>
                                    <option value='Veg'>Veg</option>
                                    <option value='Non-Veg'>Non-Veg</option>
                                </select>
                            </label>
                        )}
                        <label>
                            Theme:
                            <input
                                type='text'
                                name='theme'
                                id='theme'
                                value={eventDetails.theme}
                                onChange={handleChange}
                            />
                        </label>
                        <label>
                            Number of Attendees:
                            <input
                                type='number'
                                name='attendees'
                                id='attendees'
                                value={eventDetails.attendees}
                                onChange={handleChange}
                                required
                            />
                        </label>
                        <label>
                            Additional Details:
                            <textarea
                                name='additionalDetails'
                                id='additionalDetails'
                                value={eventDetails.additionalDetails}
                                onChange={handleChange}
                            />
                        </label>
                        <button type='submit'>Submit</button>
                    </form>
                </div>
            </div>
            <Footer />
        </div>
);
}

export default Partyevents;
