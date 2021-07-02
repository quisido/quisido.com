import type { ReactElement } from 'react';
import { Redirect } from 'react-router';
import ViewProjectItem from '../../components/view-project-item';
import useViewProjectRoute from './view-project-route.hook';

export default function ViewProjectRoute(): ReactElement {
  const { projectId, to } = useViewProjectRoute();

  if (to !== null) {
    return <Redirect to={to} />;
  }

  return <ViewProjectItem itemIndex={0} projectId={projectId} />;
}
