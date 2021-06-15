import '@awsui/global-styles/index.css';
import AwsuiTheme from 'awsui-theme';
import { I18nProvider } from 'lazy-i18n';
import { ReactElement, StrictMode } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from '../../components/routes';
import Locale from '../../constants/locale';
import THEME from '../../constants/theme';
import TRANSLATIONS from '../../constants/translations';
import LocaleContext from '../../contexts/locale';
import useApp from './app.hook';
import './app.module.scss';

export default function App(): ReactElement {
  const { locale, localeContextValue } = useApp();

  return (
    <StrictMode>
      <AwsuiTheme {...THEME}>
        <BrowserRouter>
          <I18nProvider
            fallbackLocale={Locale.EnUs}
            locale={locale}
            translations={TRANSLATIONS}
          >
            <LocaleContext.Provider value={localeContextValue}>
              <Routes />
            </LocaleContext.Provider>
          </I18nProvider>
        </BrowserRouter>
      </AwsuiTheme>
    </StrictMode>
  );
}
