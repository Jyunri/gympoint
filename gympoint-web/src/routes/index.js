import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import SignIn from '~/pages/SignIn';
import Students from '~/pages/Students';
import Plans from '~/pages/Plans';
import Enrollments from '~/pages/Enrollments';
import Tickets from '~/pages/Tickets';
import RegisterStudent from '~/pages/RegisterStudent';
import RegisterPlan from '~/pages/RegisterPlan';
import EditStudent from '~/pages/EditStudent';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />

      <Route path="/students" exact component={Students} isPrivate />
      <Route
        path="/students/register"
        exact
        component={RegisterStudent}
        isPrivate
      />
      <Route path="/students/:id/edit" component={EditStudent} isPrivate />

      <Route path="/plans" exact component={Plans} isPrivate />
      <Route path="/plans/register" exact component={RegisterPlan} isPrivate />

      <Route path="/enrollments" component={Enrollments} isPrivate />
      <Route path="/tickets" component={Tickets} isPrivate />
    </Switch>
  );
}
