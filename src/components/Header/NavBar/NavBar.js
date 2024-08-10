import {
  AppBar,
  Avatar,
  Box,
  Button,
  Container,
  Divider,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Tooltip,
  Typography,
  Popover,
} from "@mui/material";
import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import HealingTwoToneIcon from "@mui/icons-material/HealingTwoTone";
import "./NavBar.css";
import useAuth from "../../../Hooks/useAuth";
import { useHistory } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import logo from "../../../images/logo.png";

const settings = ["Profile", "Logout"];

const Navbar = () => {
  const { logout, user } = useAuth();
  const { displayName, photoURL } = user;

  let history = useHistory();
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [anchorElServices, setAnchorElServices] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleOpenServicesMenu = (event) => {
    setAnchorElServices(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleCloseServicesMenu = () => {
    setAnchorElServices(null);
  };

  const handleUserControl = (event) => {
    const userEvent = event.currentTarget.innerText;
    if (userEvent === "Logout") {
      logout();
    } else if (userEvent === "Profile") {
      history.push("/profile");
    }
  };

  return (
    <Box sx={{ mt: 8 }} style={{ justifyContent: "center" }}>
      <AppBar position="fixed" color="primary" sx={{ top: 0, bottom: "auto" }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
            >
              <MenuItem bgcolor="alternate" component={HashLink} smooth to="/home">
                <img
                  src={logo}
                  alt="Sloane virtual hospital"
                  width={"200px"}
                  height={"100px"}
                  style={{
                    scale: "1.7",
                  }}
                />
              </MenuItem>
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                color="alternate"
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
                style={{ justifyContent: "center" }}
              >
                <MenuItem bgcolor="primary" color="primary" component={HashLink} smooth to="/home">
                  HOME
                </MenuItem>
                <MenuItem bgcolor="primary" component={HashLink} smooth to="/services">
                  SERVICES
                </MenuItem>
                <MenuItem bgcolor="primary" component={HashLink} smooth to="/doctors">
                  DOCTORS
                </MenuItem>
                <MenuItem bgcolor="primary" component={HashLink} smooth to="/appointment">
                  APPOINTMENT
                </MenuItem>
                <MenuItem bgcolor="primary" component={HashLink} smooth to="/about">
                  ABOUT
                </MenuItem>
                {!user?.email && (
                  <MenuItem bgcolor="primary" component={HashLink} smooth to="/login#login">
                    LOGIN
                  </MenuItem>
                )}
              </Menu>
            </Box>

            <Typography
              variant="h6"
              align="center"
              component="div"
              sx={{ flexGrow: 1, pt: 2, display: { xs: "flex", md: "none" } }}
            >
              <HealingTwoToneIcon fontSize="large" /> Health Care Hospital
            </Typography>
            <Box
              sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}
              style={{ justifyContent: "end" }}
            >
              <HashLink
                className="text-style text-style-fullscrn"
                smooth
                to="/home"
                color="black"
                style={{ textDecoration: "none" }}
              >
                <Button sx={{ my: 2, color: "black", display: "block", px: 3 }}>
                  Home
                </Button>
              </HashLink>
              <HashLink
                className="text-style text-style-fullscrn"
                smooth
                to="/about#about"
              >
                <Button sx={{ my: 2, color: "black", display: "block", px: 3 }}>
                  About
                </Button>
              </HashLink>

             </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
};

export default Navbar;
