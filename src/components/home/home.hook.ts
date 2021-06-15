import { TranslateFunction, useTranslate } from 'lazy-i18n';

interface State {
  avatarAlt?: string;
}

export default function useHome(): State {
  // Contexts
  const translate: TranslateFunction = useTranslate();

  return {
    avatarAlt: translate('Avatar'),
  };
}
