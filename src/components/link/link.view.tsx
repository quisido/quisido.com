import AwsuiLink from '@awsui/components-react/link';
import type { ReactElement, ReactNode } from 'react';
import useLink from './link.hook';

interface Props {
  children: ReactNode;
  className?: string;
  to: string;
}

export default function Link({ children, className, to }: Props): ReactElement {
  const { external, handleFollow } = useLink(to);

  return (
    <AwsuiLink
      className={className}
      external={external}
      href={to}
      onFollow={handleFollow}
    >
      {children}
    </AwsuiLink>
  );
}
