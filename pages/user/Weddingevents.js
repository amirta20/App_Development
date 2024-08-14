import React, { useState, useEffect } from 'react';
import '../../asset/css/Partyevents.css';
import NavBar from '../../components/ui/NavBar';
import Footer from '../../components/ui/Footer';
import '../../asset/css/Footer.css';
import weddingeve from '../../asset/images/weddingeve.jpg';
import corpsmall3 from '../../asset/images/Decorsutra_Blue-Theme_12.jpg';
import corpsmall2 from '../../asset/images/corpsmall2.jpg';
import corpsmall1 from '../../asset/images/corpsmall1.jpg';
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

function Weddingevents() {
    const navigate = useNavigate();
    const [eventDetails, setEventDetails] = useState({
        eventName: '',
        name: '',
        emailId: '',
        date: '',
        time: '',
        location: '',
        venue: '',
        food: 'No',
        foodType: '',
        theme: '',
        additionalDetails: '',
        attendees: '',
        contactNo: ''
    });

    // Get today's date in YYYY-MM-DD format
    const today = new Date().toISOString().split('T')[0];

    useEffect(() => {
        // Check for authkey in session storage
        const authKey = sessionStorage.getItem('authKey');
        if (!authKey) {
            // Redirect to a blank page if authkey is not found
            navigate('/login');
        }
    }, [navigate]);

    const handleChange = (e) => {
        setEventDetails({
            ...eventDetails,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const events = JSON.parse(localStorage.getItem('events')) || [];
        localStorage.setItem('events', JSON.stringify([...events, eventDetails]));

        let totalAmount = 15000; // Basic package for wedding event
        if (eventDetails.food === 'Yes') {
            if (eventDetails.foodType === 'Veg') {
                totalAmount += 7000; // Add 7000 for Veg
            } else if (eventDetails.foodType === 'Non-Veg') {
                totalAmount += 9000; // Add 9000 for Non-Veg
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
                <p className='text'>We create, You Celebrate! Call Us : +91 98765 56789</p>
            </div>
            <div className='pic1'>
                <div className='image-container'>
                    <img src={weddingeve} className='party-image' alt='Wedding' />
                    <div className='text-overlay'>
                        <h1>Happily Ever After</h1>
                        <p>Bringing Fairytales Into Reality</p>
                    </div>
                </div>
            </div>
            <div className='details-container'>
                <div className='left-text'>
                    <h2 style={{ color: '#0E86A9' }}>Event Information</h2>
                    <p className='paragraph'>
                        Your wedding day is one of the most important and cherished moments of your life, and our expert team is here to ensure it is nothing short of perfect. From choosing the ideal venue and coordinating exquisite catering to curating stunning floral arrangements and managing every little detail, our comprehensive wedding planning services take the stress out of your special day. Our dedicated planners will work closely with you to bring your vision to life, ensuring that every aspect—from the grandest elements to the smallest touches—is seamlessly executed. Let us handle the logistics and details so you can focus on creating lasting memories with your loved ones.
                    </p>
                    <p className='paragraph'>
                        <b style={{color:"#0E86A9"}}>Our Wedding services include:</b><br/><br/>
                        Fully organised planning for a basic package of Rs.15000, which includes services like stage decors, events, audio/visuals, etc.<br/><br/>
                        <b style={{color:"#0E86A9"}}>Our Catering services:</b><br/><br/>
                        We provide a variety of menu options in both veg (Rs.7000) and non-veg (Rs.9000) packages.
                    </p>
                    <br /><br /><br />
                    <div className='image-grid'>
                        <img src={corpsmall1} alt='Wedding Image 1' className='grid-image' />
                        <img src={corpsmall2} alt='Wedding Image 2' className='grid-image' />
                        <img src={corpsmall3} alt='Wedding Image 3' className='grid-image' />
                    </div>
                </div>
                <div className='details-section'>
                    <h2 style={{ color: '#0E86A9' }}>Organize The Event</h2>
                    <form onSubmit={handleSubmit}>
                        <label>
                            Event Name:
                            <input
                                type='text'
                                name='eventName'
                                id='eventName'
                                value={eventDetails.eventName}
                                onChange={handleChange}
                                required
                            />
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
                                value={eventDetails.date}
                                onChange={handleChange}
                                min={today} // Restrict to current date and future dates
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
                                {locations.map((loc) => (
                                    <option key={loc} value={loc}>
                                        {loc}
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
                            Number of Attendees:
                            <input
                                type='text'
                                name='attendees'
                                id='attendees'
                                value={eventDetails.attendees}
                                onChange={handleChange}
                                required
                            />
                        </label>
                        <label>
                            Food Provided:
                            <select
                                name='food'
                                id='food'
                                value={eventDetails.food}
                                onChange={handleChange}
                                className='event-name-select'
                                required
                            >
                                <option value='No'>No</option>
                                <option value='Yes'>Yes</option>
                            </select>
                        </label>
                        {eventDetails.food === 'Yes' && (
                            <label>
                                Menu Type:
                                <select
                                    name='foodType'
                                    id='foodType'
                                    value={eventDetails.foodType}
                                    onChange={handleChange}
                                    className='event-name-select'
                                    required
                                >
                                    <option value=''>Select Menu</option>
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

export default Weddingevents;
