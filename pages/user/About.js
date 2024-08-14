import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import Slider from "react-slick";
import '../../asset/css/UserHome.css';
import '../../asset/css/Footer.css';
import Footer from '../../components/ui/Footer';
import partyforabout from '../../asset/images/partyforabout.jpg'
import partyabout1 from '../../asset/images/party2forabout.jpg'
import partyabout2 from '../../asset/images/party3forabout.jpg'
import partyabout3 from '../../asset/images/party4forabout.jpg'
import corp from '../../asset/images/corp.jpg'
import NavBar from '../../components/ui/NavBar';


function About() {
  

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
  };

  return (
    <div>
      <NavBar/>

      <div className='bgpic'>
        <Slider {...settings}>
          <div className='slide'>
            <img src={partyforabout} alt="Slide 2" className='slide-image' />
            <div className='slide-text'>
              <h1>Make Your Event Special</h1>
              <h2>Expert Planning and Execution</h2>
            </div>
          </div>
          <div className='slide'>
            <img src={partyabout3} alt="Slide 3" className='slide-image' />
            <div className='slide-text'>
              <h1>Unforgettable Moments</h1>
              <h2>Crafting Memories for a Lifetime</h2>
            </div>
          </div>
          <div className='slide'>
            <img src={partyabout1} alt="Slide 3" className='slide-image' />
            <div className='slide-text'>
              <h1>Make Your Event Special</h1>
              <h2>Crafting Memories for a Lifetime</h2>
            </div>
            </div>
          <div className='slide'>
            <img src={corp} alt="Slide 3" className='slide-image' />
            <div className='slide-text'>
              <h1>Looking to plan an event?</h1>
              <h2>We've got your back</h2>
            </div>
            </div>
          <div className='slide'>
            <img src={partyabout2} alt="Slide 3" className='slide-image' />
            <div className='slide-text'>
              <h1>Unforgettable Moments</h1>
              <h2>Crafting Memories for a Lifetime</h2>
            </div>
          </div>
        </Slider>
      </div>

      <div className='bgpic2'>
        <br />
        <br />
        <br />
        <div>
          <h1 className='head1'>How It Works?</h1>
          <h3 className='head2'>LEARN: WE WANT TO GET TO KNOW YOU</h3>
          <h4 className='head3'>
            What is your business about? What are your challenges? What are the issues that your members or clients are dealing with? By thoroughly understanding your company’s leadership culture, how your organization operates and your long term strategic plans, we become a part of your team. Our model works best when we can become more than the “hired help” and can become strategic event management partners, so the first step for us is about getting to know you and your business.
          </h4>
          <h3 className='head2'>BUILD: LET US DO THE HEAVY LIFTING.</h3>
          <h4 className='head3'>
            Because we have taken the time to learn about your business and the goals of your event, you can rest assured that the event will be on target and in line with your objectives. Leave the planning and management to us. Let us look after the details and the heavy lifting that comes with planning a professional event. From our network of preferred vendors, industry connections and years of experience, we can deliver a full-service event management experience. The Spark team is well equipped to deliver a world-class event, each and every time. Your job is to run your business; our job is to run your event.
          </h4>
          <h3 className='head2'>DELIVER: SIT BACK. RELAX.</h3>
          <h4 className='head3'>
            Because we have taken the time to learn about your business and the goals of your event, you can rest assured that the event will be on target and in line with your objectives. Leave the planning and management to us. Let us look after the details and the heavy lifting that comes with planning a professional event. From our network of preferred vendors, industry connections and years of experience, we can deliver a full-service event management experience. The Spark team is well equipped to deliver a world-class event, each and every time. Your job is to run your business; our job is to run your event.
          </h4>
        </div>
    </div>
    <br/><br/><br/><br/><br/>
    <Footer/>
    </div>
    
  );
}

export default About;
