import type { ReactElement } from 'react';
import { Redirect } from 'react-router';
import ViewAbstract from '../../components/view-abstract';
import type { FoundState, NotFoundState } from './view-abstract-route.hook';
import useViewAbstractRoute from './view-abstract-route.hook';

export default function ViewAbstractRoute(): ReactElement {
  const state: FoundState | NotFoundState = useViewAbstractRoute();

  if (!state.found) {
    return <Redirect to="/abstract" />;
  }

  return <ViewAbstract {...state.abstraction} />;
}
