import type { ReactElement } from 'react';
import Link from '../../components/link';
import ProjectId from '../../constants/project-id';
import useMapProjectIdToTitle from '../../hooks/use-map-project-id-to-title';

interface Props {
  id: ProjectId;
  pathname: string;
}

export default function ProjectsTitle({ id, pathname }: Props): ReactElement {
  const mapProjectIdToTitle = useMapProjectIdToTitle();

  return <Link to={pathname}>{mapProjectIdToTitle(id)}</Link>;
}
