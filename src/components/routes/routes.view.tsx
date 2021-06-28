import { ReactElement } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../../components/home';
import Projects from '../../components/projects';
import ViewProjectRoute from '../../components/view-project-route';
import ViewProjectItemRoute from '../../components/view-project-item-route';

export default function Routes(): ReactElement {
  return (
    <Switch>
      <Route component={ViewProjectItemRoute} path="/projects/:project/:item" />
      <Route component={ViewProjectRoute} path="/projects/:id" />
      <Route component={Projects} path="/projects" />
      <Route component={Home} />
    </Switch>
  );
}
