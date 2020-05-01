import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Repository from '../pages/Repository';
import Dashboard from '../pages/Dashboard';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Dashboard} />
    {/* Tudo que vier depois de :repository+ é parametro */}
    <Route path="/repositories/:repository+" component={Repository} />
  </Switch>
);

export default Routes;
