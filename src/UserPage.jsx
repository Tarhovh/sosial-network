/* eslint-disable no-unused-vars */
import React from "react";
import UserPosts from "./components/UserPosts";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import Stack from "@mui/material/Stack";
import { deepPurple } from "@mui/material/colors";
import Image from "./images/maxresdefault.jpg";
import Paper from "@mui/material/Paper";
import CardHeader from "@mui/material/CardHeader";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";

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

        <Stack direction="row" alignItems="flex-end" spacing={1}>
          <Avatar sx={{ bgcolor: deepPurple[500] }}>B</Avatar>
          <AddAPhotoIcon fontSize="medium" />
        </Stack>
        <CardHeader>
            <Card>
                aaaaaa
            </Card>
        </CardHeader>
      </Container>

      <Container sx={{
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        maxWidth: '100%',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <UserPosts />
      </Container>
    </Container>
  );
}

export default UserPage;
