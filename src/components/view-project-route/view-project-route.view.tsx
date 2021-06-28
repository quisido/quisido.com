import type { ReactElement } from 'react';
import { Redirect } from 'react-router';
import useViewProjectRoute from './view-project-route.hook';

export default function ViewProjectRoute(): ReactElement {
  const to: string = useViewProjectRoute();

  return <Redirect to={to} />;
}
