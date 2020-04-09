import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import AuthPage from './auth_page.jsx'
import {fakeAuth, a} from './functions/login.jsx'
import './style/debug.css';


const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
      a() === true
      ? <Component {...props} />
      : <Redirect to='/authentification' />
  )} />
)

export default function Routes() {
  return (
    <Router>
        <div>
            <Switch>
                <Route exact path="/authentification">
                    <AuthPage />
                </Route>
                <PrivateRoute path='/' component={Home} />
            </Switch>
        </div>
    </Router>
  );
}

function Home() {
  return (
    <div className="debugbounding">
      <h2>Home</h2>
    </div>
  );
}
