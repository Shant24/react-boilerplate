import { memo } from 'react';

import { Outlet } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

import Header from '@shared/Header';

const BaseLayout = () => (
  <Stack direction="column">
    <Header />
    <Stack component="main">
      <Container>
        <Typography component="h1" variant="h1">
          React Boilerplate
        </Typography>
      </Container>
      <Outlet />
    </Stack>
    <footer></footer>
  </Stack>
);

export default memo(BaseLayout);
