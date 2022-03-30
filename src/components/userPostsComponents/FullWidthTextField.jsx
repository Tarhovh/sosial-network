/* eslint-disable no-unused-vars */
import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
// import SendIcon from "@mui/icons-material/Send";
import FormControl from "@mui/material/FormControl";
// import { Paper } from '@mui/material';
import CardMedia from "@mui/material/CardMedia";
import { blue, deepPurple, lightBlue, lightGreen } from "@mui/material/colors";

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { Input } from '@mui/material';
// import profpic from "../../images/profil1.jpg";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ShareIcon from "@mui/icons-material/Share";
import ReadMoreOutlinedIcon from "@mui/icons-material/ReadMoreOutlined";
import { Avatar } from "@mui/material";

export default function FullWidthTextField() {
  const todos = useSelector(function (state) {
    return state;
  });

  const dispatch = useDispatch();

  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: "add-new-toDo",
      payload: {
        text: text,
      },
    });
    setText("");
  };

  const imgStyle = {
    width: "80px",
    height: "80px",
    display: "flex",
    placeSelf: "center",
    marginBottom: 50,
  };

  return (
    <>
      <Box
        sx={{
          width: 700,
          maxWidth: "100%",
          marginTop: 5,
        }}
      >
        <form onSubmit={onSubmit}>
          <FormControl
            sx={{
              width: "100%",
            }}
          >
            <TextField
              fullWidth
              label="Make Your Post"
              id="fullWidth"
              value={text}
              onChange={handleChange}
            />

            <Button
              type="submit"
              variant="contained"
              // endIcon={<SendIcon />}
              onClick={onSubmit}
            >
              Post
            </Button>
          </FormControl>
        </form>
      </Box>

      {todos?.map((todo) => (
        <Box
          key={todo.id}
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "700",
            alignItems: "center",
            justifyContent: "center",
            marginTop: 5,
            marginBottom: 5,
          }}
        >
          <Card
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              maxWidth: 500,
              marginTop: 6,
              borderRadius: 8,
              bgcolor: lightGreen[100],
            }}
          >
            <CardActions
              sx={{
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
                width: "100%",
              }}
            >
              <Avatar
                sx={{
                  bgcolor: blue[600],
                  width: 85,
                  height: 85,
                }}
              >
                {"Photo"}
              </Avatar>

              <Typography gutterBottom variant="h5" sx={{ width: "50%" }}>
                Name Surname
              </Typography>
            </CardActions>

            <CardMedia
              sx={{
                display: "flex",
                flexDirection: "column",
                width: 500,
                minHeight: 300,
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                borderRadius: 5,
              }}
            >
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  sx={{
                    display: "flex",
                    justifySelf: "center",
                  }}
                >
                  {todo.text}
                </Typography>
                </CardContent>
                <CardContent 
                 sx={{
                  display: "flex",
                  width: '90%',
                  justifyContent: "flex-end",
                  alignItems: 'flex-end',
                  justifySelf: "flex-end",
                }}
                >
                <Typography gutterBottom variant="h6" component="div">
                  ©MyNetwork
                </Typography>
                </CardContent>
              
            </CardMedia>
            <CardActions>
              <Button variant="contained" endIcon={<ShareIcon />}></Button>
              <Button
                variant="contained"
                endIcon={<ReadMoreOutlinedIcon />}
              ></Button>
              <Button variant="contained" endIcon={<ThumbUpIcon />}></Button>
            </CardActions>
          </Card>
        </Box>
      ))}
    </>
  );
}
