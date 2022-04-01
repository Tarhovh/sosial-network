/* eslint-disable no-unused-vars */
import React from "react";
import UserPosts from "../components/UserPosts";
import Container from "@mui/material/Container";
import Image from "../images/maxresdefault.jpg";
import CardMedia from "@mui/material/CardMedia";
import AccountMenu from "../components/userPostsComponents/AccountMenu";
import { Provider } from "react-redux";
import store from "../store";

function UserPage() {
  

  return (
    <Container fixed
    sx={{
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        maxWidth: '100%',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Container fixed>
        <CardMedia component="img" height="140" src={Image} />
        <AccountMenu/>
      </Container>

      <Container sx={{
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        maxWidth: '100%',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
     <Provider store={store}><UserPosts /></Provider> 
      </Container>
    </Container>
  );
}

export default UserPage;
