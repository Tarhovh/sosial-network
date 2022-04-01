import { useState } from "react";
import { useDispatch } from "react-redux";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
// import SendIcon from "@mui/icons-material/Send";
import FormControl from "@mui/material/FormControl";
import { addItem } from "../../store/features/posts.feature";

function AddNewPostForm() {

    const dispatch = useDispatch();

    const [text, setText] = useState("");
  
    const handleChange = (e) => {
      setText(e.target.value);
    };
  
    const onSubmit = (e) => {
      e.preventDefault();
      if (!text.trim()) {
        return;
      }
      dispatch(addItem({ text: text }));
      setText("");
    };
  
    return (
        <Box
        sx={{
          width: 700,
          maxWidth: "100%",
          marginTop: 5,
        }}
      >
        <form
        >
          <FormControl
            sx={{
              width: "100%",
            }}
          >
            <TextField
              multiline
              rows={2}
              fullWidth
              label="Make Your Post"
              id="fullWidth"
              value={text}
              onChange={handleChange}
            />

            <Button
              type="submit"
              variant="contained"
              // disabled={!text}
              // endIcon={<SendIcon />}
              onClick={onSubmit}
            >
              Post
            </Button>
          </FormControl>
        </form>
      </Box>
    );
}

export default AddNewPostForm;