import React, { useState, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const Dashboard = () => {
  const navigate = useNavigate();
  const [food, setFood] = useState();

  const [item, setItem] = React.useState("burger");

  const handleChange = (event) => {
    setItem(event.target.value);
  };

  useEffect(() => {
    axios
      .get(
        `https://api.spoonacular.com/food/products/search?query=${item}&apiKey=189ae019736942bf877a6b4e0695ea8a`
      )
      .then(function (response) {
        console.log(response.data.products?.[0].title);
        alert(response.data.products?.[0].title);
        setFood(response?.data);
        // console.log(food);
      })
      .catch(function (error) {
        console.log(error.message);
      });
    // .then(function () {});
  }, [item]);

  return (
    <>
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
                sx={{
                  backgroundColor: "Red",
                  color: "white",
                  textDecoration: "none",
                }}
              >
                Logout
              </Button>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
      <div>hhh</div>
      <Box sx={{ minWidth: 120, marginTop: "100px" }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Menu</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={item}
            label="Menu"
            onChange={handleChange}
          >
            <MenuItem value="burger">Burger</MenuItem>
            <MenuItem value="pizza">Pizza</MenuItem>
            <MenuItem value="biryani">Biryani</MenuItem>
          </Select>
        </FormControl>
      </Box>
      {!item ? (
        <div>Select Food Item </div>
      ) : (
        <div>
          {/* {food?.map((i) => (
            <>
              <Card sx={{ maxWidth: 345 }}>
                <CardHeader title={food?.products?.title} />
                <CardMedia
                  component="img"
                  height="194"
                  image="/static/images/cards/paella.jpg"
                  alt="Paella dish"
                />
                <CardContent>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                  ></Typography>
                </CardContent>
                <CardActions disableSpacing>
                  <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                  </IconButton>
                </CardActions>
              </Card>
            </>
          ))} */}
          
        </div>
      )}
    </>
  );
};

export default Dashboard;
