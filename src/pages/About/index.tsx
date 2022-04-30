import { memo } from 'react';

import { Link } from 'react-router-dom';
import { Trans } from '@lingui/macro';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const AboutPage = () => (
  <Container>
    <Typography component="h2" variant="h2">
      <Trans>About us</Trans>
    </Typography>
    <br />
    <Link to="/">
      <Button variant="contained">
        <Trans>Go to Home page</Trans>
      </Button>
    </Link>
  </Container>
);

export default memo(AboutPage);
