// import React, { useCallback, useState } from 'react';
import ImageGallery from 'react-image-gallery';
import {photos} from '../../images/photos';
import Card from '@mui/material/Card';

function MyGallery () {

    console.dir(ImageGallery)
    return (
        <>
<Card>
        <ImageGallery items={photos} /></Card>
        
      </>
    );
}

export default MyGallery ;