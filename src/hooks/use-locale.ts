import { Dispatch, SetStateAction, useContext } from 'react';
import Locale from '../constants/locale';
import LocaleContext from '../contexts/locale';

type State = [Locale, Dispatch<SetStateAction<Locale>>];

export default function useLocale(): State {
  const state: State | null = useContext(LocaleContext);

  if (state === null) {
    throw new Error('The Locale context is not mounted.');
  }

  return state;
}
