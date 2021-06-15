import Box from '@awsui/components-react/box';
import { ReactElement } from 'react';
import adobeIllustrator from '../../images/adobe-illustrator.png';
import adobePhotoshop from '../../images/adobe-photoshop.png';
import autodeskAutocad from '../../images/autodesk-autocad.png';
import autodeskRevit from '../../images/autodesk-revit.png';
import rhinoceros from '../../images/rhinoceros.png';
import styles from './skills.module.scss';

interface Icon {
  alt: string;
  height: number;
  src: string;
  width: number;
}

const HEIGHT = 52;

const ICONS: readonly Icon[] = [
  {
    alt: 'Adobe Illustrator CC',
    height: 128,
    src: adobeIllustrator,
    width: 131,
  },
  {
    alt: 'Adobe Photoshop CC',
    height: 128,
    src: adobePhotoshop,
    width: 128,
  },
  {
    alt: 'Autodesk Autocad',
    height: 128,
    src: autodeskAutocad,
    width: 117,
  },
  {
    alt: 'Autodesk Revit',
    height: 128,
    src: autodeskRevit,
    width: 105,
  },
  {
    alt: 'Rhinoceros 5',
    height: 128,
    src: rhinoceros,
    width: 132,
  },
];

const mapIconToImage = ({
  alt,
  height: originalHeight,
  src,
  width: originalWidth,
}: Icon): ReactElement => {
  const aspectRatio: number = originalWidth / originalHeight;
  const actualWidth: number = aspectRatio * HEIGHT;
  return (
    <img
      alt={alt}
      height={HEIGHT}
      key={alt}
      src={src}
      width={actualWidth}
      title={alt}
    />
  );
};

export default function Skills(): ReactElement {
  return (
    <Box className={styles.root} textAlign="center">
      {ICONS.map(mapIconToImage)}
    </Box>
  );
}
