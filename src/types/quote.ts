import { ReactNode } from 'react';

export default interface Quote {
  age?: number;
  author: string;
  gender?: 'female' | 'male' | 'neutral';
  image?: string;
  quote: ReactNode;
}
