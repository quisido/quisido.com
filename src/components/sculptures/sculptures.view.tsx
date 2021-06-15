import Container from '@awsui/components-react/container';
import { ReactElement } from 'react';
import AppLayout from '../../components/app-layout';
import useSculptures from './sculptures.hook';

export default function Sculptures(): ReactElement {
  const { breadcrumbs } = useSculptures();

  return (
    <AppLayout breadcrumbs={breadcrumbs} contentType="default" toolsHide>
      <Container>Coming soon.</Container>
    </AppLayout>
  );
}
