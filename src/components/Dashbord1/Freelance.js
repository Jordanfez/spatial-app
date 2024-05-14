import LocationOn from "@mui/icons-material/LocationOn";
import VisibilityIcon from "@mui/icons-material/Visibility";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import URL_SERVER from "../../services/appApi.js";
import { fetchUsersFunction } from '../../services/GetFunction/GetEmployers/getEmployersFunctions.js';
import Footer from "./Footer.js";
import NavBar from "./NavBar.js";
import Sidebar from "./Sidebar.js";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  height: "70%",
  weight: "50%",
  overflow: "scroll",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

const Freelance = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    const fetchProfiles = async () => {
      try {
        const response = await fetchUsersFunction();
        setProfiles(response);
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    };

    fetchProfiles();
  }, []);


  const filteredUsers = profiles.filter(user => user.userFunction?.id === 2);
  // const filteredUser = profiles.find(user => user.userFunction.id === 2);
  console.log(filteredUsers);

  return (
    <>
      <NavBar />


      <Box className="mt-5" sx={{ display: "flex", flexDirection: "column" }}>
        <Sidebar />
        <Container className="mt-5" direction="column">
          <div className="row d-flex justify-content-center align-items-center" style={{ width: '80%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginLeft: '15%' }}>
            {filteredUsers === null ? (
              <div>Aucun Freelance trouver</div>
            ) : filteredUsers.map(filteredUser => (
            <div className="col-md-3" style={{ padding: '1%' }} >
              <Card>
                <Box className="ms-2" key={filteredUser.id} >
                  <Avatar>{filteredUser.userName.charAt(0)}</Avatar>
                  <Stack spacing={0.5} className="ms-3">
                    <Typography className="ps-2">
                      <span style={{ fontWeight: 'bold' }}>Nom: </span>{filteredUser.userName}
                    </Typography>
                    <Typography fontWeight="bold" className="ps-2">
                      Lien reseau: {filteredUser.linkedInLink}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      <LocationOn sx={{ color: "grey.500" }} /> {filteredUser.localisation}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Ages: {filteredUser.age}
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
                    Description: {filteredUser.description}
                  </Typography>
                </Stack>
                <Stack
                  direction="column"
                  alignItems="center"
                  sx={{ px: 2, py: 1, bgcolor: "background.default" }}
                >
                  <div>
                    <Button
                      // href={`${URL_SERVER}${filteredUser.curriculumVitae}`}
                      target={`${URL_SERVER}${filteredUser.curriculumVitae}`}
                      variant="outlined"
                      startIcon={<VisibilityIcon />}
                    >
                      Voir CV
                    </Button>
                  </div>
                </Stack>
              </Card>
            </div>
            ))}
          </div>

        </Container>
      </Box>
      <Footer />
    </>
  );
};

export default Freelance;
