import '@awsui/global-styles/index.css';
import AwsuiTheme from 'awsui-theme';
import { I18nProvider } from 'lazy-i18n';
import { ReactElement, StrictMode } from 'react';
import { Router } from 'react-router';
import Routes from '../../components/routes';
import HISTORY from '../../constants/history';
import Locale from '../../constants/locale';
import THEME from '../../constants/theme';
import TRANSLATIONS from '../../constants/translations';
import LocaleContext from '../../contexts/locale';
import useApp from './app.hook';
import './app.module.scss';

const CURRENT_YEAR: number = new Date().getFullYear();
const AGE: number = CURRENT_YEAR - 1994;

export default function App(): ReactElement {
  const { locale, localeContextValue } = useApp();

  return (
    <StrictMode>
      <AwsuiTheme {...THEME}>
        <Router history={HISTORY}>
          <I18nProvider
            fallbackLocale={Locale.EnUs}
            locale={locale}
            translations={TRANSLATIONS}
          >
            <LocaleContext.Provider value={localeContextValue}>
              <div data-ssml-voice-age={AGE}>
                <Routes />
              </div>
            </LocaleContext.Provider>
          </I18nProvider>
        </Router>
      </AwsuiTheme>
    </StrictMode>
  );
}
