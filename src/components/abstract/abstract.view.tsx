import Container from '@awsui/components-react/container';
import { ReactElement } from 'react';
import AppLayout from '../../components/app-layout';
import useAbstract from './abstract.hook';

export default function Abstract(): ReactElement {
  const { breadcrumbs } = useAbstract();

  return (
    <AppLayout breadcrumbs={breadcrumbs} contentType="default" toolsHide>
      <Container>Coming soon.</Container>
    </AppLayout>
  );
}
