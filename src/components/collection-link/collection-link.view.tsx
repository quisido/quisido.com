import SpaceBetween from '@awsui/components-react/space-between';
import type { ReactElement, ReactNode } from 'react';
import Link from '../../components/link';

export interface Props {
  children: ReactNode;
  icon: string;
  to: string;
}

export default function CollectionLink({
  children,
  icon,
  to,
}: Props): ReactElement {
  return (
    <Link to={to}>
      <SpaceBetween direction="horizontal" size="m">
        <img alt="" aria-hidden height={24} src={icon} width={24} />
        <span>{children}</span>
      </SpaceBetween>
    </Link>
  );
}
