import type { TranslateFunction } from 'lazy-i18n';
import { useTranslate } from 'lazy-i18n';
import type { Attributes } from 'react';
import { useMemo } from 'react';
import type ProjectItemImage from '../../types/project-item-image';
import type { Props as ImageLinkProps } from './project-item-body.view.image-link';
import styles from './project-item-body.module.scss';

interface Dimensions {
  height: number;
  width: number;
}

interface Props {
  images: ProjectItemImage[];
}

interface State {
  imageLinkProps: (Attributes & ImageLinkProps)[];
  imagesClassName: string;
}

export default function useProjectItemBody({ images }: Props): State {
  const firstImage: ProjectItemImage = images[0];
  const imagesCount: number = images.length;

  // Contexts
  const translate: TranslateFunction = useTranslate();

  return {
    imageLinkProps: useMemo((): (Attributes & ImageLinkProps)[] => {
      const mapImageToDimensions = ({
        height,
        width,
      }: ProjectItemImage): Dimensions => {
        const ratio: number = width / height;

        if (imagesCount === 1) {
          return {
            height: Math.round(240 / ratio),
            width: 240,
          };
        }

        return {
          height: 240,
          width: Math.round(ratio * 240),
        };
      };

      const mapImagesToImageLinkProps = (
        image: ProjectItemImage,
        index: number,
      ): Attributes & ImageLinkProps => {
        return {
          ...mapImageToDimensions(image),
          alt: translate('Image $n', { n: index + 1 }),
          className: styles.imageLink,
          imageClassName: styles.image,
          key: image.src,
          src: image.src,
          thumbnail: image.thumbnail,
        };
      };

      return images.map(mapImagesToImageLinkProps);
    }, [images, imagesCount, translate]),

    imagesClassName: useMemo((): string => {
      const newClassNames: string[] = [styles.images];
      if (imagesCount === 1 && firstImage.height >= firstImage.width) {
        newClassNames.push(styles.verticalImages);
      } else {
        newClassNames.push(styles.horizontalImages);
      }
      return newClassNames.join(' ');
    }, [firstImage, imagesCount]),
  };
}
