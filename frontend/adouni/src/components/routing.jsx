import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import AuthPage from './auth_page.jsx';
import Email from './email.jsx'
import Rdv from './rdv.jsx'
import {PrivateRoute} from '../utils.jsx'


export default function Routes(props) {
  // document.body.classList.remove('background-body');
  return (
        <Switch>
            <Route exact path="/authentification" component={AuthPage}/>
            <PrivateRoute exact path='/mail' component={Email} />
            <PrivateRoute exact path='/rendezvous' component={Rdv} />
            <PrivateRoute exact path="/"><Redirect to="/mail" /></PrivateRoute>
        </Switch>
  );
}
