import NavBar from "../../components/ui/NavBar";
import '../../asset/css/Event.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { useSpring, animated } from '@react-spring/web';
import corpevent from '../../asset/images/corpevent.png'
import brand from '../../asset/images/brand.jpg'
import exhi from '../../asset/images/exhi.jpg'
import party from '../../asset/images/party.jpg'
import wedding from '../../asset/images/wedding.jpg'
import concert from '../../asset/images/concert.jpeg'
import Footer from '../../components/ui/Footer';
import '../../../src/asset/css/Footer.css';
import { useNavigate } from "react-router-dom";

function Event() {
    const navigate=useNavigate();
    const props = useSpring({
        opacity: 1,
        transform: 'translateY(0)',
        from: { opacity: 0, transform: 'translateY(20px)' },
        config: { duration: 2000 },
    });

    return (
        <div className="event-page">
            <NavBar />
            <div className="grad">
                <div className="intro">
                    <animated.h4 style={props}>Our Services</animated.h4>
                    <animated.h1 style={{ ...props, delay: 500 }}>You Dream It,<br/> We Make It True!</animated.h1>
                </div>
            </div>
            <div className="card-container">
                <div className="card">
                    <Card>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="180"
                                image={corpevent}
                                alt="Corporate Event"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Corporate Events
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary">
                                <a href="/corpevents" style={{textDecoration:"none",color:"#0E86A9"
                                }}>
                                Book an event
                                </a>
                            </Button>
                        </CardActions>
                    </Card>
                </div>
                {/* Repeat for other cards */}
                <div className="card">
                    <Card>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="180"
                                image={brand}
                                alt="Brand Promotion"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Brand Promotion
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary">
                            <a href="/corpevents" style={{textDecoration:"none",color:"#0E86A9"}}>
                                Book an event
                                </a>
                            </Button>
                        </CardActions>
                    </Card>
                </div>
                <div className="card">
                    <Card>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="180"
                                image={exhi}
                                alt="Exhibition Stalls"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Exhibition Stalls
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary">
                                <a href="/corpevents" style={{textDecoration:"none",color:"#0E86A9"}}>
                                Book an event
                                </a>
                            </Button>
                        </CardActions>
                    </Card>
                </div>
                <div className="card">
                    <Card>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="180"
                                image={party}
                                alt="Parties"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Parties
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary">
                            <a href="/partyevents" style={{textDecoration:"none",color:"#0E86A9"}}>
                                Book an event
                                </a>
                            </Button>
                        </CardActions>
                    </Card>
                </div>
                <div className="card">
                    <Card>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="180"
                                image={wedding}
                                alt="Weddings"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    
                                    Weddings
                                   
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary">
                            <a href="/weddinevents" style={{textDecoration:"none",color:"#0E86A9"}}>
                                Book an event
                                </a>
                            </Button>
                        </CardActions>
                    </Card>
                </div>
                <div className="card">
                    <Card>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="180"
                                image={concert}
                                alt="Concerts"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Concerts
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary">
                            <a href="/partyevents" style={{textDecoration:"none",color:"#0E86A9"}}>
                                Book an event
                                </a>
                            </Button>
                        </CardActions>
                    </Card>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Event;
