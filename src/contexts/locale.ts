import { Dispatch, SetStateAction, createContext } from 'react';
import Locale from '../constants/locale';

type State = [Locale, Dispatch<SetStateAction<Locale>>];

export default createContext<State | null>(null);
