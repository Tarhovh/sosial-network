import { Container } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

function Home() {
    return(
  <Container maxWidth="lg" sx={{ textAlign: 'center', mt: '3rem'}}>
    <h1>Home</h1>
    <nav>
      <Link to="/">Home</Link>
      <Link to="/userProfil">My Profil</Link>
      </nav>

    </Container>
  );
}

export default Home;
