import React, {useReducer} from 'react';
import './App.css';
import Routes from './components/routing.jsx'
import {loginReducer} from './reducers.jsx'
import {
  BrowserRouter as Router,
} from "react-router-dom";
// import "../node_modules/jquery/dist/jquery.min.js";
// import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
// import "../node_modules/bootstrap/js/src/collapse.js";

export const CnxContext = React.createContext();
const liginItialState = localStorage.getItem('token');


function App() {

  const [conn, dispatch] = useReducer(loginReducer, liginItialState);

  return (
    <div>
        <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"></link>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.0/jquery.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"></script>
        <Router>
            <CnxContext.Provider value={{ conn, dispatch }}>
                <Routes />
            </CnxContext.Provider>
        </Router>
    </div>
  );
}
export default App;
