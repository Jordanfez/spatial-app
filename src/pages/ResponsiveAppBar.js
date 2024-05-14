import BusinessIcon from '@mui/icons-material/Business';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import CalendarMonthRoundedIcon from '@mui/icons-material/CalendarMonthRounded';
import LocationOn from "@mui/icons-material/LocationOn";
import RemoveRedEyeRoundedIcon from '@mui/icons-material/RemoveRedEyeRounded';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
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
import { setProjetId } from '../features/projetsSlice';
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
import URL_SERVER from '../services/appApi';
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
                  Talent as a service: we connect major companies with the best talent
                </Typography>
              </Box>
              <Box className='mt-3'>
                <Typography className=' mb-5' sx={{marginLeft:2.5}}>
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
                A freelancer, also known as a service provider, is an independent professional offering specialized services, expertise or resources within the African space industry ecosystem.
                resources within the African space industry ecosystem. Freelancers possess diverse sets of skills and knowledge
                in areas relevant to satellite operations, research, engineering, software development and other areas essential
                to the space industry. They leverage the independent platform to showcase their qualifications, experience and previous projects, attracting
                potential clients and securing opportunities to work on space-related tasks and projects. Freelancers can include engineers
                scientists, software developers, project managers, consultants, researchers, designers, writers and other professionals with
                professionals with expertise tailored to the specific needs and challenges of the space industry.
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
          <Col className='d-flex justify-content-end text-primary fs-5' data-aos="fade-left">  <i class="bi bi-arrow-right"><a href='/AllProjet'>See All </a></i></Col>
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
                  <Card className='shadow rounded'>
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

                  </Card>
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
            {filteredUsers.map(filteredUser => (
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
                    {/* <CardActions sx={{ display: 'flex', justifyContent: 'center' }}>

                      <Link style={{ cursor: 'pointer' }} onClick={() => handleVoirClick(dispatch(setActualiteId(actu.id)))} underline="none">
                        {' Lire...'}
                      </Link>
                    </CardActions> */}
                  </Card>
                </Paper>
              </Grid>
            ))}

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
                The user, also known as the customer, represents organizations or individuals from the space industry within and outside the
                African continent seeking specialized services, expertise or resources for their projects and initiatives. Users may include
                space agencies, research institutes, satellite operators, aerospace companies, academic institutions, government agencies
                government agencies, the media and other stakeholders involved in space science, applications and technology, or in research, development and commercialization.
                research, development and operations.
                Users leverage the independent platform to access a diverse pool of qualified professionals with expertise in
                engineering, software development, research, project management, communications and regulatory compliance.
                They use the platform to publish project requirements, identify suitable freelancers, collaborate on project execution, manage deliverables and
                ensure successful completion of tasks within budget and on schedule.
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