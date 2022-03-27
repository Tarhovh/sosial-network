import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from "@mui/icons-material/Send"

export default function FullWidthTextField() {
  return (
    <Box
      sx={{
        width: 500,
        maxWidth: '100%',
        marginTop: 5,
      }}
    >
      <TextField fullWidth label="fullWidth" id="fullWidth" />
      <Button variant="contained" endIcon={<SendIcon />}>
  Send
</Button>
    </Box>
  );
}
