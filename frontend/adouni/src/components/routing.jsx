import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import AuthPage from './auth_page.jsx';
import Email from './email.jsx'
import {PrivateRoute} from '../utils.jsx'


export default function Routes(props) {
  return (
    <Router>
        <Switch>
            <Route exact path="/authentification" component={AuthPage}/>
            <PrivateRoute path='/' component={Email} />
        </Switch>
    </Router>
  );
}
