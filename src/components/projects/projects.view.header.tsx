import Header from '@awsui/components-react/header';
import I18n from 'lazy-i18n';
import type { ReactElement } from 'react';

export default function ProjectsHeader(): ReactElement {
  return (
    <Header>
      <I18n>Projects</I18n>
    </Header>
  );
}
