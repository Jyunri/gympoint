import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import SignIn from '~/pages/SignIn';
import Students from '~/pages/Students';
import Plans from '~/pages/Plans';
import Enrollments from '~/pages/Enrollments';
import Tickets from '~/pages/Tickets';
import RegisterStudent from '~/pages/RegisterStudent';
import EditStudent from '~/pages/EditStudent';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/students" component={Students} isPrivate />
      <Route path="/register" component={RegisterStudent} isPrivate />
      <Route path="/edit" component={EditStudent} isPrivate />
      <Route path="/plans" component={Plans} isPrivate />
      <Route path="/enrollments" component={Enrollments} isPrivate />
      <Route path="/tickets" component={Tickets} isPrivate />
    </Switch>
  );
}
