/* eslint-disable no-unused-vars */
import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
// import SendIcon from "@mui/icons-material/Send";
import FormControl from "@mui/material/FormControl";
// import { Paper } from '@mui/material';
import CardMedia from "@mui/material/CardMedia";

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { Input } from '@mui/material';
import Image3 from "../../images/1.jpg";
import profpic from "../../images/profil1.jpg";

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

  const imgStyle ={
    width: '50px',
    height: '50px',
    display: 'flex',
   placeSelf: 'center',
   marginBottom: 50
  }

  // console.dir(Paper)

  return (
    <>
      <Box
        sx={{
          width: 500,
          maxWidth: "100%",
          marginTop: 5,
        }}
      > 
      <form onSubmit={onSubmit}>
        <FormControl 
        sx={
          {
            width: '100%'
          }
        }
        >
         
          <TextField
            // fullWidth
            label="Make Your Post"
            id="fullWidth"
            value={text}
            onChange={handleChange}
          />

          {/* <Input defaultValue={text} onChange={handleChange}/> */}
          <Button
            type="submit"
            variant="contained"
            // endIcon={<SendIcon />}
            onClick={onSubmit}
            // fullWidth='false'
          >
            Post
          </Button>
          </FormControl>
          </form>
        
      </Box>

      <Box>
        {/* <form 
// onSubmit={onSubmit}

>
          <input type="text" 
          // value={text} onChange={handleChange}
          ></input>
          <button>Add</button>
          </form> */}

        <div>
          {todos?.map((todo) => (
            <CardMedia
              key={todo.id}
              image={Image3}
              sx={{
                // backgroundImage: Image3,
                display: "flex",
                flexDirection: "column",
                width: 500,
                height: 500,
                marginTop: 5,
                alignItems: "center",
                justifyContent: "center",
                textAlign: 'center'
              }}
            >
             
              <img src={profpic} alt="sss" style={imgStyle} />
              {todo.text}
              <h3>©MyNetwork</h3>
            </CardMedia>
          ))}
        </div>
      </Box>
    </>
  );
}
