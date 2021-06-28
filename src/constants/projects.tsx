import type { BoxProps } from '@awsui/components-react/box';
import Box from '@awsui/components-react/box';
import ColumnLayout from '@awsui/components-react/column-layout';
import type { ReactElement } from 'react';
import type { TranslateFunction } from 'lazy-i18n';
import I18n, { useTranslate } from 'lazy-i18n';
import ItemId from '../constants/item-id';
import ProjectId from '../constants/project-id';
import ProjectType from '../constants/project-type';
import elevation from '../images/study-of-night-zag-wall/elevation.jpg';
import elevation24 from '../images/study-of-night-zag-wall/elevation--24.jpg';
import elevation240 from '../images/study-of-night-zag-wall/elevation--240.jpg';
import pieces from '../images/study-of-night-zag-wall/pieces--240.jpg';
import pieces24 from '../images/study-of-night-zag-wall/pieces--24.jpg';
import pieces240 from '../images/study-of-night-zag-wall/pieces--240.jpg';
import portions from '../images/study-of-night-zag-wall/portions.jpg';
import portions24 from '../images/study-of-night-zag-wall/portions--24.jpg';
import portions240 from '../images/study-of-night-zag-wall/portions--240.jpg';
import type Project from '../types/project';
import styles from './projects.module.scss';

const TEXT_LABEL_MARGIN: BoxProps.Spacing = {
  bottom: 'xxxs',
};

const PROJECTS: Record<ProjectId, Project> = {
  [ProjectId.StudyOfNightZagWall]: {
    type: ProjectType.Abstract,
    items: [
      {
        icon: pieces24,
        id: ItemId.Pieces,
        body: function Pieces(): ReactElement {
          const translate: TranslateFunction = useTranslate();
          const alt: string | undefined = translate('Pieces');

          return (
            <div className={styles.body}>
              <a href={pieces} rel="noreferrer" target="_blank">
                <img
                  alt={alt}
                  className={styles.image}
                  height={240}
                  src={pieces240}
                  width={240}
                />
              </a>
              <ColumnLayout variant="text-grid">
                <div>
                  <Box color="text-label" margin={TEXT_LABEL_MARGIN}>
                    <I18n>Date</I18n>
                  </Box>
                  <div>2016-09-24</div>
                </div>
              </ColumnLayout>
            </div>
          );
        },
      },
      {
        icon: elevation24,
        id: ItemId.Elevation,
        body: function Elevation(): ReactElement {
          const translate: TranslateFunction = useTranslate();
          const alt: string | undefined = translate('Elevation');

          return (
            <div className={styles.body}>
              <a href={elevation} rel="noreferrer" target="_blank">
                <img
                  alt={alt}
                  className={styles.image}
                  height={144}
                  src={elevation240}
                  width={240}
                />
              </a>
              <ColumnLayout variant="text-grid">
                <div>
                  <Box color="text-label" margin={TEXT_LABEL_MARGIN}>
                    <I18n>Date</I18n>
                  </Box>
                  <div>2016-10-11</div>
                </div>
              </ColumnLayout>
            </div>
          );
        },
      },
      {
        icon: portions24,
        id: ItemId.Portions,
        body: function Portions(): ReactElement {
          const translate: TranslateFunction = useTranslate();
          const alt: string | undefined = translate('Portions');

          return (
            <div className={styles.body}>
              <a href={portions} rel="noreferrer" target="_blank">
                <img
                  alt={alt}
                  className={styles.image}
                  height={240}
                  src={portions240}
                  width={240}
                />
              </a>
              <ColumnLayout variant="text-grid">
                <div>
                  <Box color="text-label" margin={TEXT_LABEL_MARGIN}>
                    <I18n>Date</I18n>
                  </Box>
                  <div>2016-12-14</div>
                </div>
              </ColumnLayout>
            </div>
          );
        },
      },
    ],
  },
};

export default PROJECTS;
