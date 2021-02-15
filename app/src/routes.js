import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './pages/Login/index.js';
import Signup from './pages/Signup/index';
import Hall from './pages/Hall';
import Kitchen from './pages/Kitchen';

export default function Routes() {
  return (
    <Switch>
      <Route path='/' component={Login} exact />
      <Route path='/cadastro' component={Signup} />
      <Route path='/salao' component={Hall} />
      <Route path='/cozinha' component={Kitchen} />
      <Route component={() => <div>Page 404</div>} />
    </Switch>
  );
}
