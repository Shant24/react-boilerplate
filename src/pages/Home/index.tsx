import { memo } from 'react';

import { Link } from 'react-router-dom';
import { Trans } from '@lingui/macro';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';

const HomePage = () => (
  <Container>
    <Typography component="h2" variant="h2">
      <Trans>Home</Trans>
    </Typography>
    <br />
    <Link to="/about">
      <Button variant="contained">
        <Trans>Go to About us page</Trans>
      </Button>
    </Link>
  </Container>
);

export default memo(HomePage);
