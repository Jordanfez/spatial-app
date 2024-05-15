import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import AOS from "aos";
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import "./Header.css";
import ProfileAccount from './ProfileAccount';

const Header = () => {
  const navigate = useNavigate();
  const userId = useSelector(state => state.user?.id);
  const userIdEmployeur = useSelector(state => state.userElement?.id);
  // const adminID = useSelector(state => state.Admin?.AdminId);
  // console.log(adminID);

  const handleLogin = () => {
    navigate('/account');
  };

  const handleSingUp = () => {
    navigate('/login');
  };

  React.useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  //open from marcher spacial
  const [anchorElS, setAnchorElS] = React.useState(null);
  const openMarket = Boolean(anchorElS);
  const handleClickMarket = (event) => {
    setAnchorElS(event.currentTarget);
  };
  const handleCloseS = () => {
    setAnchorElS(null);
  };

  // open from service
  const [anchorElSer, setAnchorElSer] = React.useState(null);
  let openSer = Boolean(anchorElSer);
console.log('open',openSer);
  // const [openSer, setOpenSer] = React.useState(anchorElSer);

  const handleClickSer = (event) => {
    setAnchorElSer(event.currentTarget);
  };
  const handleCloseSer = () => {
    setAnchorElSer(null);
    openSer = false
  };

  const handleGoToHome = () => {
    navigate("/");
  };

  const handleGoToFreelance = () => {
    window.location.reload( navigate("/responsiveAppBar") )
  };

  const handleGoToSpaceMarket = () => {
    window.location.reload( navigate("/SpaceMarket") );
  };
  const handleGoToConsulting = () => {
    window.location.reload( navigate("/Consultant") );
  };
  const handleGoToIndustri = () => {
    window.location.reload( navigate("/industrialisation") );
  };
  const handleGoToactualite = () => {
    window.location.reload( navigate("/actualite") )
  };
  const handleGoToEvene = () => {
    window.location.reload( navigate("/evenement") );
  };
  const handleGoToTENDANCE = () => {
    window.location.reload(navigate("/Tendance"));
  };

  const handleGoToMarcherSpace = () => {
    window.location.reload( navigate("/MarcherSpace") );
  };

  const handleGoToRapport = () => {
    window.location.reload( navigate("/Rapport") );
  };

  const [activeTab, setActiveTab] = React.useState('Accueil'); // Définir l'onglet actif par défaut

  React.useEffect(() => {
    const storedActiveTab = localStorage.getItem('activeTab');
    if (storedActiveTab) {
      setActiveTab(storedActiveTab);
    }
  }, []);

  const handleSelect = (selectedKey) => {
    setActiveTab(selectedKey);
    localStorage.setItem('activeTab', selectedKey);
  };

  return (
    <>
      <Container fluid className="bg-body-tertiary">
        <Navbar expand="lg" className="bg-body-tertiary" style={{ position: 'sticky', top: '0' }}>
          <Container fluid className="mx-5">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav variant="underline" activeKey={activeTab} onSelect={handleSelect}>
                <Nav.Item>
                  <Nav.Link eventKey="Accueil" href="/">Accueil</Nav.Link>
                </Nav.Item>
                {/* <Nav.Item>
                  <Nav.Link eventKey="SpaceMarket" href="/about">A propos</Nav.Link>
                </Nav.Item> */}
                <Nav.Item onMouseEnter={handleClickSer} onMouseLeave={handleCloseSer}>
                  <Nav.Link
                    aria-controls={openSer ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={openSer ? 'true' : undefined}
                    eventKey="Service"
                  >Service and solutions
                    {openSer ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                  </Nav.Link>
                  <Menu
                    id="basic-menu"
                    anchorEl={anchorElSer}
                    open={openSer}
                    onClick={handleCloseSer}
                    MenuListProps={{
                      'aria-labelledby': 'basic-button',
                    }}
                  >
                    <MenuItem eventkey="Freelance" onClick={handleGoToFreelance} sx={{ color: "primary" }}>Freelance</MenuItem>
                    <MenuItem eventKey="SpaceMarket" onClick={handleGoToSpaceMarket}>spaceMarket</MenuItem>
                    <MenuItem eventKey="con" onClick={handleGoToConsulting}>Consultant</MenuItem>
                    {/* <MenuItem eventKey="con" onClick={handleGoToIndustri} >Industrialisation</MenuItem> */}
                    <MenuItem eventKey="Service" onMouseEnter={handleClickMarket}>
                      <Nav.Link
                        eventKey="Service"
                        aria-controls={openMarket ? 'basic-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={openMarket ? 'true' : undefined}
                      >Spacetrends
                        {openMarket ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                      </Nav.Link>
                      <Menu
                        id="basic-menu"
                        anchorEl={anchorElS}
                        open={openMarket}
                        onClose={handleCloseS}
                        MenuListProps={{
                          'aria-labelledby': 'basic-button',
                        }}
                        eventKey="Service"
                      >
                        {/* <MenuItem eventKey="Service" onClick={handleGoToTENDANCE}>Tendances du marcher</MenuItem>
                        <MenuItem eventKey="Service" onClick={handleGoToMarcherSpace}>Historique du marcher spatial</MenuItem> */}
                        <MenuItem eventKey="Service" onClick={handleGoToRapport}>Rapport d'industrie</MenuItem>
                      </Menu>

                    </MenuItem>
                  </Menu>
                </Nav.Item>
                <Nav.Item onMouseEnter={handleClick} onMouseLeave={handleClose}>
                  <Nav.Link
                    eventKey="ind"
                    aria-controls={open ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                  >News
                    {open ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                  </Nav.Link>
                  <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                      'aria-labelledby': 'basic-button',
                    }}
                  >
                    <MenuItem onClick={handleGoToactualite}>Actualites</MenuItem>
                    <MenuItem onClick={handleGoToEvene}>Evenement</MenuItem>
                  </Menu>
                </Nav.Item>

                {/* <Nav.Item>
                  <Nav.Link
                    eventKey="ind"
                    aria-controls={openMarket ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={openMarket ? 'true' : undefined}
                    onClick={handleClickMarket}
                  >marché spatial
                    {openMarket ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                  </Nav.Link>
                  <Menu
                    id="basic-menu"
                    anchorEl={anchorElS}
                    open={openMarket}
                    onClose={handleCloseS}
                    MenuListProps={{
                      'aria-labelledby': 'basic-button',
                    }}
                  >
                    <MenuItem onClick={handleGoToTENDANCE}>Tendances du marcher</MenuItem>
                    <MenuItem onClick={handleGoToMarcherSpace}>Historique du marcher spatial</MenuItem>
                  </Menu>
                </Nav.Item> */}


                <Nav.Item >
                  <Nav.Link eventKey="Contactez-nous" href="/Contact_us">Contactez-nous</Nav.Link>
                </Nav.Item>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Container>

      {/* Logo */}
      <Container fluid className="bg-white my-2">
        <Container>
          <Row>
            <Col xs={false} md={4} className='float-start'>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLruMNO37oQ9xg_yGNDVt9ujdQ47IauJ2leIrEd7s2oR1Pn9LIHITkVTnzuM-LJdMZNks&usqp=CAU" alt="" onClick={handleGoToHome} style={{ height: "70px", cursor: 'pointer' }} />
            </Col>
            <Col xs={12} md={4} className="mt-3  justify-content-end ">
              {/* <Search /> */}
            </Col>
            <Col xs={12} md={4} className="mt-3 justify-content-end ">
              { userId  || userIdEmployeur ? (
                <div className='float-end'>
                  <ProfileAccount />
                </div>
              ) : (
                <React.Fragment>
                  <Button variant="outline-primary" onClick={handleLogin}>
                    S’inscrire
                  </Button>{" "}
                  <Button variant="primary" onClick={handleSingUp}>
                    Se Connecter
                  </Button>
                </React.Fragment>
              )}
            </Col>
          </Row>
        </Container>
      </Container>

    </>
  );
};

export default Header;
