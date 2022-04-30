import { Navigate, Route, Routes } from 'react-router-dom';
import { I18nProvider } from '@lingui/react';

import { useMount } from '@hooks';
import { dynamicActivateLocale, getLocale, i18n } from '@configs/i18n';
import { BaseLayout } from '@layouts';
import { AboutPage, HomePage } from '@pages';

const App = () => {
  useMount(() => {
    dynamicActivateLocale(getLocale());
  });

  return (
    <I18nProvider i18n={i18n}>
      <Routes>
        <Route path="/" element={<BaseLayout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
        </Route>
        <Route path="*" element={<Navigate to="/" replace={true} />} />
      </Routes>
    </I18nProvider>
  );
};

export default App;
