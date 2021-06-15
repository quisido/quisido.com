import Container from '@awsui/components-react/container';
import { ReactElement } from 'react';
import AppLayout from '../../components/app-layout';
import useFabrication from './fabrication.hook';

export default function Fabrication(): ReactElement {
  const { breadcrumbs } = useFabrication();

  return (
    <AppLayout breadcrumbs={breadcrumbs} contentType="default" toolsHide>
      <Container>Coming soon.</Container>
    </AppLayout>
  );
}
