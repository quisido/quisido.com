import AwsuiLink from '@awsui/components-react/link';
import { ReactElement, ReactNode } from 'react';
import useLink from './link.hook';

export interface Props {
  children: ReactNode;
  to: string;
}

export default function Link({ children, to }: Props): ReactElement {
  const { external, handleFollow } = useLink(to);

  return (
    <AwsuiLink external={external} href={to} onFollow={handleFollow}>
      {children}
    </AwsuiLink>
  );
}
