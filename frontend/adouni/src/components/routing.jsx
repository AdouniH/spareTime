import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import AuthPage from './auth_page.jsx';
import './style/debug.css';


const PrivateRoute = ({component: Component, ...rest}) => {
    var token = localStorage.getItem('token');
    return (
        <Route {...rest} render={props => (
              token != null?
              <Component {...props} />
            : <Redirect to="/authentification" />
        )} />
    );
};

export default function Routes() {
  return (
    <Router>
        <div>
            <Switch>
                <Route exact path="/authentification" component={AuthPage}/>
                <PrivateRoute path='/' component={Home} />
            </Switch>
        </div>
    </Router>
  );
}

function Home(props) {
  const disconnect = () => {
      localStorage.removeItem('token');
      props.history.push('/');
  }
  return (
      <div className="debugbounding">
        <h2>Home</h2>
          <button onClick={disconnect}>disconnect</button>
      </div>
  );
}
