import { Navigate, Route, Routes } from 'react-router-dom';

import { BaseLayout } from '@layouts';
import { AboutPage, HomePage } from '@pages';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<BaseLayout />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
      </Route>
      <Route path="*" element={<Navigate to="/" replace={true} />} />
    </Routes>
  );
};

export default App;
