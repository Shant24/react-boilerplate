import { Route, Routes } from 'react-router-dom';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const App = () => (
  <Routes>
    <Route
      path="*"
      element={
        <div>
          <Typography component="h1" variant="h1">
            React Boilerplate
          </Typography>
          <Button variant="contained">Button</Button>
        </div>
      }
    />
  </Routes>
);

export default App;
