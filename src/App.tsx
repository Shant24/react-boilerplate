import { Navigate, Route, Routes } from 'react-router-dom';
import { I18nProvider } from '@lingui/react';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import { useMount } from '@hooks';
import { dynamicActivateLocale, getLocale, i18n } from '@configs/i18n';
import { BaseLayout } from '@layouts';
import { AboutPage, HomePage } from '@pages';
import { ToastService } from '@services';

const App = () => {
  useMount(() => {
    dynamicActivateLocale(getLocale());

    ToastService.infoToast('Welcome to my Boilerplate!', { position: 'bottom-left', autoClose: false });
  });

  return (
    <I18nProvider i18n={i18n}>
      <ToastContainer />
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
