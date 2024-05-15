
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { useNavigate } from 'react-router-dom';
import Homes from '../img/at psi img/home1.jpg';
import Homes4 from '../img/at psi img/home2.jfif';
import Homes2 from '../img/at psi img/home2.jpg';
import Homes3 from '../img/at psi img/home3.jpg';

const HompageCarrousel = () => {
    const navigate = useNavigate();

    const handleGoNotFound = () => {
        navigate('/NotFound')
    }

    const handleGoResponsiveAppBar = () => {
        navigate('/responsiveAppBar')
    }

    const handleGoSpaceMarket = () => {
        navigate('/SpaceMarket')
    }

    const handleGoConsultants = () => {
        navigate('/Consultant')
    }
    return (
        <div>
            <Carousel indicators={false}>
                <Carousel.Item interval={1000} >
                    <div style={{ position: 'relative' }}>
                        <img src={Homes} text="First slide" alt='' style={{ width: '100%', height: '70vh' }} />
                        <div style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            background: 'linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(255, 255, 255, 0.8))',
                            zIndex: 1,
                        }}></div>
                        <div style={{
                            position: 'absolute',
                            top: '25%',
                            left: 150,
                            padding: '20px',
                            zIndex: 2,
                        }}>
                            <Typography variant="h2" gutterBottom className='text-white '>
                                Freelance
                            </Typography>
                            <Typography variant="h5" gutterBottom className='text-white my-2'>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea repudiandae, a voluptatibus repellat temporibus officiis similique amet illo ut nobis in sunt voluptas adipisci rem ex nihil consequuntur sed! Hic!
                            </Typography>
                            <Button
                                className='my-2 text-capitalize'
                                sx={{
                                    '&:hover': {
                                        border: '1px solid #413DEE',
                                        color: '#413DEE',
                                    },
                                }}

                                onClick={handleGoResponsiveAppBar}
                                variant="contained"
                                color="primary"

                            >
                                Freelance services
                            </Button>
                            <Typography variant='h2' className='text-white mt-5 mb-3'></Typography>
                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item interval={1500}>
                    <div style={{ position: 'relative' }}>
                        <img src={Homes2} text="Second slide" alt='' style={{ width: '100%', height: '70vh' }} />
                        <div style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            background: 'linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(255, 255, 255, 0.8))',
                            zIndex: 1,
                        }}></div>
                        <div style={{
                            position: 'absolute',
                            top: '25%',
                            left: 150,
                            padding: '20px',
                            zIndex: 2,
                        }}>
                            <Typography variant="h2" gutterBottom className='text-white '>
                                Market Space
                            </Typography>
                            <Typography variant="h5" gutterBottom className='text-white my-2'>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea repudiandae, a voluptatibus repellat temporibus officiis similique amet illo ut nobis in sunt voluptas adipisci rem ex nihil consequuntur sed! Hic!
                            </Typography>
                            <Button
                                className='my-2 text-capitalize'
                                sx={{
                                    '&:hover': {
                                        border: '1px solid #413DEE',
                                        color: '#413DEE',
                                    },
                                }}

                                onClick={handleGoSpaceMarket}
                                variant="contained"
                                color="primary"

                            >
                                Market Space services
                            </Button>
                            <Typography variant='h2' className='text-white mt-5 mb-3'></Typography>
                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item interval={1500}>
                    <div style={{ position: 'relative' }}>
                        <img src={Homes3} text="Third slide" alt='' style={{ width: '100%', height: '70vh' }} />
                        <div style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            background: 'linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(255, 255, 255, 0.8))',
                            zIndex: 1,
                        }}></div>
                        <div style={{
                            position: 'absolute',
                            top: '30%',
                            left: 150,
                            padding: '20px',
                            zIndex: 2,
                        }}>
                            <Typography variant="h2" gutterBottom className='text-white '>
                                Consultancy
                            </Typography>
                            <Typography variant="h5" gutterBottom className='text-white my-2'>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea repudiandae, a voluptatibus repellat temporibus officiis similique amet illo ut nobis in sunt voluptas adipisci rem ex nihil consequuntur sed! Hic!
                            </Typography>
                            <Button
                                className='my-2 text-capitalize'
                                sx={{
                                    '&:hover': {
                                        border: '1px solid #413DEE',
                                        color: '#413DEE',
                                    },
                                }}

                                onClick={handleGoConsultants}
                                variant="contained"
                                color="primary"

                            >
                                Consultancy services
                            </Button>
                            <Typography variant='h2' className='text-white mt-5 mb-3'></Typography>
                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item interval={1500}>
                    <div style={{ position: 'relative' }}>
                        <img src={Homes4} text="Third slide" alt='' style={{ width: '100%', height: '70vh' }} />
                        <div style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            background: 'linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(255, 255, 255, 0.8))',
                            zIndex: 1,
                        }}></div>
                        <div style={{
                            position: 'absolute',
                            top: '30%',
                            left: 150,
                            padding: '20px',
                            zIndex: 2,
                        }}>
                            <Typography variant="h2" gutterBottom className='text-white '>
                                Industrialisation
                            </Typography>
                            <Typography variant="h5" gutterBottom className='text-white my-2'>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea repudiandae, a voluptatibus repellat temporibus officiis similique amet illo ut nobis in sunt voluptas adipisci rem ex nihil consequuntur sed! Hic!
                            </Typography>
                            <Button
                                className='my-2 text-capitalize'
                                sx={{
                                    '&:hover': {
                                        border: '1px solid #413DEE',
                                        color: '#413DEE',
                                    },
                                }}

                                onClick={handleGoNotFound}
                                variant="contained"
                                color="primary"

                            >
                                industrialization services
                            </Button>

                        </div>
                    </div>
                </Carousel.Item>
            </Carousel>
        </div>
        // <div>
        //     <Carousel>
        //         <Carousel.Item interval={1000} >
        //             <img src={Homes} text="First slide" alt=''/>
        //             <Carousel.Caption className="d-flex justify-content-center align-items-center" style={{ marginBottom: "15%" }}>
        //                 <div>
        //                     <Typography className='text-center text-white mt-5 fs-1 fw-normal fs-sm-5'> Leading space consultancy and Engineering Solution Provider in the African space industry</Typography>
        //                 </div>
        //             </Carousel.Caption>
        //         </Carousel.Item>
        //         <Carousel.Item interval={500}>
        //             <img src={Homes2} style={{width:'100%', height:'80vh'}} text="Second slide" alt='' />
        //             <Carousel.Caption className="d-flex justify-content-center align-items-center" style={{ marginBottom: "15%" }}>
        //                 <div>
        //                     <Typography className='text-center text-white mt-5 fs-1 fw-normal fs-sm-5'> Leading space consultancy and Engineering Solution Provider in the African space industry</Typography>
        //                 </div>
        //             </Carousel.Caption>
        //         </Carousel.Item>
        //         <Carousel.Item>
        //             <img src={Homes3} style={{width:'100%', height:'80vh'}} text="Third slide" alt='' />
        //             <Carousel.Caption className="d-flex justify-content-center align-items-center" style={{ marginBottom: "15%" }}>
        //                 <div>
        //                     <Typography className='text-center text-white mt-5 fs-1 fw-normal fs-sm-5'> Leading space consultancy and Engineering Solution Provider in the African space industry</Typography>
        //                 </div>
        //             </Carousel.Caption>
        //         </Carousel.Item>
        //     </Carousel>
        // </div>
    )
}

export default HompageCarrousel