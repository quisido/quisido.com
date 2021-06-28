import type { ReactElement } from 'react';
import { Redirect } from 'react-router';
import ViewProjectItem from '../../components/view-project-item';
import type { FoundState, NotFoundState } from './view-project-item-route.hook';
import useViewProjectItemRoute from './view-project-item-route.hook';

const isNotFoundState = (
  state: FoundState | NotFoundState,
): state is NotFoundState => state.to !== null;

export default function ViewProjectItemRoute(): ReactElement {
  const state: FoundState | NotFoundState = useViewProjectItemRoute();

  if (isNotFoundState(state)) {
    return <Redirect to={state.to} />;
  }

  return (
    <ViewProjectItem itemIndex={state.itemIndex} projectId={state.projectId} />
  );
}
