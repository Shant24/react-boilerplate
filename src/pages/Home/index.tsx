import { memo } from 'react';

import { Link } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';

const HomePage = () => (
  <Container>
    <Typography component="h2" variant="h2">
      Home
    </Typography>
    <br />
    <Link to="/about">
      <Button variant="contained">Go to About page</Button>
    </Link>
  </Container>
);

export default memo(HomePage);
