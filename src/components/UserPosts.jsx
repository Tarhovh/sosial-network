/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React from "react";
import Container from "@mui/material/Container";
import AddNewPostForm from "./Forms/AddNewPostForm";
import Posts from "./Posts/Posts";

function UserPosts() {
  return (
    <Container sx={{
      width: '700px',
      maxWidth: '100%',
      marginTop: 5,

    }}>
      <AddNewPostForm/>
      <Posts />
    </Container>
  )
}

export default UserPosts;
