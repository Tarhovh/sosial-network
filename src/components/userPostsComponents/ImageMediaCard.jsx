import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ShareIcon from '@mui/icons-material/Share';
import ReadMoreOutlinedIcon from '@mui/icons-material/ReadMoreOutlined';
import Image2 from "../../images/lbox-srx4600-left.jpg";

export default function ImgMediaCard() {
  return (
    <Card sx={{ maxWidth: 500, marginTop: 5, }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={Image2}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
      <Button variant="contained" endIcon={<ShareIcon />}></Button>
      <Button variant="contained" endIcon={<ReadMoreOutlinedIcon />}></Button>
        <Button variant="contained" endIcon={<ThumbUpIcon />}></Button>
      </CardActions>
    </Card>
  );
}
