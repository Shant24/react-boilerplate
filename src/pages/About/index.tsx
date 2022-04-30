import { memo } from 'react';

import { Link } from 'react-router-dom';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const AboutPage = () => (
  <Container>
    <Typography component="h2" variant="h2">
      About
    </Typography>
    <br />
    <Link to="/">
      <Button variant="contained">Go to Home page</Button>
    </Link>
  </Container>
);

export default memo(AboutPage);
