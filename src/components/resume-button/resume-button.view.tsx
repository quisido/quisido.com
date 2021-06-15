import Button from '@awsui/components-react/button';
import I18n from 'lazy-i18n';
import { ReactElement } from 'react';
// import useViewResumeButton from './view-resume-button.hook';

const RESUME_HREF = '/resume/2019-05/ace-quisido-resume.pdf';

export default function ResumeButton(): ReactElement {
  // const { iconAlt } = useViewResumeButton();

  return (
    <Button
      href={RESUME_HREF}
      // iconAlign="right"
      // iconAlt={iconAlt}
      // iconName="external"
      target="_blank"
      variant="link"
      wrapText={false}
    >
      <I18n>R&eacute;sum&eacute;</I18n>
    </Button>
  );
}
