import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link, useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();


  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            CODEJAM FOOD APP
          </Typography>
          <Box>
            <Button
              onClick={() => navigate("/Favorites")}
              sx={{ color: "white", textDecoration: "none" }}
            >
              Favorites
            </Button>
            <Button
              onClick={() => navigate("/")}
              sx={{backgroundColor: "Red", color: "white", textDecoration: "none" }}
            >
              Logout
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Dashboard;
