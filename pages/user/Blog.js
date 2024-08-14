import React from "react";
import NavBar from "../../components/ui/NavBar";
import Footer from "../../components/ui/Footer";
import '../../asset/css/Blog.css';
import { useSpring, animated } from '@react-spring/web';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import wedblog from '../../asset/images/wedblog.jpg';
import corpblog from '../../asset/images/corpblog.jpg';
import wedblog2 from '../../asset/images/wedblog2.jpg';
import partyblog from '../../asset/images/partyblog.jpg';
import blogcardparty from '../../asset/images/blogcardparty.jpg';
import blogcardwed from '../../asset/images/blogcardwed.jpg';
import blogcardcorp from '../../asset/images/blogcardcorp.jpg';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { useNavigate } from "react-router-dom";
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';

// Mock function to check if the user is authenticated
const isAuthenticated = () => {
    // Replace with actual authentication check logic
    // For example, checking a token in localStorage or a context state
    return localStorage.getItem("authToken") !== null;
};

function Blog() {
    const navigate = useNavigate();

    const props = useSpring({
        opacity: 1,
        transform: 'translateY(0)',
        from: { opacity: 0, transform: 'translateY(20px)' },
        config: { duration: 2000 },
    });

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
    };

    const handleScheduleEvent = () => {
        if (isAuthenticated()) {
            navigate("/events"); // Navigate to the event page if logged in
        } else {
            navigate("/login"); // Navigate to the login page if not logged in
        }
    };

    return (
        <div className="event-page">
            <NavBar /> {/* Include the NavBar component */}
            <div className="intro">
                <animated.h1 style={props}>Looking to Plan an Event?<br /> We've got your back!</animated.h1>
            </div>
            <div className="slide">
                <div className="slideshow-container">
                    <Slider {...settings}>
                        <div>
                            <img src={wedblog} alt="Slide 1" className="slide-image" />
                        </div>
                        <div>
                            <img src={corpblog} alt="Slide 2" className="slide-image" />
                        </div>
                        <div>
                            <img src={wedblog2} alt="Slide 3" className="slide-image" />
                        </div>
                        <div>
                            <img src={partyblog} alt="Slide 4" className="slide-image" />
                        </div>
                    </Slider>
                </div>
            </div>
            <div>
                <p className="xtra1">
                    Impeccable is a full-service event management firm that was created by pairing together our passion for business and events. We bring a fresh, unique approach to the event management industry. Our team understands that a properly executed event can be leveraged to support an organization’s strategic vision, incorporated into a company’s marketing plan, or used to build networks and client loyalty.
                </p>
            </div>
            <div className="card-container">
                <div className="card">
                    <Card>
                        <CardActionArea>
                            <div className="card-image-container">
                                <CardMedia
                                    component="img"
                                    height="400"
                                    image={blogcardparty}
                                    alt="Party Event"
                                />
                                <div className="overlay">
                                    <Typography variant="h5" component="div" className="overlay-text">
                                        Party Event
                                    </Typography>
                                </div>
                            </div>
                        </CardActionArea>
                    </Card>
                </div>
                <div className="card">
                    <Card>
                        <CardActionArea>
                            <div className="card-image-container">
                                <CardMedia
                                    component="img"
                                    height="400"
                                    image={blogcardwed}
                                    alt="Wedding Event"
                                />
                                <div className="overlay">
                                    <Typography variant="h5" component="div" className="overlay-text">
                                        Wedding Event
                                    </Typography>
                                </div>
                            </div>
                        </CardActionArea>
                    </Card>
                </div>
                <div className="card">
                    <Card>
                        <CardActionArea>
                            <div className="card-image-container">
                                <CardMedia
                                    component="img"
                                    height="400"
                                    image={blogcardcorp}
                                    alt="Corporate Event"
                                />
                                <div className="overlay">
                                    <Typography variant="h5" component="div" className="overlay-text">
                                        Corporate Event
                                    </Typography>
                                </div>
                            </div>
                        </CardActionArea>
                    </Card>
                </div>
            </div>
            <Card>
                <CardActionArea>
                    <div className="direct">
                        <Button onClick={handleScheduleEvent} style={{ textDecoration: "none", color: "#0E86A9" }}>
                            Schedule an event
                        </Button>
                    </div>
                </CardActionArea>
            </Card>
            <br /><br /><br /><br />
            <Footer />
        </div>
    );
}

export default Blog;
