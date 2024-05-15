import BusinessIcon from '@mui/icons-material/Business';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import LocationOn from "@mui/icons-material/LocationOn";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import * as React from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import TypeWriterEffect from "react-typewriter-effect";
// import AddLocationAltRoundedIcon from '@mui/icons-material/AddLocationAltRounded';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import { Divider, Skeleton } from '@mui/material';
import CardMedia from '@mui/material/CardMedia';
import Stack from "@mui/material/Stack";
import AOS from "aos";
import "aos/dist/aos.css";
import { format } from 'date-fns';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Process3 from '../img/at psi img/acquisition_12140437.png';
import Process1 from '../img/at psi img/advert_1058636.png';
import Process2 from '../img/at psi img/relocation_12103637.png';
import completed from '../pages/images/undraw_completed_m9ci.svg';
import review from '../pages/images/undraw_for_review_eqxk.svg';
import confirmer from '../pages/images/undraw_order_confirmed_re_g0if.svg';
import performance from '../pages/images/undraw_performance_overview_re_mqrq.svg';
import stand from '../pages/images/undraw_stand_out_-1-oag.svg';
import technology from '../pages/images/undraw_visionary_technology_re_jfp7.svg';
import time from '../pages/images/undraw_work_time_re_hdyv.svg';
import { fetchenterprisesFunction, fetchprofilesFunction, fetchprojectsFunction, fetchUsersFunction } from '../services/GetFunction/GetEmployers/getEmployersFunctions';
import Carouselle from './FreelanceCaousel/Carousel';
import './ResponsiveAppBar.css';
import BackToTop from './ScoolTop/BackToTop';
import experience from './images/undraw_experience_design_re_dmqq.svg';


const linksArray = ["Accueil", "Services", "À propos de nous", "Actualités", "Contact"];

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));



function ResponsiveAppBar() {

  const dispatch = useDispatch();

  /** dispacher des projet */

  const navigate = useNavigate();

  const handleVoirClick = () => {
    navigate('/DetailProjet');
  };

  const handleLogin = () => {
    navigate('/account');
  };

  const handleSingUp = () => {
    navigate('/login');
  };

  React.useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  /**recuperation des projets */
  const [projects, setProjects] = React.useState([]);

  React.useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetchprojectsFunction();
        setProjects(response.slice(-6));
        console.log('les projet', response);
      } catch (error) {
        console.log(error);
      }
    };

    fetchProjects();
  }, []);

  /** nombre total de emploi */
  const [projetCount, setProjetCount] = React.useState(0);

  React.useEffect(() => {
    const fetchProjetCount = async () => {
      try {
        const response = await fetchprojectsFunction();
        const totalCount = response.length;
        console.log(totalCount);
        setProjetCount(totalCount);
      } catch (error) {
        console.error('Error fetching freelance count:', error);
      }
    };

    fetchProjetCount();
  }, []);

  /** nombre total de freelance */
  const [freelanceCount, setFreelanceCount] = React.useState(0);

  React.useEffect(() => {
    const fetchFreelanceCount = async () => {
      try {
        const response = await fetchprofilesFunction();
        const totalCount = response.length;
        setFreelanceCount(totalCount);
        console.log(totalCount);
      } catch (error) {
        console.error('Error fetching freelance count:', error);
      }
    };

    fetchFreelanceCount();
  }, []);

  /** nombre total de freelance */
  const [interprisesCount, setInterprisesCount] = React.useState(0);

  React.useEffect(() => {
    const fetchInterprisesCount = async () => {
      try {
        const response = await fetchenterprisesFunction();
        const totalCount = response.length;
        setInterprisesCount(totalCount);
        console.log(totalCount);
      } catch (error) {
        console.error('Error fetching freelance count:', error);
      }
    };

    fetchInterprisesCount();
  }, []);

  function formatDate(date) {
    return format(new Date(date), 'dd-MM-yyyy')
  }

  /**freelance */
  const [profiles, setProfiles] = React.useState([]);

  React.useEffect(() => {
    const fetchProfiles = async () => {
      try {
        const response = await fetchUsersFunction();
        setProfiles(response.slice(-8));
        console.log('les user sont', response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchProfiles();
  }, []);

  const filteredUsers = profiles.filter(user => user.userFunction?.id === 2);

  const filteredUserEployeur = profiles.filter(user => user.userFunction?.id === 1);

  // const filteredUser = profiles.find(user => user.userFunction.id === 2);
  console.log('les freelance', filteredUsers);
  return (
    <>
      <Container fluid className="bg-body-tertiary">
        <Header links={linksArray} />
      </Container>

      {/* section header */}
      <Grid fluid component="main"
        style={{
          backgroundImage: 'url(https://www.rheagroup.com/wp-content/uploads/2021/05/rhea-group-space-banner-768x425.jpg)',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          flexDirection: 'start',
          justifyContent: 'center',
          alignItems: 'center'

        }}
      >

        <Grid
          sx={{
            height: '470px',
            // backgroundColor: '#30509dbf',
            padding: {
              xs: '10px',
              sm: '50px',
              md: '120px'
            },
            margin: 'auto',
          }}
        >
          <Grid className='mt-5 mt-sm-0'>
            <Grid className='my-5 my-sm-0'>
              <Box sx={{ padding: 2 }} data-aos="fade-right">
                <Typography className='text-white mt-2 fs-3 fw-normal fs-sm-5'>
                  FREELANCE
                  <Divider sx={{ backgroundColor: 'white', height: 5, width: 100, borderRadius: 5 }} />
                </Typography>
                <Typography className='text-white mt-2 fs-3 fw-normal fs-sm-5'>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                </Typography>
              </Box>
              <Box className='mt-3'>
                <Typography className=' mb-5' sx={{ marginLeft: 2.5 }}>
                  <TypeWriterEffect
                    textStyle={{
                      fontFamily: "Red Hat Display",
                      fontWeight: 500,
                      fontSize: "1.5em",
                      color: "white",
                    }}
                    startDelay={2000}
                    cursorColor="#FFFFFF"
                    multiText={[
                      "Find a job that matches your interests and skills",
                      "Find jobs here in several fields...",
                      "Post a job offer...",
                      "Find the best freelance profiles....",
                      "Browse our different employer jobs...",
                    ]}
                    multiTextDelay={1000}
                    typeSpeed={90}
                    multiTextLoop
                  />
                </Typography>
                <Box>
                  {/* <Typography className='mb-5 text-white lh-sm text-wrap' paragraph>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id
                    purus sodales, pulvinar purus dsld;woefjnwamsacda;ellqwfnmwa
                  </Typography> */}
                </Box>
              </Box>
            </Grid>

            <Container maxWidth="sm" className='mt-5'>
              <Grid
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignContent: 'center',
                }}
              >
                <Box
                  sx={{
                    flexGrow: 1,
                    padding: {
                      xs: '10px',
                      sm: '20px',
                      md: '7px'
                    },
                  }}
                >
                  <Grid container spacing={2} sx={{ padding: { xs: '10px', sm: '20px', md: '4px' } }}>
                    <Grid item xs={false} sm={4} md={4}
                      data-aos="fade-down-right">
                      <Item>
                        <Card

                          sx={{
                            p: 4,
                            boxShadow: '0 1px 3px rgba(0, 127, 255, 0.1)',
                            display: 'flex',
                            flexDirection: {
                              xs: 'column', // mobile
                              sm: 'row', // tablet and up
                            },
                          }}
                        >
                          <CardMedia
                            width="50"
                            height="50"

                            sx={{

                              width: { xs: '100%', sm: 100 },
                              mr: { sm: 1 },
                              mb: { xs: 0, sm: 0 },
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center'
                            }}
                          ><Box sx={{ background: '#E7F0FA', padding: '20px' }} className="rounded">< BusinessCenterIcon sx={{ color: '#0A65CC' }} /></Box></CardMedia>
                          <Box>
                            <Typography fontWeight="bold" noWrap className='fs-2'>
                              {projetCount}
                            </Typography>
                            <Typography variant="body2" color="text.secondary" fontWeight="medium" className='fs-5'>
                              Jobs
                            </Typography>
                          </Box>
                        </Card>
                      </Item>
                    </Grid>
                    <Grid item xs={false} sm={4} md={4} data-aos="fade-down">
                      <Item>
                        <Card

                          sx={{
                            p: 4,
                            boxShadow: '0 1px 3px rgba(0, 127, 255, 0.1)',
                            display: 'flex',
                            flexDirection: {
                              xs: 'column', // mobile
                              sm: 'row', // tablet and up
                            },
                          }}
                        >
                          <CardMedia
                            width="50"
                            height="50"

                            sx={{

                              width: { xs: '100%', sm: 100 },
                              mr: { sm: 1 },
                              mb: { xs: 0, sm: 0 },
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center'
                            }}
                          ><Box sx={{ background: '#0A65CC', padding: '20px' }} className="rounded">< BusinessIcon sx={{ color: '#fff' }} /></Box></CardMedia>
                          <Box sx={{}}>
                            <Typography fontWeight="bold" noWrap className='fs-2'>
                              {interprisesCount}
                            </Typography>
                            <Typography variant="body2" color="text.secondary" fontWeight="medium" className='fs-5'>
                              Employers
                            </Typography>

                          </Box>
                        </Card>
                      </Item>
                    </Grid>
                    <Grid item xs={false} sm={4} md={4} data-aos="fade-down-left">
                      <Item>
                        <Card

                          sx={{
                            p: 4,
                            boxShadow: '0 1px 3px rgba(0, 127, 255, 0.1)',
                            display: 'flex',
                            flexDirection: {
                              xs: 'column', // mobile
                              sm: 'row', // tablet and up
                            },
                          }}
                        >
                          <CardMedia
                            width="50"
                            height="50"

                            sx={{

                              width: { xs: '100%', sm: 100 },
                              mr: { sm: 1 },
                              mb: { xs: 0, sm: 0 },
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center'
                            }}
                          ><Box sx={{ background: '#E7F0FA', padding: '20px' }} className="rounded">< PersonOutlineOutlinedIcon sx={{ color: '#0A65CC' }} /></Box></CardMedia>
                          <Box>
                            <Typography fontWeight="bold" noWrap className='fs-2'>
                              {freelanceCount}
                            </Typography>
                            <Typography variant="body2" color="text.secondary" fontWeight="medium" className='fs-5'>
                              Freelances
                            </Typography>

                          </Box>
                        </Card>
                      </Item>
                    </Grid>

                  </Grid>
                </Box>

              </Grid>
            </Container>
          </Grid>

        </Grid>
      </Grid>

      {/** section about freelance */}
      <Grid className='mb-5'
        sx={{
          marginTop: {
            xl: '10%',
            lg: '15%',
            md: '15%',
            sm: '40%',
            xs: '140%',
          },

        }}
      >
        <Row >
          <Col xs={false} sm={6} md={6} className="p-5 text-center mt-5" data-aos="fade-right">
            <Typography variant='h3' className="text-center">Who is a freelancer?</Typography>
            <Box
              textAlign="left"
            >
              <Typography style={{ padding: 25 }}>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea repudiandae, a voluptatibus repellat temporibus officiis similique amet illo ut nobis in sunt voluptas adipisci rem ex nihil consequuntur sed! Hic!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci ducimus voluptatibus minima ipsum quasi. Quod similique modi repellat quas voluptate placeat labore et quos. Officia sed fugiat blanditiis. Quasi, rem.
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea repudiandae, a voluptatibus repellat temporibus officiis similique amet illo ut nobis in sunt voluptas adipisci rem ex nihil consequuntur sed! Hic!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci ducimus voluptatibus minima ipsum quasi. Quod similique modi repellat quas voluptate placeat labore et quos. Officia sed fugiat blanditiis. Quasi, rem.
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea repudiandae, a voluptatibus repellat temporibus officiis similique amet illo ut nobis in sunt voluptas adipisci rem ex nihil consequuntur sed! Hic!

              </Typography>

            </Box>
          </Col>
          <Col xs={12} sm={6} md={6} className='p-5' data-aos="fade-left">
            <img src='https://static.vecteezy.com/ti/vecteur-libre/p1/5933456-vector-illustration-of-a-man-working-at-a-laptop-freelance-promotion-in-the-network-manager-at-travail-a-distance-a-business-mechanism-gears-business-promotion-strategy-analyse-vectoriel.jpg' alt='top' width={500} height={'auto'} style={{ boxShadow: '5px 5px 5px 5px rgba(0, 0, 0, 0.1)', borderRadius: '2%' }} />
          </Col>
        </Row>
      </Grid>

      {/* section etapes */}
      {/* <Grid container className='my-5' sx={{ backgroundColor: '#f1f2f4'}}>
        <Container >
          <Typography variant="h5" className='text-dark  fs-2 fw-bold text-center pt-5 fs-sm-5'>
           Le processus de candidature
          </Typography>
          <Typography variant='body' className='fs-5 fw-bold text-center pt-2 fs-sm-6'>
          Pour réussir le test Pro, les freelances sont soumis à un processus sélectif en plusieurs étapes : une vérification manuelle par nos évaluateurs experts. Seuls les freelances hautement qualifiés y parviennent.
          </Typography>
        </Container>

        <Container>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
              <Grid item xs={6} sm={6} md={3} className=' my-5'>
                <Item>
                  <Card>

                    <CardContent sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                      <Avatar sx={{ m: 1, bgcolor: blue[500] }}>
                        1
                      </Avatar>
                      <Typography variant="h5" className='text-dark  fs-5 fw-bold text-center my-2'>
                        Créer un compte
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        This impressive paella is a perfect party dish and a fun meal to cook
                        together with your guests. Add 1 cup of frozen peas along with the mussels,
                        if you like.
                      </Typography>
                    </CardContent>


                  </Card>
                </Item>
              </Grid>

              <Grid item xs={6} sm={6} md={3} className=' my-5'>
                <Item>
                  <Card>

                    <CardContent sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                      <Avatar sx={{ m: 1, bgcolor: blue[500] }}>
                        2
                      </Avatar>
                      <Typography variant="h5" className='text-dark  fs-5 fw-bold text-center my-2'>
                        Télécharger le CV
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        This impressive paella is a perfect party dish and a fun meal to cook
                        together with your guests. Add 1 cup of frozen peas along with the mussels,
                        if you like.
                      </Typography>
                    </CardContent>


                  </Card>
                </Item>
              </Grid>
              <Grid item xs={6} sm={6} md={3} className=' my-5'>
                <Item>
                  <Card>

                    <CardContent sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                      <Avatar sx={{ m: 1, bgcolor: blue[500] }}>
                        3
                      </Avatar>
                      <Typography variant="h5" className='text-dark  fs-5 fw-bold text-center my-2'>
                        Trouver un emploi convenable
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        This impressive paella is a perfect party dish and a fun meal to cook
                        together with your guests. Add 1 cup o

                      </Typography>
                    </CardContent>


                  </Card>
                </Item>
              </Grid>
              <Grid item xs={6} sm={6} md={3} className=' my-5'>
                <Item>
                  <Card>

                    <CardContent sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                      <Avatar sx={{ m: 1, bgcolor: blue[500] }}>
                        4
                      </Avatar>
                      <Typography variant="h5" className='text-dark  fs-5 fw-bold text-center my-2'>
                        Postuler
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        This impressive paella is a perfect party dish and a fun meal to cook
                        together with your guests. Add 1 cup of frozen peas along with the mussels,
                        if you like.
                      </Typography>
                    </CardContent>


                  </Card>
                </Item>
              </Grid>
            </Grid>
          </Box>

        </Container>
      </Grid> */}

      <Grid sx={{
        padding: {
          xs: '10px',
          sm: '50px',
        },
        paddingInline: {
          md: '120px'
        },
        background: '#fbfcef',
        marginTop: '50px'
      }}>
        <Grid sx={{

          padding: {
            xs: '10px',
            sm: '50px',
          },
          paddingInline: {
            md: '100px'
          }
        }}>
          <Paper elevation={6}>
            <Grid fluid sx={{ background: '#fff', borderTop: 5, borderColor: '#135ed7', borderRadius: '5px' }}>
              <Container className='p-5 text-center' data-aos="fade-left">
                <Typography variant="h5" className='text-dark  fs-2 fw-bold text-center pt-5 fs-sm-5'>
                  The application process
                </Typography>
                <Container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  {/* <Box sx={{display:'flex', justifyContent:'center', alignItems:'center'}}> */}
                  <Typography variant='body2' className='text-center p-2' color="text.secondary" >
                    Freelancers undergo a selective, multi-stage process:
                  </Typography>
                  <Typography variant='body2' className='text-center' color="text.secondary">
                    a manual check by our expert assessors. Only highly-qualified freelancers pass.
                  </Typography>
                  {/* </Box> */}
                </Container>
              </Container>
              <Grid container className='px-5 pb-5' sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around' }}>
                <Grid item xs={3} sx={{ textAlign: 'center' }} >
                  <Box>
                    <img src='https://cdn.builder.io/api/v1/image/assets%2F1269a57212df4631b866219ba2013fa8%2F71f7185a8b554b238d1c99df85f2b10b' alt='' height='70' width='70' />
                  </Box>
                  <Typography className='text-darkblue my-2 fs-4 fw-bold fs-sm-5' data-aos="fade-down">
                    Application
                  </Typography>
                  <Typography className='mb-3 lh-sm fs-6' color="text.secondary">
                    Send application form
                  </Typography>
                </Grid>
                <Grid item xs={3} sx={{ textAlign: 'center' }} >
                  <Box>
                    <img src='https://cdn.builder.io/api/v1/image/assets%2F1269a57212df4631b866219ba2013fa8%2F9762175dba014fd7a98e72a851c73786' alt='' height='70' width='70' />
                  </Box>
                  <Typography className='text-darkblue my-2 fs-4 fw-bold fs-sm-5' data-aos="fade-down">
                    Selection
                  </Typography>
                  <Typography className='mb-3 fw-ligh lh-sm ' color="text.secondary">
                    A category expert reviews your application
                  </Typography>

                </Grid>
                <Grid item xs={3} sx={{ textAlign: 'center' }} >
                  <Box>
                    <img src='https://cdn.builder.io/api/v1/image/assets%2F1269a57212df4631b866219ba2013fa8%2F065562b5072c49c4849296f0eed17179' alt='' height='70' width='70' />
                  </Box>

                  <Typography className='text-darkblue my-2 fs-4 fw-bold fs-sm-5' data-aos="fade-down">
                    Decision
                  </Typography>
                  <Typography className='mb-3 fw-ligh lh-sm ' color="text.secondary">
                    We inform you of the approval, rejection or follow-up of your application.
                  </Typography>

                </Grid>
                <Grid item xs={3} sx={{ textAlign: 'center' }} >
                  <Box>
                    <img src='https://cdn.builder.io/api/v1/image/assets%2F1269a57212df4631b866219ba2013fa8%2F5120425793cf492eaaa8c126b515f8e4' alt='' height='70' width='70' />
                  </Box>
                  <Typography className='text-darkblue my-2 fs-4 fw-bold fs-sm-5' data-aos="fade-down">
                    Interviews
                  </Typography>
                  <Typography className='mb-3 lh-sm text-center' color="text.secondary">
                    If applicable Meet with an assessment expert
                  </Typography>
                </Grid>
              </Grid>

            </Grid>
          </Paper>
        </Grid>
      </Grid>

      <Grid fluid className='mb-5'
        style={{
          backgroundColor: '#ffff',
          height: '700px'
        }}
      >
        <Container>
          <Typography variant="h5" className='text-dark  fs-2 fw-bold text-center pt-5 fs-sm-5'>
            The best profiles
          </Typography>
        </Container>

        <Container className='mb-5'>
          <Grid className="my-5">
            <Carouselle />
          </Grid>
        </Container>
      </Grid>

      {/* section selection */}
      <Grid sx={{
        background: '#fbfcef',
        marginTop: '-5%'
      }}>
        <Grid sx={{

        }}>

          <Grid fluid >
            <Container className='p-5 text-center'>
              <Typography variant="h5" className='text-dark  fs-2 fw-bold text-center pt-5 fs-sm-5'>
                Here's how we select our freelancers
              </Typography>

            </Container>
            <Grid container className='px-5 pb-5' sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around' }}>
              <Grid item xs={6} sm={6} md={4} sx={{ textAlign: 'center' }} >
                <Box>
                  <img src={performance} alt='' height='70' width='70' color='primary' />
                </Box>
                <Typography className='text-darkblue my-2 fs-4 fw-bold fs-sm-5'>
                  Their skills and expertise
                </Typography>
                <Typography className='mb-3 lh-sm fs-6' color="text.secondary">
                  Significant experience in their field of specialization
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6} md={4} sx={{ textAlign: 'center' }} >
                <Box>
                  <img src={confirmer} alt='' height='70' width='70' />
                </Box>
                <Typography className='text-darkblue my-2 fs-4 fw-bold fs-sm-5'>
                  Quality deliveries
                </Typography>
                <Typography className='mb-3 lh-sm fs-6' color="text.secondary">
                  Impressive track record, outstanding portfolio and customers
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6} md={4} sx={{ textAlign: 'center' }} >
                <Box>
                  <img src={time} alt='' height='70' width='70' />
                </Box>
                <Typography className='text-darkblue my-2 fs-4 fw-bold fs-sm-5'>
                  Work and training
                </Typography>
                <Typography className='mb-3 lh-sm fs-6' color="text.secondary">
                  Relevant professional experience and recognized expertise
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6} md={4} sx={{ textAlign: 'center' }} >
                <Box>
                  <img src={technology} alt='' height='70' width='70' />
                </Box>
                <Typography className='text-darkblue my-2 fs-4 fw-bold fs-sm-5'>
                  Active digital presence
                </Typography>
                <Typography className='mb-3 lh-sm fs-6' color="text.secondary">
                  Through relevant networks and sites
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6} md={4} sx={{ textAlign: 'center' }} >
                <Box>
                  <img src={completed} alt='' height='70' width='70' />
                </Box>
                <Typography className='text-darkblue my-2 fs-4 fw-bold fs-sm-5'>
                  Complete profile
                </Typography>
                <Typography className='mb-3 lh-sm fs-6' color="text.secondary">
                  Completion of Profile and Services page. Compliance with PSI guidelines
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6} md={4} sx={{ textAlign: 'center' }} >
                <Box>
                  <img src={experience} alt='' height='70' width='70' />
                </Box>
                <Typography className='text-darkblue my-2 fs-4 fw-bold fs-sm-5'>
                  Language skills
                </Typography>
                <Typography className='mb-3 lh-sm fs-6' color="text.secondary">
                  Fluent communication in English and/or French
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6} md={4} sx={{ textAlign: 'center' }} >
                <Box>
                  <img src={stand} alt='' height='70' width='70' />
                </Box>
                <Typography className='text-darkblue my-2 fs-4 fw-bold fs-sm-5'>
                  Strong motivation
                </Typography>
                <Typography className='mb-3 lh-sm fs-6' color="text.secondary">
                  Desire to work with professional companies
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6} md={4} sx={{ textAlign: 'center' }} >
                <Box>
                  <img src={review} alt='' height='70' width='70' />
                </Box>
                <Typography className='text-darkblue my-2 fs-4 fw-bold fs-sm-5'>
                  Performance indicators
                </Typography>
                <Typography className='mb-3 lh-sm fs-6' color="text.secondary">
                  Top ratings and reviews on and off PSI
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      {/* section des offres d'emploi */}
      <Container style={{ marginTop: "10%" }}>
        <Row>
          <Col className='fw-bold fs-3' data-aos="fade-left">Job offers</Col>
          <Col className='d-flex justify-content-end text-primary fs-5' data-aos="fade-left">  <i class="bi bi-arrow-right"><a href='/#'>See All </a></i></Col>
        </Row>
      </Container>

      <Container className='my-5'>
        <Box sx={{ flexGrow: 1 }} >
          <Grid container spacing={2}  >
            {projects.length === 0 ? (
              <Grid item xs={12} sm={6} md={4} className=' my-3' data-aos="fade-down">
                <Item>
                  <Card className='shadow rounded'>
                    <CardActions disableSpacing>
                      <IconButton aria-label="calender">
                        <Skeleton animation="wave" variant="circular" width={40} height={40} />
                      </IconButton>
                      <Skeleton animation="wave" variant="rectangular" />
                    </CardActions>
                    <CardContent>
                      <Typography variant="h5" className='text-primary mb-2 fs-4 fw-normal text-center'>
                        <Skeleton variant="rectangular" sx={{ borderRadius: 2 }} />
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        <Skeleton variant="rectangular" sx={{ borderRadius: 2 }} />
                      </Typography>
                    </CardContent>
                    <Skeleton animation="wave" variant="circular" width={40} height={40} />

                  </Card>
                </Item>
              </Grid>
            ) : projects.map((project) => (
              <Grid item xs={12} sm={6} md={4} className=' my-3' key={project.id} data-aos="fade-down">
                <Item>
                  {/* <Card className='shadow rounded'>
                    <CardActions disableSpacing>
                      <IconButton aria-label="calender">
                        <CalendarMonthRoundedIcon />
                      </IconButton>
                      <Typography>{formatDate(project.dateCreation)}</Typography>
                    </CardActions>
                    <CardContent>
                      <Typography variant="h5" className='text-primary mb-2 fs-4 fw-normal text-center'>
                        Project title: {project.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Project description: {project.wording}
                      </Typography>
                    </CardContent>
                    <CardHeader
                      avatar={
                        <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                          {project.users.userName.charAt(0)}
                        </Avatar>
                      }
                      action={
                        <IconButton aria-label="settings">
                          <RemoveRedEyeRoundedIcon onClick={() => handleVoirClick(dispatch(setProjetId(project.id)))} />
                        </IconButton>
                      }
                      title={
                        <Typography variant="h5" className='text-dark  fs-5 fw-bold text-start'>
                          Employer: {project.users.userName}
                        </Typography>
                      }
                    // subheader={
                    //   <Typography variant="body2" color="text.secondary" className='text-start'>
                    //     <LocationOn sx={{ color: grey[500] }} />{" "}
                    //     {project.pays.name} - {project.ville.name}
                    //   </Typography>
                    // }
                    />

                  </Card> */}
                </Item>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>

      {/** Freelance section */}
      <Container >
        <Grid sx={{
          marginBlock: '100px'
        }} >
          <Grid sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Box data-aos="fade-left">
              <Typography className='text-dark mb-2 fs-1 fw-bold fs-sm-5'>
                Our freelancers
              </Typography>
            </Box>
            {/* <Button variant="outlined" sx={{ height: '35px', borderRadius: '20px' }}>Tout voir</Button> */}
          </Grid>
          <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 3, sm: 8, md: 12 }} className='my-5'>
            {/* {filteredUsers.map(filteredUser => (
              <Grid item xs={12} sm={6} md={3} key={filteredUser.id} data-aos="fade-down">
                <Paper elevation={6}>
                  <Card sx={{ textAlign: 'start' }}>
                    <CardMedia
                      component="img"
                      // sx={{ height: 60 }}
                      image={`${URL_SERVER}${filteredUser.profile}`}
                      alt="Live from space album cover"
                    />
                    <CardContent>
                      <Stack spacing={0.5} className="ms-3">
                        <Typography fontWeight="bold" className="ps-2">
                          Name: {filteredUser.userName}
                        </Typography>
                        <Typography fontWeight="bold" className="ps-2">
                          Network link: {filteredUser.profile?.linkedInLink}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          <LocationOn sx={{ color: "grey.500" }} />location: {filteredUser.localisation}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          Ages: {filteredUser.age}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          sectors: {filteredUser.profile?.domain.titled}
                        </Typography>
                      </Stack>
                    </CardContent>
                    <CardActions sx={{ display: 'flex', justifyContent: 'center' }}>

                      <Link style={{ cursor: 'pointer' }} onClick={() => handleVoirClick(dispatch(setActualiteId(actu.id)))} underline="none">
                        {' Lire...'}
                      </Link>
                    </CardActions>
                  </Card>
                </Paper>
              </Grid>
            ))} */}
            <Container >
              <div className='row'>
                <div className='col-3'>
                  <Grid item sx={{ width: 300 }} data-aos="fade-down">
                    <Paper elevation={6}>
                      <Card sx={{ textAlign: 'start' }}>
                        <CardMedia
                          component="img"
                          // sx={{ height: 60 }}
                          image="data:image/jpeg;base64,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"
                          alt="Live from space album cover"
                        />
                        <CardContent>
                          <Stack spacing={0.5} className="ms-3">
                            <Typography fontWeight="bold" className="ps-2">
                              Name: freelancers
                            </Typography>
                            <Typography fontWeight="bold" className="ps-2">
                              Network link: linkedInLink
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                              <LocationOn sx={{ color: "grey.500" }} />location: pris
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                              Ages: 22 years
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                              sectors: data science
                            </Typography>
                          </Stack>
                        </CardContent>
                        <CardActions sx={{ display: 'flex', justifyContent: 'center' }}>

                          <Typography style={{ cursor: 'pointer' }} underline="none">
                            {' Lire...'}
                          </Typography>
                        </CardActions>
                      </Card>
                    </Paper>
                  </Grid>
                </div>
                <div className='col-3'>
                  <Grid item sx={{ width: 300 }} data-aos="fade-down">
                    <Paper elevation={6}>
                      <Card sx={{ textAlign: 'start' }}>
                        <CardMedia
                          component="img"
                          // sx={{ height: 60 }}
                          image="data:image/jpeg;base64,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"
                          alt="Live from space album cover"
                        />
                        <CardContent>
                          <Stack spacing={0.5} className="ms-3">
                            <Typography fontWeight="bold" className="ps-2">
                              Name: freelancers
                            </Typography>
                            <Typography fontWeight="bold" className="ps-2">
                              Network link: linkedInLink
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                              <LocationOn sx={{ color: "grey.500" }} />location: pris
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                              Ages: 22 years
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                              sectors: data science
                            </Typography>
                          </Stack>
                        </CardContent>
                        <CardActions sx={{ display: 'flex', justifyContent: 'center' }}>

                          <Typography style={{ cursor: 'pointer' }} underline="none">
                            {' Lire...'}
                          </Typography>
                        </CardActions>
                      </Card>
                    </Paper>
                  </Grid>
                </div>
                <div className='col-3'>
                  <Grid item sx={{ width: 300 }} data-aos="fade-down">
                    <Paper elevation={6}>
                      <Card sx={{ textAlign: 'start' }}>
                        <CardMedia
                          component="img"
                          // sx={{ height: 60 }}
                          image="data:image/jpeg;base64,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"
                          alt="Live from space album cover"
                        />
                        <CardContent>
                          <Stack spacing={0.5} className="ms-3">
                            <Typography fontWeight="bold" className="ps-2">
                              Name: freelancers
                            </Typography>
                            <Typography fontWeight="bold" className="ps-2">
                              Network link: linkedInLink
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                              <LocationOn sx={{ color: "grey.500" }} />location: pris
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                              Ages: 22 years
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                              sectors: data science
                            </Typography>
                          </Stack>
                        </CardContent>
                        <CardActions sx={{ display: 'flex', justifyContent: 'center' }}>

                          <Typography style={{ cursor: 'pointer' }} underline="none">
                            {' Lire...'}
                          </Typography>
                        </CardActions>
                      </Card>
                    </Paper>
                  </Grid>
                </div>
                <div className='col-3'>
                  <Grid item sx={{ width: 300 }} data-aos="fade-down">
                    <Paper elevation={6}>
                      <Card sx={{ textAlign: 'start' }}>
                        <CardMedia
                          component="img"
                          // sx={{ height: 60 }}
                          image="data:image/jpeg;base64,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"
                          alt="Live from space album cover"
                        />
                        <CardContent>
                          <Stack spacing={0.5} className="ms-3">
                            <Typography fontWeight="bold" className="ps-2">
                              Name: freelancers
                            </Typography>
                            <Typography fontWeight="bold" className="ps-2">
                              Network link: linkedInLink
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                              <LocationOn sx={{ color: "grey.500" }} />location: pris
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                              Ages: 22 years
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                              sectors: data science
                            </Typography>
                          </Stack>
                        </CardContent>
                        <CardActions sx={{ display: 'flex', justifyContent: 'center' }}>

                          <Typography style={{ cursor: 'pointer' }} underline="none">
                            {' Lire...'}
                          </Typography>
                        </CardActions>
                      </Card>
                    </Paper>
                  </Grid>
                </div>
              </div>
            </Container>

          </Grid>
        </Grid>
      </Container>

      {/* <Grid fluid className='mb-5'
        style={{
          backgroundColor: '#ffff',
        }}
      >
        <Container>
          <Typography variant="h5" className='text-dark  fs-2 fw-bold text-start pt-5 fs-sm-5'>
            Emploi de premier plan
          </Typography>
        </Container>

        <Container className='my-5'>
          <Box sx={{ flexGrow: 1, marginBottom: 2 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6} md={4}>
                <Item>
                  <Card className='shadow rounded'>
                    <CardHeader
                      avatar={
                        <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                          A
                        </Avatar>
                      }
                      action={

                        <button type="button" class="btn" style={{ backgroundColor: '#FCEEEE', color: '#EB9292' }} >En vedette</button>

                      }
                      title={
                        <Typography variant="h5" className='text-dark  fs-5 fw-bold text-start'>
                          Adela Parkson
                        </Typography>
                      }
                      subheader={
                        <Typography variant="body2" color="text.secondary" className='text-start'>
                          <AddLocationAltRoundedIcon />This impressive
                        </Typography>
                      }
                    />
                    <CardContent>
                      <button type="button" class="btn text-primary " style={{ backgroundColor: '#E7F0FA' }}>Postes à pourvoir (1)</button>
                    </CardContent>

                  </Card>
                </Item>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <Item>
                  <Card className='shadow rounded'>
                    <CardHeader
                      avatar={
                        <Avatar sx={{ bgcolor: green[500] }} aria-label="recipe">
                          s
                        </Avatar>
                      }
                      action={
                        <button type="button" class="btn" style={{ backgroundColor: '#FCEEEE', color: '#EB9292' }} >En vedette</button>
                      }
                      title={
                        <Typography variant="h5" className='text-dark  fs-6 fw-bold text-start'>
                          Shrimp and Ch
                        </Typography>
                      }
                      subheader={
                        <Typography variant="body2" color="text.secondary" className='text-start'>
                          <AddLocationAltRoundedIcon /> This impressive
                        </Typography>
                      }
                    />
                    <CardContent>
                      <button type="button" class="btn text-primary " style={{ backgroundColor: '#E7F0FA' }}>Postes à pourvoir (1)</button>
                    </CardContent>


                  </Card>
                </Item>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <Item>
                  <Card className='shadow rounded'>
                    <CardHeader
                      avatar={
                        <Avatar sx={{ bgcolor: blue[500] }} aria-label="recipe">
                          S
                        </Avatar>
                      }
                      action={
                        <button type="button" class="btn" style={{ backgroundColor: '#FCEEEE', color: '#EB9292' }} >En vedette</button>
                      }
                      title={
                        <Typography variant="h5" className='text-dark  fs-5 fw-bold text-start'>
                          Shrimp
                        </Typography>
                      }
                      subheader={
                        <Typography variant="body2" color="text.secondary" className='text-start'>
                          <AddLocationAltRoundedIcon />This impressive
                        </Typography>
                      }
                    />
                    <CardContent>
                      <button type="button" class="btn text-primary " style={{ backgroundColor: '#E7F0FA' }}>Postes à pourvoir (1)</button>
                    </CardContent>


                  </Card>
                </Item>
              </Grid>

            </Grid>
          </Box>

          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6} md={4}>
                <Item>
                  <Card className='shadow rounded'>
                    <CardHeader
                      avatar={
                        <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                          A
                        </Avatar>
                      }
                      action={

                        <button type="button" class="btn" style={{ backgroundColor: '#FCEEEE', color: '#EB9292' }} >En vedette</button>

                      }
                      title={
                        <Typography variant="h5" className='text-dark  fs-5 fw-bold text-start'>
                          Adela Parkson
                        </Typography>
                      }
                      subheader={
                        <Typography variant="body2" color="text.secondary" className='text-start'>
                          <AddLocationAltRoundedIcon />This impressive
                        </Typography>
                      }
                    />
                    <CardContent>
                      <button type="button" class="btn text-primary " style={{ backgroundColor: '#E7F0FA' }}>Postes à pourvoir (1)</button>
                    </CardContent>

                  </Card>
                </Item>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <Item>
                  <Card className='shadow rounded'>
                    <CardHeader
                      avatar={
                        <Avatar sx={{ bgcolor: green[500] }} aria-label="recipe">
                          s
                        </Avatar>
                      }
                      action={
                        <button type="button" class="btn" style={{ backgroundColor: '#FCEEEE', color: '#EB9292' }} >En vedette</button>
                      }
                      title={
                        <Typography variant="h5" className='text-dark  fs-6 fw-bold text-start'>
                          Shrimp and Ch
                        </Typography>
                      }
                      subheader={
                        <Typography variant="body2" color="text.secondary" className='text-start'>
                          <AddLocationAltRoundedIcon /> This impressive
                        </Typography>
                      }
                    />
                    <CardContent>
                      <button type="button" class="btn text-primary " style={{ backgroundColor: '#E7F0FA' }}>Postes à pourvoir (1)</button>
                    </CardContent>


                  </Card>
                </Item>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <Item>
                  <Card className='shadow rounded'>
                    <CardHeader
                      avatar={
                        <Avatar sx={{ bgcolor: blue[500] }} aria-label="recipe">
                          S
                        </Avatar>
                      }
                      action={
                        <button type="button" class="btn" style={{ backgroundColor: '#FCEEEE', color: '#EB9292' }} >En vedette</button>
                      }
                      title={
                        <Typography variant="h5" className='text-dark  fs-5 fw-bold text-start'>
                          Shrimp
                        </Typography>
                      }
                      subheader={
                        <Typography variant="body2" color="text.secondary" className='text-start'>
                          <AddLocationAltRoundedIcon />This impressive
                        </Typography>
                      }
                    />
                    <CardContent>
                      <button type="button" class="btn text-primary " style={{ backgroundColor: '#E7F0FA' }}>Postes à pourvoir (1)</button>
                    </CardContent>


                  </Card>
                </Item>
              </Grid>

            </Grid>
          </Box>
        </Container>
      </Grid> */}

      {/* Temoignage */}
      {/* <Grid  fluid className='mt-5'
        style={{
          backgroundColor:'#f1f2f4',
          height:'700px'
         }}
       >
        <Container>
          <Typography  variant="h5" className='text-dark  fs-2 fw-bold text-center pt-5 fs-sm-5'>
            Témoignages
          </Typography>
        </Container>

        <Container className='mb-5'>
        <Grid className="my-5">
          <CarrouselProfil />
        </Grid>
        </Container>
      </Grid> */}

      {/** section about freelance */}
      <Grid className='mb-5'
        style={{
          marginTop: '-3%',
        }}
      >
        <Row >
          <Col xs={12} sm={6} md={6} className='p-5' data-aos="fade-left" >
            <Box textAlign="right" >
              <img src='https://assets-global.website-files.com/62275984d0ebeff7da8c5ff9/639af458a95e0e19dea4fcbb_pexels-anna-shvets-5324941%20(1).jpg' alt='top' width={500} height={'auto'} style={{ boxShadow: '5px 5px 5px 5px rgba(0, 0, 0, 0.1)', borderRadius: '2%', }} />
            </Box>
          </Col>
          <Col xs={false} sm={6} md={6} className="p-5 text-center" data-aos="fade-right" >
            <Typography variant='h3' className="text-center">Who is a Employer?</Typography>
            <Box textAlign="left" >
              <Typography style={{ padding: 25 }}>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea repudiandae, a voluptatibus repellat temporibus officiis similique amet illo ut nobis in sunt voluptas adipisci rem ex nihil consequuntur sed! Hic!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci ducimus voluptatibus minima ipsum quasi. Quod similique modi repellat quas voluptate placeat labore et quos. Officia sed fugiat blanditiis. Quasi, rem.
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea repudiandae, a voluptatibus repellat temporibus officiis similique amet illo ut nobis in sunt voluptas adipisci rem ex nihil consequuntur sed! Hic!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci ducimus voluptatibus minima ipsum quasi. Quod similique modi repellat quas voluptate placeat labore et quos. Officia sed fugiat blanditiis. Quasi, rem.
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea repudiandae, a voluptatibus repellat temporibus officiis similique amet illo ut nobis in sunt voluptas adipisci rem ex nihil consequuntur sed! Hic!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci ducimus voluptatibus minima ipsum quasi. Quod similique modi repellat quas voluptate placeat labore et quos. Officia sed fugiat blanditiis. Quasi, rem.
              </Typography>

            </Box>
          </Col>
        </Row>
      </Grid>

      {/**prccess of accep employer */}

      <Grid sx={{
        padding: {
          xs: '10px',
          sm: '50px',
        },
        paddingInline: {
          md: '120px'
        },
        background: '#fbfcef',
        marginTop: '50px'
      }}>
        <Grid sx={{

          padding: {
            xs: '10px',
            sm: '50px',
          },
          paddingInline: {
            md: '100px'
          }
        }}>
          <Paper elevation={6}>
            <Grid fluid sx={{ background: '#fff', borderTop: 5, borderColor: '#135ed7', borderRadius: '5px' }}>
              <Container className='p-5 text-center' data-aos="fade-left">
                <Typography variant="h5" className='text-dark  fs-2 fw-bold text-center pt-5 fs-sm-5'>
                  The application process to become an employer
                </Typography>
                <Container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  {/* <Box sx={{display:'flex', justifyContent:'center', alignItems:'center'}}> */}
                  <Typography variant='body2' className='text-center p-2' color="text.secondary" >
                    Employers undergo a selective, multi-stage process:
                  </Typography>
                  <Typography variant='body2' className='text-center' color="text.secondary">
                    a manual check by our expert assessors. Only employers with a qualified company are selected.
                  </Typography>
                  {/* </Box> */}
                </Container>
              </Container>
              <Grid container className='px-5 pb-5' sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around' }}>
                <Grid item xs={3} sx={{ textAlign: 'center', marginBottom: '1%' }} >
                  <Box>
                    <img src={Process1} alt='' height='70' width='70' />
                  </Box>
                  <Typography className='text-darkblue my-2 fs-4 fw-bold fs-sm-5' data-aos="fade-down">
                    Make a request
                  </Typography>
                  <Typography className='mb-3 lh-sm fs-6' color="text.secondary">
                    Send the application form for your employer account optention
                  </Typography>
                </Grid>
                <Grid item xs={3} sx={{ textAlign: 'center' }} >
                  <Box>
                    <img src={Process2} alt='' height='70' width='70' />
                  </Box>
                  <Typography className='text-darkblue my-2 fs-4 fw-bold fs-sm-5' data-aos="fade-down">
                    Selection
                  </Typography>
                  <Typography className='mb-3 fw-ligh lh-sm ' color="text.secondary">
                    A category expert reviews your application
                  </Typography>

                </Grid>
                <Grid item xs={3} sx={{ textAlign: 'center' }} >
                  <Box>
                    <img src={Process3} alt='' height='70' width='70' />
                  </Box>

                  <Typography className='text-darkblue my-2 fs-4 fw-bold fs-sm-5' data-aos="fade-down">
                    Decision
                  </Typography>
                  <Typography className='mb-3 fw-ligh lh-sm ' color="text.secondary">
                    We inform you of the approval, rejection or follow-up of your application.
                  </Typography>

                </Grid>
                <Grid item xs={3} sx={{ textAlign: 'center' }} >
                  <Box>
                    <img src='https://cdn.builder.io/api/v1/image/assets%2F1269a57212df4631b866219ba2013fa8%2F5120425793cf492eaaa8c126b515f8e4' alt='' height='70' width='70' />
                  </Box>
                  <Typography className='text-darkblue my-2 fs-4 fw-bold fs-sm-5' data-aos="fade-down">
                    Interviews
                  </Typography>
                  <Typography className='mb-3 lh-sm text-center' color="text.secondary">
                    If applicable Meet with an assessment expert
                  </Typography>
                </Grid>
              </Grid>

            </Grid>
          </Paper>
        </Grid>
      </Grid>

      <BackToTop />
      <Footer />

    </>
  );
}
export default ResponsiveAppBar;