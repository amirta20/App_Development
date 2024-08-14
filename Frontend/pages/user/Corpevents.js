import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../../asset/css/Partyevents.css';
import NavBar from '../../components/ui/NavBar';
import Footer from '../../components/ui/Footer';
import '../../asset/css/Footer.css';
import corp3 from '../../asset/images/corp3.jpg';
import cosmall1 from '../../asset/images/cosmall1.jpg';
import exhi from '../../asset/images/exhi.jpg';
import cosmall3 from '../../asset/images/cosmall3.jpg';
import { useNavigate } from 'react-router-dom';

const locations = [
    'Chennai', 'Coimbatore', 'Madurai', 'Salem', 'Tiruchirappalli', 
    'Tirunelveli', 'Erode', 'Vellore', 'Dindigul', 'Kanchipuram', 
    'Thanjavur', 'Nagercoil', 'Karur', 'Tirupur', 'Cuddalore', 
    'Ramanathapuram', 'Nagapattinam', 'Tiruvannamalai', 'Pudukkottai', 
    'Virudhunagar', 'Ariyalur', 'Kallakurichi', 'Kumbakonam', 'Virdunagar', 
    'Theni', 'Sivaganga', 'Namakkal', 'Dharmapuri', 'Tenkasi', 
    'Krishnagiri', 'Thoothukudi', 'Perambalur', 'Nilgiris', 'Kanyakumari'
];

const eventOptions = [
    'Board Meetings', 
    'Felicitations', 
    'Annual Company Milestone Events', 
    'Conferences and Seminars',
    'Brand Promotion',
    'Product Launch',
    'Exhibition or stalls'
];

function Corpevents() {
    const navigate = useNavigate();
    const [eventDetails, setEventDetails] = useState({
        eventName: '',
        name: '',
        date: '',
        time: '',
        location: '',
        theme: '',
        additionalDetails: '',
        venue: '',
        food: 'No',
        foodType: '',
        attendees: '',
        contactNo: ''
    });

    // Check for authkey in session storage
    useEffect(() => {
        const authKey = sessionStorage.getItem('authKey');
        if (!authKey) {
            navigate('/login'); // Redirect to a blank page if not logged in
        }
    }, [navigate]);

    // Get today's date in YYYY-MM-DD format
    const today = new Date().toISOString().split('T')[0];

    const handleChange = (e) => {
        setEventDetails({
            ...eventDetails,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        let totalAmount = 10000; // Basic package for corporate event
        if (eventDetails.food === 'Yes') {
            if (eventDetails.foodType === 'Veg') {
                totalAmount += 5000; // Add 5000 for Veg
            } else if (eventDetails.foodType === 'Non-Veg') {
                totalAmount += 7000; // Add 7000 for Non-Veg
            }
        }

        try {
            // Send event details to backend
            const response = await axios.post('http://localhost:9001/manage/details', {
                ...eventDetails, // Send event details including date and time
                date: new Date(eventDetails.date).toISOString(), // Convert date to ISO format
                time: eventDetails.time // Keep time as string
            });

            if (response.status === 201) {
                alert('Event booked successfully!');
                // Navigate to Bill page with event details and total amount
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
                <p className='text'>Professionalize your events, Call Us : +91 98765 56789</p>
            </div>
            <div className='pic1'>
                <div className='image-container'>
                    <img src={corp3} className='party-image' alt='Party' />
                    <div className='text-overlay'>
                        <h1>Productivity Is Never An Accident</h1>
                        <p>Chasing Perfection To Catch Excellence</p>
                    </div>
                </div>
            </div>
            <div className='details-container'>
                <div className='left-text'>
                    <h2 style={{ color: '#0E86A9' }}>Event Information</h2>
                    <p className='paragraph'>
                        Organizing a successful corporate event requires meticulous planning and execution to ensure every detail aligns with your business objectives and brand image. Our team specializes in delivering seamless corporate events that leave a lasting impression on your clients, partners, and employees. Whether it's a high-profile conference, a team-building retreat, a product launch, or an annual meeting, we handle everything from venue selection and audiovisual setups to catering and event logistics. Our experienced planners work closely with you to understand your goals and tailor every aspect of the event to your needs, ensuring a polished and professional outcome.
                    </p>
                    <p className='paragraph'>
                        <b style={{ color: "#0E86A9" }}>Our Corporate event services include:</b><br/><br/>
                        Fully organised planning for a basic package of Rs.10000, which includes services like providing projectors, mics, audio/visuals, etc.<br/><br/>
                        <b style={{ color: "#0E86A9" }}>Our Catering services:</b><br/><br/>
                        We provide various menu options in both veg (Rs.5000) and non-veg (Rs.7000) packages.
                    </p>
                    <br /><br /><br />
                    <div className='image-grid'>
                        <img src={cosmall1} alt='Party Image 1' className='grid-image' />
                        <img src={exhi} alt='Party Image 2' className='grid-image' />
                        <img src={cosmall3} alt='Party Image 3' className='grid-image' />
                    </div>
                </div>
                <div className='details-section'>
                    <h2 style={{ color: '#0E86A9' }}>Organize Your Event</h2>
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
                                style={{ width: '100%', padding: '10px', fontSize: '16px' }}
                            >
                                <option value=''>Select Event Type</option>
                                {eventOptions.map((option) => (
                                    <option key={option} value={option}>
                                        {option}
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
                            Email ID:
                            <input
                                type='email'
                                name='emailId'
                                id='emailId'
                                value={eventDetails.emailId}
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
                                required
                                min={today} // Set the minimum date to today's date
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
                                required
                                className='event-name-select'
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
                                type='number'
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
                                required
                                className='event-name-select'
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
                                    required
                                    className='event-name-select'
                                >
                                    <option value=''>Select Menu Type</option>
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
                            Additional Notes:
                            <textarea
                                name='additionalDetails'
                                value={eventDetails.additionalDetails}
                                onChange={handleChange}
                            />
                        </label>
                        <button type='submit'>Book Event</button>
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Corpevents;
