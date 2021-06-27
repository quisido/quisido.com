import Container from '@awsui/components-react/container';
import Header from '@awsui/components-react/header';
import SpaceBetween from '@awsui/components-react/space-between';
import I18n from 'lazy-i18n';
import type { Attributes, ReactElement } from 'react';
import AppLayout from '../../components/app-layout';
import type { CollectionLinkProps } from '../../components/collection-link';
import CollectionLink from '../../components/collection-link';
import useAbstract from './abstract.hook';

export default function Abstract(): ReactElement {
  const { breadcrumbs, collectionLinkProps } = useAbstract();

  const mapCollectionLinkPropsToElement = (
    props: Attributes & CollectionLinkProps,
  ): ReactElement => {
    return <CollectionLink {...props} />;
  };

  return (
    <AppLayout breadcrumbs={breadcrumbs} contentType="default" toolsHide>
      <Container
        header={
          <Header>
            <I18n>Abstractions</I18n>
          </Header>
        }
      >
        <SpaceBetween direction="vertical" size="m">
          {collectionLinkProps.map(mapCollectionLinkPropsToElement)}
        </SpaceBetween>
      </Container>
    </AppLayout>
  );
}
