import { ReactElement } from 'react';
import { Route, Switch } from 'react-router-dom';
import Abstract from '../../components/abstract';
import DryMedia from '../../components/dry-media';
import Fabrication from '../../components/fabrication';
import Home from '../../components/home';
import Miniatures from '../../components/miniatures';
import Sculptures from '../../components/sculptures';

export default function Routes(): ReactElement {
  return (
    <Switch>
      <Route component={Abstract} path="/abstract" />
      <Route component={DryMedia} path="/dry-media" />
      <Route component={Fabrication} path="/fabrication" />
      <Route component={Miniatures} path="/miniatures" />
      <Route component={Sculptures} path="/sculptures" />
      <Route component={Home} />
    </Switch>
  );
}
