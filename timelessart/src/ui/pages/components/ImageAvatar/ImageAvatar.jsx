import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import image from '../../../../assets/IMG_1660.jpg'; // Import corect al imaginii

export default function ImageAvatar() {
  return (
    <Stack direction="row" spacing={2}>
      <Avatar alt="Remy Sharp" src={image} sx={{ width: 100, height: 100 }} />
    </Stack>
  );
}
