import { ReactNode } from 'react';

export default interface Quote {
  author: string;
  image?: string;
  quote: ReactNode;
}
