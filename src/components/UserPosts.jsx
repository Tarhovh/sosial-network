/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React from "react";
import Container from "@mui/material/Container";
import ImgMediaCard from "./ImageMediaCard";
import FullWidthTextField from "./FullWidthTextField";




function UserPosts() {
  return (
   <Container  sx={{
    // display: 'flex',
    // flexDirection: 'column',
    width: '700px',
    maxWidth: '100%',
    marginTop: 5,
   
  }}>
       <FullWidthTextField/>
<ImgMediaCard/>
<ImgMediaCard/>
<ImgMediaCard/>
<ImgMediaCard/>
<ImgMediaCard/>
   </Container>
  )
}

export default UserPosts;
