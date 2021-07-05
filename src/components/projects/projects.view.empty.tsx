import Box from '@awsui/components-react/box';
import Button from '@awsui/components-react/button';
import SpaceBetween from '@awsui/components-react/space-between';
import I18n from 'lazy-i18n';
import type { ReactElement } from 'react';
import Link from '../../components/link';

export default function ProjectsEmpty(): ReactElement {
  return (
    <SpaceBetween direction="vertical" size="m">
      <Box variant="p">
        <I18n>No projects matched your filter.</I18n>
      </Box>
      <Link to="/projects">
        <Button>
          <I18n>Reset</I18n>
        </Button>
      </Link>
    </SpaceBetween>
  );
}
