import React, { useState } from 'react';
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
function Corpevents() {
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
        localStorage.setItem('eventDetails', JSON.stringify(eventDetails));
        navigate('/payments');  // Navigate to the Manage page
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
                    <br/><br/><br/>
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

export default Corpevents;
