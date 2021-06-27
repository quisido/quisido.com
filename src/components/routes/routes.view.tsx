import { ReactElement } from 'react';
import { Route, Switch } from 'react-router-dom';
import Abstract from '../../components/abstract';
import DryMedia from '../../components/dry-media';
import Fabrication from '../../components/fabrication';
import Home from '../../components/home';
import Miniatures from '../../components/miniatures';
import Sculptures from '../../components/sculptures';
import ViewAbstract from '../../components/view-abstract-route';

export default function Routes(): ReactElement {
  return (
    <Switch>
      <Route component={ViewAbstract} path="/abstract/:id" />
      <Route component={Abstract} path="/abstract" />
      <Route component={DryMedia} path="/dry-media/:id" />
      <Route component={DryMedia} path="/dry-media" />
      <Route component={Fabrication} path="/fabrication/:id" />
      <Route component={Fabrication} path="/fabrication" />
      <Route component={Miniatures} path="/miniatures/:id" />
      <Route component={Miniatures} path="/miniatures" />
      <Route component={Sculptures} path="/sculptures/:id" />
      <Route component={Sculptures} path="/sculptures" />
      <Route component={Home} />
    </Switch>
  );
}
