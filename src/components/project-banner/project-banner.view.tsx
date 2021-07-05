import Box from '@awsui/components-react/box';
import type { ReactElement } from 'react';
import ProjectType from '../../constants/project-type';
import useProjectBanner from './project-banner.hook';
import styles from './project-banner.module.scss';

interface Props {
  children: ProjectType;
}

export default function ProjectBanner({
  children,
}: Props): ReactElement | null {
  const { style, text } = useProjectBanner(children);

  return (
    <div className={styles.root} style={style}>
      <Box fontSize="heading-xl" fontWeight="bold" textAlign="center">
        {text}
      </Box>
    </div>
  );
}
