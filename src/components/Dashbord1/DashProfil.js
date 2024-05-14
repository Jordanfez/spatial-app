import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import NavBar from './NavBar.js';
import Sidebar from './Sidebar.js';
// import DeleteIcon from '@mui/icons-material/Delete';
// import EditIcon from '@mui/icons-material/Edit';
import AddIcon from '@mui/icons-material/Add';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { CardContent, Modal } from '@mui/material';
import { fetchcandidaturesFunction, fetchprofilesFunction, fetchprojectsFunction } from '../../services/GetFunction/GetEmployers/getEmployersFunctions.js';
import { putAtannulercandidature, putAtrejetercandidature, putAtvalidercandidature } from '../../services/putFunction/Employer/putFunction.js';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));



const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.white,
    color: theme.palette.common.black,
    fontWeight: 'bold',
    fontSize: 16,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));





const DashProfil = () => {

  const [modules, setModules] = useState([]);
  console.log(modules);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchcandidaturesFunction();
        setModules(response);
        console.error(response);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  /** nombre total de freelance */
  const [freelanceCount, setFreelanceCount] = useState(0);

  useEffect(() => {
    const fetchFreelanceCount = async () => {
      try {
        const response = await fetchprofilesFunction();
        const totalCount = response.length;
        console.log('profile', response.length);
        setFreelanceCount(totalCount);
      } catch (error) {
        console.error('Error fetching freelance count:', error);
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
        console.error('Error fetching freelance count:', error);
      }
    };

    fetchProjetCount();
  }, []);

  /**pagination */
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  /**modal */
  const [openModal, setOpenModal] = useState(false);
  const [openModalCandidat, setOpenModalCandidat] = useState(false);

  const [selectedModule, setSelectedModule] = useState(null);
  const [selectedId, setSelectedId] = useState(null);

  const handleOpenModal = (moduleId) => {
    const selected = modules.find((module) => module.id === moduleId);
    console.log(moduleId);
    setSelectedModule(selected);
    setOpenModal(true);
  };

  const handleOpenModalAccept = (id) => {
    setSelectedId(id);
    setOpenModalCandidat(true);
  };

  const handleValiderClick = async () => {
    // Vérifiez si l'ID du projet sélectionné est valide
    if (selectedId) {
      try {
        const response = await putAtvalidercandidature({selectedId});
        // Traitement de la réponse de la requête
        console.log('cadidature accepter avec success', response);
        alert('cadidature accepter avec success')

      } catch (error) {
        console.error('cadidature failled', error);
      }
    }
  };

  /** annuller candidature */
  const handleAnnullerClick = async () => {
    // Vérifiez si l'ID du projet sélectionné est valide
    if (selectedId) {
      // Effectuez la requête PUT vers l'API
      await putAtannulercandidature(selectedId)
        .then(response => {
          // Traitement de la réponse de la requête
          console.log('cadidature Annuler avec success', response);
          alert('Vous avez Annuler cette cadidature')
        })
        .catch(error => {
          // Gestion des erreurs de la requête
          console.error('probleme Annuler', error);
        });
    }
  };

  /**rejeter candidature */
  const handleRejeterrClick = async () => {
    // Vérifiez si l'ID du projet sélectionné est valide
    if (selectedId) {
      // Effectuez la requête PUT vers l'API
      await putAtrejetercandidature(selectedId)
        .then(response => {
          // Traitement de la réponse de la requête
          console.log('cadidature Rejeter avec success', response.data);
          alert('Vous avez Rejeter cette cadidature')
        })
        .catch(error => {
          // Gestion des erreurs de la requête
          console.error('probleme', error);
        });
    }
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setOpenModalCandidat(false);
  };
  return (

    <>
      <NavBar />
      <Container className='mt-5'>
        <Box className='mt-5' sx={{ display: 'flex', backgroundColor: '#' }}>
          <Sidebar />
          <Box sx={{ p: 3 }}>
            <Grid className='mt-5 mt-sm-0'>
              <Grid className='my-5 my-sm-0'>
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
                    <Grid container spacing={2} sx={{ padding: { xs: '10px', sm: '20px', md: '4px' } }} style={{ width: 'auto',marginLeft: '15%' }}>
                      <Grid item xs={false} sm={6} md={6}>
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
          </Box>
        </Box>


        <Box>
          <div class="row justify-content-around">
            <div class="col-4" style={{ width: 'auto',marginLeft: '2%' }}>
              <Typography fontWeight="bold" noWrap className='fs-3 text-center'>
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

        <Container className='mt-3'>
          <TableContainer component={Paper} style={{ width: 'auto',marginLeft: '15%' }}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table" >
              <TableHead>
                <TableRow>
                  <StyledTableCell>Nom Du projet</StyledTableCell>
                  <StyledTableCell align="center">Nom du module</StyledTableCell>
                  <StyledTableCell align="right">Information du freelance</StyledTableCell>
                  <StyledTableCell align="right">Nom de l'employeur</StyledTableCell>
                  <StyledTableCell align="right">Description du projet</StyledTableCell>
                  {/* <StyledTableCell align="right">Date Date de publication</StyledTableCell>
                  <StyledTableCell align="right">ville</StyledTableCell> */}
                  <StyledTableCell align="right">Action</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {modules.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((candidatures) => (
                  <StyledTableRow key={candidatures.id}>
                    <StyledTableCell>{candidatures.module.project.title}</StyledTableCell>
                    <StyledTableCell>{candidatures.module.title}</StyledTableCell>
                    <StyledTableCell>{candidatures.profile?.linkedInLink}</StyledTableCell>
                    <StyledTableCell align="center">{candidatures.module.project.users.userName}</StyledTableCell>
                    <StyledTableCell>{candidatures.module.project.wording}</StyledTableCell>
                    {/* <StyledTableCell>{candidatures.project.map(p =>{ p.title})}</StyledTableCell>
                          <StyledTableCell>{candidatures.monnaie}</StyledTableCell>
                          <StyledTableCell>{candidatures.dateCreation}</StyledTableCell> */}
                    <Stack direction="row" spacing={1} className='d-flex justify-content-end'>
                      {/* <IconButton aria-label="delete">
                          <DeleteIcon />
                        </IconButton> */}
                      <IconButton aria-label="">
                        <AddIcon onClick={() => handleOpenModalAccept(candidatures.id)} />
                      </IconButton>
                      <IconButton aria-label="" onClick={() => handleOpenModal(candidatures.id)}>
                        <VisibilityIcon />
                      </IconButton>
                    </Stack>
                  </StyledTableRow>
                ))}
                <Modal open={openModal} onClose={handleCloseModal} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Card sx={{ width: 400, bgcolor: '#fff', border: '1px solid #ccc' }}>
                    <CardContent sx={{ padding: '2rem' }}>
                      <h3>Detail sur le POST</h3>
                      {selectedModule && (
                        <div className='row' >
                          <div className='col-12 '>
                            <Typography sx={{ mb: 1.5 }} color="text.dark">
                              Description du module:
                            </Typography>
                            <OutlinedInput className='bg-white'
                              id="outlined-adornment-projet"
                              aria-describedby="outlined-projet-helper-text"
                              inputProps={{
                                'aria-label': 'projet',
                              }}
                              style={{width:'330px'}}
                              defaultValue={`${selectedModule.module.description}`} disabled
                            />
                          </div>
                          <div className='col-12'>
                            <Typography sx={{ mb: 1.5 }} color="text.dark">
                              Date de Creation du projet:
                            </Typography>
                            <OutlinedInput className='bg-white'
                              id="outlined-adornment-projet"
                              aria-describedby="outlined-projet-helper-text"
                              inputProps={{
                                'aria-label': 'projet',
                              }}
                              style={{width:'330px'}}
                              defaultValue={`${selectedModule.module.project.dateCreation}`} disabled
                            />

                            <Typography sx={{ mb: 1.5 }} color="text.dark">
                              Budget maximum du Projet:
                            </Typography>
                            <OutlinedInput className='bg-white'
                              id="outlined-adornment-projet"
                              aria-describedby="outlined-projet-helper-text"
                              inputProps={{
                                'aria-label': 'projet',
                              }}
                              style={{width:'330px'}}
                              defaultValue={`${selectedModule.module.project.maxAmount} ${selectedModule.module.project.monnaie}`} disabled
                            />

                            <Typography sx={{ mb: 1.5 }} color="text.dark">
                              Domaine liee au Projet:
                            </Typography>
                            <OutlinedInput className='bg-white'
                              id="outlined-adornment-projet"
                              aria-describedby="outlined-projet-helper-text"
                              inputProps={{
                                'aria-label': 'projet',
                              }}
                              style={{width:'330px'}}
                              defaultValue={`${selectedModule.module.project.domain.titled}`} disabled
                            />

                            <Typography sx={{ mb: 1.5 }} color="text.dark">
                              Date limite du Projet:
                            </Typography>
                            <OutlinedInput className='bg-white'
                              id="outlined-adornment-projet"
                              aria-describedby="outlined-projet-helper-text"
                              inputProps={{
                                'aria-label': 'projet',
                              }}
                              style={{width:'330px'}}
                              defaultValue={`${selectedModule.module.project.delay}`} disabled
                            />

                            <Typography sx={{ mb: 1.5 }} color="text.dark">
                              Ville:
                            </Typography>
                            <OutlinedInput className='bg-white'
                              id="outlined-adornment-projet"
                              aria-describedby="outlined-projet-helper-text"
                              inputProps={{
                                'aria-label': 'projet',
                              }}
                              style={{width:'330px'}}
                              defaultValue={`${selectedModule.module.project.ville.name}`} disabled
                            />

                            <Typography sx={{ mb: 1.5 }} color="text.dark">
                              Pays:
                            </Typography>
                            <OutlinedInput className='bg-white'
                              id="outlined-adornment-projet"
                              aria-describedby="outlined-projet-helper-text"
                              inputProps={{
                                'aria-label': 'projet',
                              }}
                              style={{width:'330px'}}
                              defaultValue={`${selectedModule.module.project.pays.name}`} disabled
                            />

                          </div>
                        </div>

                      )}

                      <div className="modal-buttons" sx={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Button onClick={handleCloseModal}>Close</Button>
                        {/* <Button onClick={handleDeleteItem} variant="contained" color="error">Confirmer</Button> */}
                      </div>
                    </CardContent>
                  </Card>
                </Modal>

                <Modal open={openModalCandidat} onClose={handleCloseModal} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Card sx={{ width: 400, bgcolor: '#fff', border: '1px solid #ccc' }}>
                    <CardContent sx={{ padding: '2rem' }}>
                      <h3>Ajouter un module au projet</h3>
                      <p>Projet sélectionné : {selectedId}</p>
                      <Button onClick={handleValiderClick} variant="contained" style={{ marginTop: '5%' }}>valider</Button>
                      <Button onClick={handleRejeterrClick} variant="contained" style={{ marginTop: '5%', marginLeft:'3%' }}>Rejeter</Button>

                      <Button onClick={handleAnnullerClick} variant="contained" style={{ marginTop: '5%', marginLeft:'3%' }}>Annuler</Button>

                    </CardContent>
                  </Card>
                </Modal>
              </TableBody>
            </Table>
            <TablePagination
              rowsPerPageOptions={[10, 50, 100]}
              component="div"
              count={modules.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </TableContainer>
        </Container>


      </Container>
    </>


  )
}

export default DashProfil