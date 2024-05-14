import FolderOpenIcon from "@mui/icons-material/FolderOpen";
import LocationOn from "@mui/icons-material/LocationOn";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { Card, CardContent } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import { useSelector } from 'react-redux';
import { getmodulesByProject } from '../../services/GetFunction/GetEmployers/getEmployersFunctions.js';
import Footer from "./Footer.js";
import NavBar from "./NavBar.js";
import Sidebar from "./Sidebar.js";


// import DeleteIcon from '@mui/icons-material/Delete';
// import EditIcon from '@mui/icons-material/Edit';

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

const Module = () => {

  const idProjet = useSelector(state => state.idProjet.idProjet.id);
  console.log(idProjet);
  const [modules, setModules] = useState([]);
  console.log(modules);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getmodulesByProject(idProjet);
        setProjects(response);
        console.log(response);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [idProjet]);

  let title = modules[0].project.title
  console.log(title);

  return (
    <>
      <NavBar />
      <Container className='mt-5'>
        <Box className="mt-5" sx={{ display: "flex" }}>
          <Sidebar />
          <Box sx={{ p: 3 }}>{/* <h1>Projets</h1> */}</Box>
        </Box>
        <Container>
          <Box>
            <div class="row">
              <Typography fontWeight="bold" noWrap className="fs-3 text-center">
                Mes Modules
              </Typography>
            </div>
          </Box>
        </Container>

        {/** box module */}
        <Box className="mt-5" sx={{ display: "flex", backgroundColor: "#" }}>
          <Sidebar />
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
                      spacing={-1}
                      sx={{ padding: { xs: "10px", sm: "20px", md: "4px" } }}
                      style={{ width: '200%', marginLeft: '110%' }}
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
                                <FolderOpenIcon sx={{ color: "#0A65CC" }} />
                              </Box>
                            </CardMedia>
                            <Box>
                              <Typography
                                fontWeight="bold"
                                noWrap
                                className="fs-2"
                              >
                                1
                              </Typography>
                              <Typography
                                variant="body2"
                                color="text.secondary"
                                fontWeight="medium"
                                className="fs-5"
                              >
                                Projet
                              </Typography>
                            </Box>
                          </Card>
                        </Item>
                      </Grid>

                      {/* <Grid item xs={false} sm={6} md={6}>
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
                              <FolderOpenIcon sx={{ color: "#0A65CC" }} />
                            </Box>
                          </CardMedia>
                          <Box>
                            <Typography
                              fontWeight="bold"
                              noWrap
                              className="fs-2"
                            >
                              4
                            </Typography>
                            <Typography
                              variant="body2"
                              color="text.secondary"
                              fontWeight="medium"
                              className="fs-5"
                            >
                              files
                            </Typography>
                          </Box>
                        </Card>
                      </Item>
                    </Grid> */}
                    </Grid>
                  </Box>
                </Grid>
              </Container>
            </Grid>
          </Box>
        </Box>
        <div style={{ width: 'auto', marginLeft: '15%' }}>
          <Card className="mb-5">
            <CardHeader title="Nom du projet" />
            <Typography variant="h5" style={{marginLeft:'3%'}}>{title}</Typography>
            <Divider />
            {modules.map(module => (
              <CardContent className="d-flex justify-content-between" key={module.id}>
                <div className="col-4 ">
                  <div className="row">
                    <Typography sx={{ mb: 1.5 }} color="text.dark">
                      Description
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {module.description}
                    </Typography>
                  </div>
                </div>
                <div className="col-4">
                  <Typography sx={{ mb: 1.5 }} color="text.dark">
                    Salaire: {module.project.maxAmount} {module.project.monnaie}
                  </Typography>
                  <Typography variant="body2">
                    Domaine: {module.project.domain.titled}
                  </Typography>
                  <Typography variant="body2">
                    Date de creation: {module.project.dateCreation}
                  </Typography>
                  <Typography variant="body2">
                    Pays: {module.project.pays.name}
                  </Typography>
                  <Typography variant="body2">
                    ville: {module.project.ville.name}
                  </Typography>
                </div>
              </CardContent>
            ))}
          </Card>
        </div>

        {/* container profile freelance*/}
        <div className="col-4" style={{ marginLeft: '15%' }}>
          <div className="mt-5">
            <Card >
              <Box sx={{ p: 2, display: "flex" }} className="ms-2"  >
                <Avatar>A</Avatar>
                <Stack spacing={0.5} className="ms-3">
                  <Typography fontWeight="bold" className="ps-2">
                    ALEX
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    <LocationOn sx={{ color: "grey.500" }} /> ras
                  </Typography>
                </Stack>
              </Box>
              <Divider />
              <Stack
                direction="column"
                alignItems="start"
                sx={{ px: 2, py: 1, bgcolor: "background.default" }}
              >
                <Typography fontWeight="body" className="ps-2">
                  ras
                </Typography>
              </Stack>
              <Stack
                direction="column"
                alignItems="center"
                sx={{ px: 2, py: 1, bgcolor: "background.default" }}
              >
                <div>
                  <Button

                    variant="outlined"
                    startIcon={<VisibilityIcon />}
                  >
                    Voir CV
                  </Button>
                </div>
              </Stack>
            </Card>
          </div>
        </div>

      </Container>
      <Footer />
    </>
  );
};

export default Module;
