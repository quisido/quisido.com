import Box from '@awsui/components-react/box';
import I18n from 'lazy-i18n';
import type { ReactElement } from 'react';
import Link from '../../components/link';
import styles from './footer.module.scss';

export default function Footer(): ReactElement {
  return (
    <Box className={styles.root} color="text-label" textAlign="center">
      <ul className={styles.list}>
        <li>Filipinx</li>
        <li>
          <Link to="mailto:ace@quisido.com">
            <I18n>Email me</I18n>
          </Link>
        </li>
        <li>LGBT+</li>
      </ul>
    </Box>
  );
}
