import React, { useState } from 'react';
import '../../asset/css/Partyevents.css';
import NavBar from '../../components/ui/NavBar';
import Footer from '../../components/ui/Footer';
import '../../asset/css/Footer.css';
import party11 from '../../asset/images/party11.jpg';
import party1 from '../../asset/images/partysmall1.jpg';
import party2 from '../../asset/images/partysmall2.jpeg';
import party3 from '../../asset/images/m-convention-banquet-hall-table-settings.webp';
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
function Partyevents() {
    const navigate = useNavigate();
    const [eventDetails, setEventDetails] = useState({
        eventName: '',
        date: '',
        time: '',
        location: '',
        venue: '',
        foodProvided: 'No',
        menuType: '',
        dressCode: '',
        additionalNotes: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEventDetails({
            ...eventDetails,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Save the event details in local storage
        const storedEvents = JSON.parse(localStorage.getItem('events')) || [];
        storedEvents.push({
            id: storedEvents.length + 1,
            ...eventDetails
        });
        localStorage.setItem('events', JSON.stringify(storedEvents));

        // Navigate to the Dashboard page
        navigate('/dashboard');
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
                    <br/><br/><br/>
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
                            <input
                                type='text'
                                name='eventName'
                                value={eventDetails.eventName}
                                onChange={handleChange}
                                required
                            />
                        </label>
                        <label>
                            Date:
                            <input
                                type='date'
                                name='date'
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
                                value={eventDetails.time}
                                onChange={handleChange}
                                required
                            />
                        </label>
                        <label>
                            Location:
                            <select
                                name='location'
                                value={eventDetails.location}
                                onChange={handleChange}
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
                                value={eventDetails.venue}
                                onChange={handleChange}
                                required
                            />
                        </label>
                        <label>
                            Food Provided:
                            <select
                                name='foodProvided'
                                value={eventDetails.foodProvided}
                                onChange={handleChange}
                                required
                            >
                                <option value='No'>No</option>
                                <option value='Yes'>Yes</option>
                            </select>
                        </label>
                        {eventDetails.foodProvided === 'Yes' && (
                            <label>
                                Menu Type:
                                <select
                                    name='menuType'
                                    value={eventDetails.menuType}
                                    onChange={handleChange}
                                    required
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
                                name='dressCode'
                                value={eventDetails.dressCode}
                                onChange={handleChange}
                            />
                        </label>
                        <label>
                            Additional Notes:
                            <textarea
                                name='additionalNotes'
                                value={eventDetails.additionalNotes}
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
