import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Authentication from './Authentication';

export default function CustomSwitch() {
  return (
    <Switch>
      <Route path="/Authentication">
        <Authentication />
      </Route>
    </Switch>
  );
}
