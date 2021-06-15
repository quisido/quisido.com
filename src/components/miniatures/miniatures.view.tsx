import Container from '@awsui/components-react/container';
import { ReactElement } from 'react';
import AppLayout from '../../components/app-layout';
import useMiniatures from './miniatures.hook';

export default function Miniatures(): ReactElement {
  const { breadcrumbs } = useMiniatures();

  return (
    <AppLayout breadcrumbs={breadcrumbs} contentType="default" toolsHide>
      <Container>Coming soon.</Container>
    </AppLayout>
  );
}
