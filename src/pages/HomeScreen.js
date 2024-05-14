// import React, { useState, useEffect } from "react";
import React from "react";
//import Header from "../components/Header";
//import { AkarIconsSearch } from "./AkarIconsSearch";
import "./HomeScreen.css";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
//import { Carousel } from "react-bootstrap";
import logoPSI from "./images/logoPSI.png";
import person from "./images/person.svg";
import house from "./images/house.svg";
import briefcase from "./images/briefcase.svg";
import TypeWriterEffect from "react-typewriter-effect";
import "bootstrap-icons/font/bootstrap-icons.css";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import { styled, alpha } from "@mui/material/styles";
import calender from "./images/calendar.svg";
import homme from "./images/homme.jpg";
import arrow from "./images/arrow.svg";
import geo from "./images/geo.svg";
import etoilePlein from "./images/etoilSemi.svg";
import etoilSemi from "./images/etoile.svg";
import etoile from "./images/etoilePlein.svg";
import quote from "./images/quote.svg";
import arrowLeft from "./images/arrowLeft.svg";
import arrowRight from "./images/arrowRight.svg";
import CarrouselProfil from "./Carrousel";

const HomeScreen = () => {
  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  }));

  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("sm")]: {
        width: "12ch",
        "&:focus": {
          width: "20ch",
        },
      },
    },
  }));

  return (
    <Container fluid className="element-homepage">
      <Container fluid className="div-2">
        
          <Navbar expand="lg" className="bg-body-tertiary">
            <Container fluid className='mx-5'>
              
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav variant="underline" defaultActiveKey="/freelance">
                  <Nav.Item>
                    <Nav.Link eventKey="hom">Home</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link href="/freelance">Freelance</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="con">Consultant</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="ind">Industrialisation</Nav.Link>
                  </Nav.Item>
                </Nav>
              </Navbar.Collapse>
            
            </Container>
         </Navbar>
       
        
        <Container className="overlap-2">
          <Container>
            <Row>
              <Col xs={3}><img className="logo-PSI" alt="Logo PSI" src={logoPSI} /></Col>
              <Col xs={3}>
                <Col className="frame-12">
                  <Col className="frame-13">
                    <Search>
                      <SearchIconWrapper>
                        <SearchIcon />
                      </SearchIconWrapper>
                      <StyledInputBase
                        placeholder="RECHERCHER......"
                        inputProps={{ "aria-label": "search" }}
                      />
                    </Search> 
                  </Col>
                </Col>
              </Col>
              <Col xs={3}>
                <Row>
                  <Col>
                    <div className="frame-14">
                      <div className="frame-15">
                        <div className="text-wrapper-14">S’inscrire</div>
                      </div>
                    </div>
                  </Col>
                  <Col>
                    <div className="frame-16">
                      <div className="frame-17">
                        <div className="text-wrapper-15">Se Connecter</div>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
          {/* <div className="rectangle-2" /> */}
          {/* <img className="logo-PSI" alt="Logo PSI" src={logoPSI} />
          <div className="frame-12">
            <div className="frame-13">
              <Search>
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="RECHERCHER......"
                  inputProps={{ "aria-label": "search" }}
                />
              </Search>
            </div>
          </div>
          <div className="frame-14">
            <div className="frame-15">
              <div className="text-wrapper-14">S’inscrire</div>
            </div>
          </div>
          <div className="frame-16">
            <div className="frame-17">
              <div className="text-wrapper-15">Se Connecter</div>
            </div>
          </div> */}
        </Container>
        <div className="overlap-3">
          <div className="text-wrapper-16">Comment nous travaillons</div>
          <div className="group">
            <div className="overlap-group-wrapper">
              <div className="overlap-group-2">
                <div className="text-wrapper-17">1</div>
              </div>
            </div>
            <div className="frame-18">
              <div className="text-wrapper-18">Creer un compte</div>
              <div className="lorem-ipsum">
                Lorem ipsum vsdmvdfvmer
                <br />
                cxffdkg
              </div>
            </div>
          </div>
          <div className="group-2">
            <div className="overlap-group-wrapper">
              <div className="overlap-group-2">
                <div className="text-wrapper-17">2</div>
              </div>
            </div>
            <div className="frame-18">
              <div className="text-wrapper-19">Telecharger le CV</div>
              <div className="lorem-ipsum">
                Lorem ipsum vsdmvdfvmer
                <br />
                cxffdkg
              </div>
            </div>
          </div>
          <div className="group-3">
            <div className="overlap-group-wrapper">
              <div className="overlap-group-2">
                <div className="text-wrapper-17">3</div>
              </div>
            </div>
            <div className="frame-18">
              <div className="text-wrapper-20">
                Trouver un emploi convenable
              </div>
              <div className="lorem-ipsum">
                Lorem ipsum vsdmvdfvmer
                <br />
                cxffdkg
              </div>
            </div>
          </div>
          <div className="group-4">
            <div className="overlap-group-wrapper">
              <div className="overlap-group-2">
                <div className="text-wrapper-17">4</div>
              </div>
            </div>
            <div className="frame-18">
              <div className="text-wrapper-21">Postuler</div>
              <div className="lorem-ipsum">
                Lorem ipsum vsdmvdfvmer
                <br />
                cxffdkg
              </div>
            </div>
          </div>
        </div>
        <div className="overlap-4">
          <div className="text-wrapper-22">Temoignages</div>
          <div className="frame-19">
            <div className="frame-20">
              <img className="star" alt="Star" src={etoile} />
              <img className="star-2" alt="Star" src={etoile}/>
              <img className="star-3" alt="Star" src={etoile} />
              <img className="star-4" alt="Star" src={etoilePlein} />
              <img className="star-5" alt="Star" src={etoilSemi}/>
            </div>
            <p className="lorem-ipsum-is">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&#39;s standard dummy
              text ever since the 1500s,
            </p>
            <div className="card-wrapper">
              <div
                className="card"
                style={{ position: "relative", bottom: "230px" }}
              >
                <img
                  className="ellipse-2"
                  alt="Ellipse"
                  src={homme}
                />
                <div className="overlap-group-3">
                  <div className="text-wrapper-23">Adela Parkson</div>
                  <div className="group-5">
                    <div className="text-wrapper-24">Developpeur</div>
                  </div>
                </div>
              </div>
            </div>
            <img
              className="bxs-quote-alt-left"
              alt="Bxs quote alt left"
              src={quote}
              style={{ position: "relative", bottom: "255px" }}
            />
          </div>
          <img
            className="bxs-left-arrow-alt"
            alt="Bxs left arrow alt"
            src={arrowLeft}
          />
          <img
            className="bxs-right-arrow-alt"
            alt="Bxs right arrow alt"
            src={arrowRight}
          />
        </div>
        {/** put a newletter here */}
        {/** footer */}
        <div className="overlap-5">
          <div className="rectangle-3" />
          <img className="line-2" alt="Line" src="line-9.svg" />
          <p className="text-wrapper-25">© PSI 2023. All Rights Reserved.</p>
          <img className="logo-PSI-2" alt="Logo PSI" src={logoPSI} />
          <div className="text-wrapper-26">Compagnie</div>
          <div className="text-wrapper-27">Ressources</div>
          <div className="text-wrapper-28">A Propos</div>
          <div className="text-wrapper-29">A Propos</div>
          <div className="text-wrapper-30">A Propos</div>
          <div className="text-wrapper-31">A Propos</div>
          <img className="frame-21" alt="Frame" src="frame-1000002829.svg" />
          <div className="frame-22">
            <div className="frame-23">
              {/*<Location className="icon-instance-node" color="white" />*/}
              <div className="text-wrapper-32">Yaounde, Cameroun</div>
            </div>
          </div>
          <img className="line-3" alt="Line" src="line-12.svg" />
          <div className="text-wrapper-33">SLOGAN</div>
        </div>
        {/** end footer */}
        {/** section after nav-header */}
        <Container className="overlap-wrapper">
          <div className="overlap-6">
            <img
              className="psi"
              alt="Psi"
              src="https://img.freepik.com/photos-gratuite/vaisseau-spatial-brillant-orbite-autour-planete-dans-galaxie-etoilee-generee-par-ia_188544-9655.jpg"
            />
            <div className="rectangle-4" />
            <div className="flexcontainer">
              <p className="text">
                <span className="span">
                  <h1>Bienvenue sur le site PSI ! </h1>
                  <TypeWriterEffect
                    textStyle={{
                      fontFamily: "Red Hat Display",
                      fontWeight: 500,
                      fontSize: "1em",
                    }}
                    startDelay={2000}
                    cursorColor="#3F3D56"
                    multiText={[
                      "Trouver un emploi qui corresponde à vos intérêts et à vos compétences",
                      "Retrouver ici des postes pour plusieurs domaines...",
                      "Poster une offre d'emploi...",
                      "Retrouver les meilleurs profils de freelance....",
                      "Parcourez nos differents poste d'employeur...",
                    ]}
                    multiTextDelay={1000}
                    typeSpeed={90}
                    multiTextLoop
                  />
                </span>
              </p>
              <p className="text">
                <span className="span"></span>
              </p>
            </div>
            <p className="text-wrapper-34" style={{ marginTop: "3%" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id
              purus sodales, pulvinar purus
            </p>
            <div className="frame-24">
              <div className="overlap-group-4">
                <div className="text-wrapper-35">1,750,500</div>
                <div className="text-wrapper-36">Emploi</div>
              </div>
              <div className="frame-25">
                <div className="rectangle-5" />
                <img
                  className="bx-briefcase-alt"
                  alt="Bx briefcase alt"
                  src={briefcase}
                />
              </div>
            </div>
            <div className="frame-26">
              <div className="overlap-group-4">
                <div className="text-wrapper-35">1,750,500</div>
                <div className="text-wrapper-36">Employeurs</div>
              </div>
              <div className="frame-27">
                <div className="rectangle-6" />
                <img
                  className="bx-briefcase-alt-2"
                  alt="Bx briefcase alt"
                  src={house}
                />
              </div>
            </div>
            <div className="frame-28">
              <div className="overlap-group-4">
                <div className="text-wrapper-35">1,750,500</div>
                <div className="text-wrapper-36">Freelances</div>
              </div>
              <div className="frame-27">
                <div className="rectangle-7" />
                <img
                  className="bx-briefcase-alt-3"
                  alt="Bx briefcase alt"
                  src={person}
                />
              </div>
            </div>
          </div>
        </Container>
         {/** end section after nav-header */}

          {/** section offre emploi */}
        <Container></Container>
        <div className="offres-d-emploi">Offres d&#39;emploi</div>
        <div className="frame-29" style={{ cursor: "pointer" }}>
          <div className="text-wrapper-37">Tout Voir</div>
          <img
            className="bx-right-arrow-alt"
            alt="Bx right arrow alt"
            src={arrow}
          />
          <div className="solar-card">
            <div className="frame">
              <img className="vector" alt="Vector" src={calender} />
              <div className="text-wrapper">3 Janvier 2023</div>
            </div>
            <div className="frame-wrapper">
              <div className="div-wrapper">
                <div className="div">
                  <p className="p">Light energy capture in solar cells.</p>
                  <p className="text-wrapper-2">
                    In addition to decreasing material costs, clever engineering
                    tricks are pushing the efficiency of silicon solar cells
                    closer to their theoretical maximum. In order for photons to
                    be converted into energy, they must first collide with an
                    electron.
                  </p>
                </div>
              </div>
            </div>
            <div className="frame-2">
              <div className="frame-3">
                <img className="ellipse" alt="Ellipse" src={homme} />
                <div className="frame-4">
                  <div className="text-wrapper-3">Ajay Kumar</div>
                  <p className="graduate-student-in">
                    Graduate Student in Chemistry
                    <br />
                    and Chemical Biology
                  </p>
                </div>
              </div>
              <img className="bx-show" alt="Bx show" src={homme} />
            </div>
          </div>
          <div className="solar-cards">
            <div className="frames">
              <img className="vectors" alt="Vector" src={calender} />
              <div className="text-wrappers">3 Janvier 2023</div>
            </div>
            <div className="frame-wrappers">
              <div className="div-wrappers">
                <div className="divs">
                  <p className="ps">Light energy capture in solar cells.</p>
                  <p className="text-wrappers-2">
                    In addition to decreasing material costs, clever engineering
                    tricks are pushing the efficiency of silicon solar cells
                    closer to their theoretical maximum. In order for photons to
                    be converted into energy, they must first collide with an
                    electron.
                  </p>
                </div>
              </div>
            </div>
            <div className="frames-2">
              <div className="frames-3">
                <img className="ellipses" alt="Ellipse" src={homme} />
                <div className="frames-4">
                  <div className="text-wrappers-3">Ajay Kumar</div>
                  <p className="graduate-student-ins">
                    Graduate Student in Chemistry
                    <br />
                    and Chemical Biology
                  </p>
                </div>
              </div>
              <img className="bx-shows" alt="Bx show" src={homme} />
            </div>
          </div>
        </div>
        {/** end section offre emploi */}

        {/** section profil */}
        <div className="text-wrapper-38">Les meilleurs profils</div>
        <div className="text-wrapper-carousel">
          <CarrouselProfil />
        </div>
        {/** end section profil */}

        {/** section professionnal */}
        <div className="overlap-7">
          <img
            className="psi-2"
            alt="Psi"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRJWZ3TJQHnMmYYHsMC7Y9KKaWBemsOdhPAgzyugiGzR0HjVukTUVuUOT6fWXzRrZfjIQ&usqp=CAU"
          />
          <div className="rectangle-8" />
          <div className="explorer-les">Explorer Les Professionnels</div>
          <p className="text-wrapper-39">
            Votre équipe créative est à portée de clics
          </p>
          <div className="frame-30">
            <div className="frame-17">
              <div className="text-wrapper-40">Commencer</div>
            </div>
          </div>
        </div>
        {/**end section professionnal */}

        {/** section emploi */}
        <div className="text-wrapper-41">Emploi de premier plan</div>
        <div className="frame-31">
          <div className="frame-32">
            <div className="card">
              <img className="ellipse-2" alt="Ellipse" src={homme} />
              <div className="overlap-group-5">
                <div className="text-wrapper-42">Adela Parkson</div>
                <div className="group-6">
                  <div className="text-wrapper-43">Adresse</div>
                  <img className="bx-map" alt="Bx map" src={geo} />
                </div>
              </div>
              <div className="frame-33">
                <div className="text-wrapper-44">En vedette</div>
              </div>
            </div>
          </div>
          <div className="frame-34">
            <div className="frame-35">
              <div className="text-wrapper-45">Postes à pourvoir (5)</div>
            </div>
          </div>
        </div>
        {/** end section emploi */}

        {/** section poste */}
        <div className="frame-36">
          <div className="frame-32">
            <div className="card">
              <img className="ellipse-2" alt="Ellipse" src={homme} />
              <div className="overlap-group-5">
                <div className="text-wrapper-42">Adela Parkson</div>
                <div className="group-6">
                  <div className="text-wrapper-43">Adresse</div>
                  <img className="bx-map" alt="Bx map" src={geo} />
                </div>
              </div>
              <div className="frame-33">
                <div className="text-wrapper-44">En vedette</div>
              </div>
            </div>
          </div>
          <div className="frame-34">
            <div className="frame-35">
              <div className="text-wrapper-45">Postes à pourvoir (5)</div>
            </div>
          </div>
        </div>
        <div className="frame-37">
          <div className="frame-32">
            <div className="card">
              <img className="ellipse-2" alt="Ellipse" src={homme} />
              <div className="overlap-group-5">
                <div className="text-wrapper-42">Adela Parkson</div>
                <div className="group-6">
                  <div className="text-wrapper-43">Adresse</div>
                  <img className="bx-map" alt="Bx map" src={geo} />
                </div>
              </div>
              <div className="frame-33">
                <div className="text-wrapper-44">En vedette</div>
              </div>
            </div>
          </div>
          <div className="frame-34">
            <div className="frame-35">
              <div className="text-wrapper-45">Postes à pourvoir (5)</div>
            </div>
          </div>
        </div>
        <div className="frame-38">
          <div className="frame-32">
            <div className="card">
              <img className="ellipse-2" alt="Ellipse" src={homme} />
              <div className="overlap-group-5">
                <div className="text-wrapper-42">Adela Parkson</div>
                <div className="group-6">
                  <div className="text-wrapper-43">Adresse</div>
                  <img className="bx-map" alt="Bx map" src={geo} />
                </div>
              </div>
              <div className="frame-33">
                <div className="text-wrapper-44">En vedette</div>
              </div>
            </div>
          </div>
          <div className="frame-34">
            <div className="frame-35">
              <div className="text-wrapper-45">Postes à pourvoir (5)</div>
            </div>
          </div>
        </div>
        <div className="frame-39">
          <div className="frame-32">
            <div className="card">
              <img className="ellipse-2" alt="Ellipse" src={homme} />
              <div className="overlap-group-5">
                <div className="text-wrapper-42">Adela Parkson</div>
                <div className="group-6">
                  <div className="text-wrapper-43">Adresse</div>
                  <img className="bx-map" alt="Bx map" src={geo} />
                </div>
              </div>
              <div className="frame-33">
                <div className="text-wrapper-44">En vedette</div>
              </div>
            </div>
          </div>
          <div className="frame-34">
            <div className="frame-35">
              <div className="text-wrapper-45">Postes à pourvoir (5)</div>
            </div>
          </div>
        </div>
        <div className="frame-40">
          <div className="frame-32">
            <div className="card">
              <img className="ellipse-2" alt="Ellipse" src={homme} />
              <div className="overlap-group-5">
                <div className="text-wrapper-42">Adela Parkson</div>
                <div className="group-6">
                  <div className="text-wrapper-43">Adresse</div>
                  <img className="bx-map" alt="Bx map" src="bx-map-1-1-6.svg" />
                </div>
              </div>
              <div className="frame-33">
                <div className="text-wrapper-44">En vedette</div>
              </div>
            </div>
          </div>
          <div className="frame-34">
            <div className="frame-35">
              <div className="text-wrapper-45">Postes à pourvoir (5)</div>
            </div>
          </div>
        </div>
        
        {/**end section poste */}
        {/*<DigitalMarketing className="digital-marketing-instance" />*/}
      </Container>
    </Container>
  );
};

export default HomeScreen;