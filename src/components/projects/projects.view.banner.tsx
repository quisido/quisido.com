import type { ReactElement } from 'react';
import Link from '../../components/link';
import ProjectId from '../../constants/project-id';
import useMapProjectIdToTitle from '../../hooks/use-map-project-id-to-title';
import styles from './projects.view.banner.module.scss';

interface Props {
  id: ProjectId;
  pathname: string;
  src: string;
}

export default function ProjectsBanner({
  id,
  pathname,
  src,
}: Props): ReactElement {
  const mapProjectIdToTitle = useMapProjectIdToTitle();

  return (
    <Link className={styles.root} to={pathname}>
      <img
        alt={mapProjectIdToTitle(id)}
        className={styles.image}
        height={180}
        src={src}
      />
    </Link>
  );
}
