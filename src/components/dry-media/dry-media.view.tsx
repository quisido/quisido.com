import Container from '@awsui/components-react/container';
import { ReactElement } from 'react';
import AppLayout from '../../components/app-layout';
import useDryMedia from './dry-media.hook';

export default function DryMedia(): ReactElement {
  const { breadcrumbs } = useDryMedia();

  return (
    <AppLayout breadcrumbs={breadcrumbs} contentType="default" toolsHide>
      <Container>Coming soon.</Container>
    </AppLayout>
  );
}
