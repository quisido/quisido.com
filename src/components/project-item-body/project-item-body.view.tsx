import type { BoxProps } from '@awsui/components-react/box';
import Box from '@awsui/components-react/box';
import ColumnLayout from '@awsui/components-react/column-layout';
import I18n from 'lazy-i18n';
import type { ReactElement } from 'react';
import type ProjectItemImage from '../../types/project-item-image';
import mapComponentToPropMapper from '../../utils/map-component-to-prop-mapper';
import useProjectItemBody from './project-item-body.hook';
import styles from './project-item-body.module.scss';
import ImageLink from './project-item-body.view.image-link';

interface Props {
  date: string;
  images: ProjectItemImage[];
}

const TEXT_LABEL_MARGIN: BoxProps.Spacing = {
  bottom: 'xxxs',
};

const mapImageLinkPropsToElement = mapComponentToPropMapper(ImageLink);

export default function ProjectItemBody({ date, images }: Props): ReactElement {
  const { imageLinkProps, imagesClassName } = useProjectItemBody({ images });

  return (
    <div className={styles.root}>
      <div className={imagesClassName}>
        {imageLinkProps.map(mapImageLinkPropsToElement)}
      </div>
      <ColumnLayout variant="text-grid">
        <div>
          <Box color="text-label" margin={TEXT_LABEL_MARGIN}>
            <I18n>Date</I18n>
          </Box>
          <div>{date}</div>
        </div>
      </ColumnLayout>
    </div>
  );
}
