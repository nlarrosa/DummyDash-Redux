import * as React from "react";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import MenuIcon from "@mui/icons-material/Menu";
import NotificationsIcon from "@mui/icons-material/Notifications";
import LogoutIcon from '@mui/icons-material/Logout';


import { AppBar } from "./AppBar";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../../store/slices/auth/authSlice";



export const NavBar = ({ toggleDrawer, open }) => {

  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  return (
    <AppBar position="absolute" open={open}>
      <Toolbar
        sx={{
          pr: "24px", // keep right padding when drawer closed
        }}
      >
        <IconButton
          edge="start"
          color="inherit"
          aria-label="open drawer"
          onClick={toggleDrawer}
          sx={{
            marginRight: "36px",
            ...(open && { display: "none" }),
          }}
        >
          <MenuIcon />
        </IconButton>
        <Typography
          component="h1"
          variant="h6"
          color="inherit"
          noWrap
          sx={{ flexGrow: 1 }}
        >
          Dashboard
        </Typography>

        <Typography variant="body1"> { user.username } </Typography>
          <IconButton onClick={() => dispatch(logout())}color="inherit" style={{ marginLeft:10}}>
            <LogoutIcon />
          </IconButton>

        <IconButton color="inherit">
          <Badge badgeContent={4} color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};
