import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { CardContent, Modal } from '@mui/material';
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import { fetchcandidaturesFunction, fetchprofilesFunction, fetchprojectsFunction } from '../../services/GetFunction/GetFreelance/getFreelanceFunctions.js';
import Header from "./Header.js";
import Stepper from "./Stepper.js";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.white,
    color: theme.palette.common.black,
    fontWeight: "bold",
    fontSize: 16,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const DashProfil = () => {
  /** nombre total de freelance */
  const [freelanceCount, setFreelanceCount] = useState(0);

  useEffect(() => {
    const fetchFreelanceCount = async () => {
      try {
        const response = await fetchprofilesFunction();
        const totalCount = response.length;
        setFreelanceCount(totalCount);
      } catch (error) {
        console.error("Error fetching freelance count:", error);
      }
    };

    fetchFreelanceCount();
  }, []);

  /** nombre total de emploi */
  const [projetCount, setProjetCount] = useState(0);

  useEffect(() => {
    const fetchProjetCount = async () => {
      try {
        const response = await fetchprojectsFunction();
        const totalCount = response.length;
        setProjetCount(totalCount);
      } catch (error) {
        console.error("Error fetching freelance count:", error);
      }
    };

    fetchProjetCount();
  }, []);

  /** recuperation des projets recuperer */
  const [candidature, setCandidature] = useState([]);
  console.log(candidature);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchcandidaturesFunction();
        setCandidature(response);
        console.error(response);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  //
  const [openModal, setOpenModal] = useState(false);
  const [selectedCandidature, setSelectedCandidature] = useState(null);

  const handleOpenModal = (candidatureId) => {
    const selected = candidature.find(
      (candidature) => candidature.id === candidatureId
    );
    console.log(candidatureId);
    setSelectedCandidature(selected);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <>
      <Header />
      <Container className="mt-5">
        <Box className="mt-5" sx={{ display: "flex", backgroundColor: "#" }}>
          <Stepper />
          <Box sx={{ p: 3 }}>
            <Grid className="mt-5 mt-sm-0">
              <Grid className="my-5 my-sm-0">
                <Box>
                  {/* <Typography className='text-dark mb-2 fs-1 fw-normal fs-sm-5'>
                  Bienvenue sur le site PSI !
                </Typography> */}
                  <Box>
                    {/* <Typography className='mb-5 text-white lh-sm text-wrap' paragraph>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id
                    purus sodales, pulvinar purus dsld;woefjnwamsacda;ellqwfnmwa
                  </Typography> */}
                  </Box>
                </Box>
              </Grid>
              <Container maxWidth="sm" className="mt-5">
                <Grid
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignContent: "center",
                  }}
                >
                  <Box
                    sx={{
                      flexGrow: 1,
                      padding: { xs: "10px", sm: "20px", md: "7px" },
                    }}
                  >
                    <Grid
                      container
                      spacing={2}
                      sx={{ padding: { xs: "10px", sm: "20px", md: "4px" } }}
                      style={{ width: 'auto',marginLeft: '15%' }}
                    >
                      <Grid item xs={false} sm={6} md={6}>
                        <Item>
                          <Card
                            sx={{
                              p: 4,
                              boxShadow: "0 1px 3px rgba(0, 127, 255, 0.1)",
                              display: "flex",
                              flexDirection: {
                                xs: "column", // mobile
                                sm: "row", // tablet and up
                              },
                            }}
                          >
                            <CardMedia
                              width="50"
                              height="50"
                              sx={{
                                width: { xs: "100%", sm: 100 },
                                mr: { sm: 1 },
                                mb: { xs: 0, sm: 0 },
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                              }}
                            >
                              <Box
                                sx={{ background: "#E7F0FA", padding: "20px" }}
                                className="rounded"
                              >
                                <BusinessCenterIcon sx={{ color: "#0A65CC" }} />
                              </Box>
                            </CardMedia>
                            <Box>
                              <Typography
                                fontWeight="bold"
                                noWrap
                                className="fs-2"
                              >
                                {projetCount}
                              </Typography>
                              <Typography
                                variant="body2"
                                color="text.secondary"
                                fontWeight="medium"
                                className="fs-5"
                              >
                                Emplois
                              </Typography>
                            </Box>
                          </Card>
                        </Item>
                      </Grid>

                      <Grid item xs={false} sm={6} md={6}>
                        <Item>
                          <Card
                            sx={{
                              p: 4,
                              boxShadow: "0 1px 3px rgba(0, 127, 255, 0.1)",
                              display: "flex",
                              flexDirection: {
                                xs: "column", // mobile
                                sm: "row", // tablet and up
                              },
                            }}
                          >
                            <CardMedia
                              width="50"
                              height="50"
                              sx={{
                                width: { xs: "100%", sm: 100 },
                                mr: { sm: 1 },
                                mb: { xs: 0, sm: 0 },
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                              }}
                            >
                              <Box
                                sx={{ background: "#E7F0FA", padding: "20px" }}
                                className="rounded"
                              >
                                <PersonOutlineOutlinedIcon
                                  sx={{ color: "#0A65CC" }}
                                />
                              </Box>
                            </CardMedia>
                            <Box>
                              <Typography
                                fontWeight="bold"
                                noWrap
                                className="fs-2"
                              >
                                {freelanceCount}
                              </Typography>
                              <Typography
                                variant="body2"
                                color="text.secondary"
                                fontWeight="medium"
                                className="fs-5"
                              >
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
          </Box>
        </Box>

        <Box>
          <div class="row justify-content-around">
            <div class="col-4" style={{ width: 'auto',marginLeft: '2%' }}>
              <Typography fontWeight="bold" noWrap className="fs-3 text-center">
                Offres d’emplois recents
              </Typography>
            </div>
            {/* <div class="col-4">
             <Typography fontWeight="bold" noWrap className='fs-5 text-primary'>
                Tout voir
              </Typography>
            </div> */}
          </div>
        </Box>

        <Container className="mt-3">
          <TableContainer component={Paper} style={{ width: 'auto',marginLeft: '15%' }}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell>Emplois</StyledTableCell>
                  <StyledTableCell align="right">Module</StyledTableCell>
                  <StyledTableCell align="right">Description</StyledTableCell>
                  <StyledTableCell align="right">Status</StyledTableCell>
                  <StyledTableCell align="right">
                    Date de publication
                  </StyledTableCell>
                  <StyledTableCell align="right">Date de fin</StyledTableCell>
                  <StyledTableCell align="right">Action</StyledTableCell>
                  {/* <StyledTableCell align="right">Action</StyledTableCell> */}
                </TableRow>
              </TableHead>
              <TableBody>
                {candidature.map((candidatures) => (
                  <StyledTableRow key={candidatures.id}>
                    <StyledTableCell>
                      {candidatures.module.project.title}
                    </StyledTableCell>
                    <StyledTableCell>
                      {candidatures.module.title}
                    </StyledTableCell>
                    <StyledTableCell>
                      {candidatures.module.project.wording}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {candidatures.state}
                    </StyledTableCell>
                    <StyledTableCell>
                      {candidatures.module.project.dateCreation}
                    </StyledTableCell>
                    <StyledTableCell>
                      {candidatures.module.project.delay}
                    </StyledTableCell>
                    {/* <StyledTableCell>{candidatures.project.map(p =>{ p.title})}</StyledTableCell>
                          <StyledTableCell>{candidatures.monnaie}</StyledTableCell>
                          <StyledTableCell>{candidatures.dateCreation}</StyledTableCell> */}
                    <Stack
                      direction="row"
                      spacing={1}
                      className="d-flex justify-content-end"
                    >
                      {/* <IconButton aria-label="delete">
                          <DeleteIcon />
                        </IconButton> 
                        <IconButton  aria-label="">
                          <AddIcon  />
                        </IconButton>*/}
                      <IconButton
                        onClick={() => handleOpenModal(candidatures.id)}
                      >
                        <VisibilityIcon />
                      </IconButton>
                    </Stack>
                  </StyledTableRow>
                ))}
                <Modal
                  open={openModal}
                  onClose={handleCloseModal}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Card
                    sx={{
                      width: 400,
                      bgcolor: "#fff",
                      border: "1px solid #ccc",
                    }}
                  >
                    <CardContent sx={{ padding: "2rem" }}>
                      <h3>Detail sur le POST</h3>
                      {selectedCandidature && (
                        <div className="col-4 ">
                          <div className="row">
                            <Typography sx={{ mb: 1.5 }} color="text.dark">
                              Description du module:
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                              {selectedCandidature.module.description}
                            </Typography>
                          </div>
                          <div className="row mt-3">
                            <Typography sx={{ mb: 1.5 }} color="text.dark">
                              Date de Creation du projet:
                            </Typography>
                            <Typography variant="body2">
                              {selectedCandidature.module.project.dateCreation}
                            </Typography>

                            <Typography sx={{ mb: 1.5 }} color="text.dark">
                              Budget maximum du Projet:
                            </Typography>
                            <Typography variant="body2">
                              {selectedCandidature.module.project.maxAmount}{" "}
                              {selectedCandidature.module.project.monnaie}
                            </Typography>

                            <Typography sx={{ mb: 1.5 }} color="text.dark">
                              Domaine liee au Projet:
                            </Typography>
                            <Typography variant="body2">
                              {selectedCandidature.module.project.domain.titled}
                            </Typography>

                            <Typography sx={{ mb: 1.5 }} color="text.dark">
                              Date limite du Projet:
                            </Typography>
                            <Typography variant="body2">
                              {selectedCandidature.module.project.delay}
                            </Typography>

                            <Typography sx={{ mb: 1.5 }} color="text.dark">
                              Ville:
                            </Typography>
                            <Typography variant="body2">
                              {selectedCandidature.module.project.ville.name}
                            </Typography>

                            <Typography sx={{ mb: 1.5 }} color="text.dark">
                              Pays:
                            </Typography>
                            <Typography variant="body2">
                              {selectedCandidature.module.project.pays.name}
                            </Typography>
                          </div>
                        </div>
                      )}

                      <div
                        className="modal-buttons"
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <Button onClick={handleCloseModal}>Close</Button>
                        {/* <Button onClick={handleDeleteItem} variant="contained" color="error">Confirmer</Button> */}
                      </div>
                    </CardContent>
                  </Card>
                </Modal>
              </TableBody>
            </Table>
          </TableContainer>
        </Container>
      </Container>
    </>
  );
};

export default DashProfil;
