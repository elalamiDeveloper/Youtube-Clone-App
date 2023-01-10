import { Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';

import {
  Navbar,
  Feed,
  VideoDetail,
  ChannelDetail,
  SearchFeed,
} from './components/componentsLinks';

const App = () => (
  <Box sx={{ background: '#000' }}>
    <Navbar />
    <Routes>
      <Route path="/" element={<Feed />} />
      <Route path="/video/:id" element={<VideoDetail />} />
      <Route path="/channel/:id" element={<ChannelDetail />} />
      <Route path="/video/:searchTerm" element={<SearchFeed />} />
    </Routes>
  </Box>
);

export default App;
