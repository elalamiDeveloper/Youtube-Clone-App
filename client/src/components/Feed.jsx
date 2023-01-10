import { useState, useEffect } from 'react';
import { Box, Stack, Typography } from '@mui/material';

const Feed = () => {
  return (
    <Stack sx={{ flexDirection: { sx: 'column', md: 'row' } }}>
      <Box
        sx={{
          height: { sx: 'auto', md: '92vh' },
          borderRight: '1px solid #3d3dd3',
          px: { sx: 0, md: 2 },
        }}
      >
        <Typography
          className="copyright"
          variant="body2"
          sx={{ mt: 1.5, color: '#fff' }}
        >
          Copyright 2023 ELA Media
        </Typography>
      </Box>
    </Stack>
  );
};

export default Feed;
