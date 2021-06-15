import { Dispatch, SetStateAction, useState } from 'react';
import Locale from '../../constants/locale';

interface State {
  locale: Locale;
  localeContextValue: [Locale, Dispatch<SetStateAction<Locale>>];
}

export default function useApp(this: void): State {
  // States
  const [locale, handleLocaleChange] = useState(Locale.EnUs);

  return {
    locale,
    localeContextValue: [locale, handleLocaleChange],
  };
}
