import React, { useState } from 'react';
import '../../asset/css/Partyevents.css';
import NavBar from '../../components/ui/NavBar';
import Footer from '../../components/ui/Footer';
import '../../asset/css/Footer.css';
import weddingeve from '../../asset/images/weddingeve.jpg';
import corpsmall3 from '../../asset/images/Decorsutra_Blue-Theme_12.jpg';
import corpsmall2 from '../../asset/images/corpsmall2.jpg';
import corpsmall1 from '../../asset/images/corpsmall1.jpg';
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
function Weddingevents() {
    const navigate = useNavigate();
    const [eventDetails, setEventDetails] = useState({
        eventName: '',
        date: '',
        time: '',
        location: '',
        dressCode: '',
        additionalNotes: ''
    });

    const handleChange = (e) => {
        setEventDetails({
            ...eventDetails,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/payments', { state: { eventDetails } });
        setEventDetails({
            eventName: '',
            date: '',
            time: '',
            location: '',
            dressCode: '',
            additionalNotes: ''
        });
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
                    <br/><br/><br/>
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
                            Theme
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

export default Weddingevents;
