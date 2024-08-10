import React from "react";
import {
  Avatar,
  Box,
  Chip,
  Container,
  Divider,
  Grid,
  Stack,
  styled,
  Typography,
} from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";
import HealingTwoToneIcon from "@mui/icons-material/HealingTwoTone";
import CallIcon from "@mui/icons-material/Call";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import "./Footer.css";
import { blue, pink } from "@mui/material/colors";
import { HashLink } from "react-router-hash-link";

const Root = styled("div")(({ theme }) => ({
  width: "100%",
  ...theme.typography.body2,
  "& > :not(style) + :not(style)": {
    marginTop: theme.spacing(2),
  },
}));

// copyright function for generate year automatically
function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color=""
      align="center"
      {...props}
    >
      {"Developed with 🖤 by "}
      <strong>
        <a
          className="text-style"
          href="https://akshybhosale.github.io/myshop"
          target="_blank"
          rel="noreferrer noopener"
        >
          Acolyte-technologies
        </a>{" "}
      </strong>
      {"Copyright ©"}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const Footer = () => {
  return (
    <footer>
      <Box
        className="sticky-container"
        sx={{
          bgcolor: "primary.main",
          color: "text.",
          pb: 2,
          top: "auto",
        }}
      >
        <Container maxWidth="xl">
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            <Grid sx={{ m: "auto" }} item xs={12} sm={6} md={4}>
              <Box>
                <Typography
                  variant="h6"
                  component="div"
                  direction="row"
                  justifyContent="flex-start"
                  alignItems="center"
                  sx={{ mr: 2, display: { xs: "flex", md: "flex" } }}
                  style={{ justifyContent: "center" }}
            
                >
                  {" "}
                 
                  <Typography id='footerlogotext' className=" footerlogotext font-bold">Sloane Virtual Hospital

                  </Typography>
                </Typography>
                <Divider />
              </Box>

              <Stack
                direction="row"
                justifyContent="flex-start"
                alignItems="center"
                spacing={1}
                sx={{ m: 1 }}
              >
                <Avatar className="avatar" sx={{ mt: 1, bgcolor: blue[400] }}>
                  <LocationOnIcon />
                </Avatar>
                <a
                  className="text-style"
                  href="https://maps.app.goo.gl/Sevtm9BZsQWETPmw9"
                  target="_blank"
                  rel="noopener noreferrer"
                  
                >
                 	C-80, Prem Nagar, Affordable Awasiya Yojna, Udyog Puri Kota, Kota, Kota, Rajasthan, India, 324004.
                </a>
              </Stack>

              <Stack
                direction="row"
                justifyContent="flex-start"
                alignItems="center"
                spacing={1}
                sx={{ m: 1 }}
              >
                <Avatar
                  className="avatar"
                  sx={{ mb: 1, mt: 1, bgcolor: blue[400] }}
                >
                  <EmailIcon />
                </Avatar>
                <a className="text-style" href="mailto: faisel.usmani@gmail.com">
              faisel.usmani@gmail.com
                </a> 
            
              </Stack>
              <Stack
                direction="row"
                justifyContent="flex-start"
                alignItems="center"
                spacing={1}
                sx={{ m: 1 }}
              >
                <Avatar
                  className="avatar"
                  sx={{ mb: 1, mt: 1, bgcolor: blue[400] }}
                >
                  <EmailIcon />
                </Avatar>
               
                <a className="text-style" href="mailto: Poison.akkey@gmail.com">
             Poison.akkey@gmail.com
                </a>
              </Stack>

              <Stack
                direction="row"
                justifyContent="flex-start"
                alignItems="center"
                spacing={1}
                sx={{ m: 1 }}
              >
                <Avatar className="avatar" sx={{ mb: 1, bgcolor: blue[400] }}>
                  <CallIcon />
                </Avatar>
                <a className="text-style" href="mobile:9657601501">
                  +91 9657601501
                </a>
              </Stack>
            </Grid>

            {/* ----------service part ---------------*/}
            <Grid item xs={12} sm={4} >
              <Root style={{marginTop:'40px'}}>
                <Divider className="text-style">
                  <Chip className="text-style" label="Our Services" />
                </Divider>
              </Root>

              <Box sx={{ p: 2 }}>
                <HashLink
                  className="text-style lis"
                  to="/doctors#doctors"
                  color="inherit"
                >
                  Find a Doctor
                </HashLink>
              </Box>

              <Box sx={{ p: 2 }}>
                <HashLink
                  className="text-style"
                  to="/services#services"
                  color="inherit"
                >
                 All services
                </HashLink>
              </Box>

              <Box sx={{ p: 2 }}>
                <HashLink
                  className="text-style"
                  to="/appointment#appointment"
                  color="inherit"
                >
                  Make An Appointment
                </HashLink>
              </Box>

              <Box sx={{ p: 2 }}>
                <HashLink className="text-style" to="/register" color="inherit">
                  Register For Service{" "}
                </HashLink>
              </Box>
            </Grid>

            {/* ----------social media part ------------*/}

            <Grid item xs={12} sm={4}>
              <Root style={{marginTop:'40px'}}>
                <Divider>
                  <Chip label="Find us on social media" />
                </Divider>
              </Root>

              <Stack
                direction="row"
                justifyContent="flex-start"
                alignItems="center"
                spacing={1}
                sx={{ m: 1 }}
              >
                <Avatar
                  className="avatar"
                  sx={{ mb: 1, mt: 1, bgcolor: blue[400] }}
                >
                  <InstagramIcon />
                </Avatar>
                <a
                  className="text-style"
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  SloaneVirtualHospital on Instagram
                </a>
              </Stack>

              <Stack
                direction="row"
                justifyContent="flex-start"
                alignItems="center"
                spacing={1}
                sx={{ m: 1 }}
              >
                <Avatar className="avatar" sx={{ mb: 1, bgcolor: blue[400] }}>
                  <LinkedInIcon />
                </Avatar>
                <a
                  className="text-style"
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  SloaneVirtualHospital on LinkedIn
                </a>
              </Stack>

             
            </Grid>
          </Grid>
          <Divider sx={{ mb: 2 }} />
          <Copyright sx={{ mt: 5 }} />
        </Container>
      </Box>
    </footer>
  );
};

export default Footer;
