import React, { useState } from "react";
import  Grid from "@mui/material/Grid";
// import Item from '@mui/material/Item'
import { styled } from '@mui/material/styles';
// import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import SignupForm from "../../Components/SignupForm";


const Signup = () => {
   


    const Item = styled(Paper)(({ theme }) => ({
        color: theme.palette.text.secondary,
      }));
  return (
    <div>
      {/* <h1>signup</h1> */}
      <Grid container spacing={2} >
        <Grid item  xs={0} sm={0}  md={6} lg={8} xl={8} >
          <Item><img src="https://source.unsplash.com/random/900x700/?food" width="100%" height="100%" /></Item>
        </Grid>
        <Grid item xs={0} sm={0} md={6} lg={4} xl={4}>
         <SignupForm />
        </Grid>
      </Grid>
    </div>
  );
};

export default Signup;
