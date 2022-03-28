/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React from "react";
import Container from "@mui/material/Container";
import ImgMediaCard from "./userPostsComponents/ImageMediaCard";
import FullWidthTextField from "./userPostsComponents/FullWidthTextField";
import MyGallery from './userPostsComponents/MyGallery '

function UserPosts() {
  return (
    <Container sx={{
      // display: 'flex',
      // flexDirection: 'column',
      width: '700px',
      maxWidth: '100%',
      marginTop: 5,

    }}>
      <FullWidthTextField />
      <MyGallery/>
      <ImgMediaCard />
      <ImgMediaCard />
      <ImgMediaCard />
      <ImgMediaCard />
      <ImgMediaCard />
    </Container>
  )
}

export default UserPosts;
