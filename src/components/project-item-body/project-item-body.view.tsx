import type { BoxProps } from '@awsui/components-react/box';
import Box from '@awsui/components-react/box';
import ColumnLayout from '@awsui/components-react/column-layout';
import I18n, { TranslateFunction, useTranslate } from 'lazy-i18n';
import type { ReactElement } from 'react';
import ProjectItemImage from '../../types/project-item-image';
import styles from './project-item-body.module.scss';

interface Props {
  date: string;
  images: ProjectItemImage[];
}

const TEXT_LABEL_MARGIN: BoxProps.Spacing = {
  bottom: 'xxxs',
};

export default function ProjectItemBody({ date, images }: Props): ReactElement {
  const translate: TranslateFunction = useTranslate();

  return (
    <div className={styles.body}>
      <div className={styles.images}>
        {images.map(
          (image: ProjectItemImage, index: number): ReactElement => (
            <a
              href={image.src}
              key={image.src}
              rel="noreferrer"
              target="_blank"
            >
              <img
                alt={translate('Image $n', { n: index + 1 })}
                className={styles.image}
                height={image.height}
                src={image.thumbnail}
                width={image.width}
              />
            </a>
          ),
        )}
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
