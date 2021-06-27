import Button from '@awsui/components-react/button';
import I18n from 'lazy-i18n';
import { ReactElement } from 'react';
import RESUME_HREF from '../../constants/resume-href';

export default function ResumeButton(): ReactElement {
  return (
    <Button href={RESUME_HREF} target="_blank" variant="link" wrapText={false}>
      <I18n>R&eacute;sum&eacute;</I18n>
    </Button>
  );
}
