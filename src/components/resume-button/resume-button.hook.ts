import { TranslateFunction, useTranslate } from 'lazy-i18n';

interface State {
  iconAlt?: string;
}

export default function useResumeButton(): State {
  // Contexts
  const translate: TranslateFunction = useTranslate();

  return {
    iconAlt: translate('external'),
  };
}
