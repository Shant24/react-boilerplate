import { Route, Routes } from 'react-router-dom';

const App = () => (
  <Routes>
    <Route
      path="*"
      element={
        <div>
          <h1>React Boilerplate</h1>
        </div>
      }
    />
  </Routes>
);

export default App;
