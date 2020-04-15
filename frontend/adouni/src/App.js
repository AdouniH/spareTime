import React, {useReducer} from 'react';
import './App.css';
import Routes from './components/routing.jsx'
import {loginReducer} from './reducers.jsx'
import {
  BrowserRouter as Router,
} from "react-router-dom";

export const CnxContext = React.createContext();
const liginItialState = localStorage.getItem('token');


function App() {

  const [conn, dispatch] = useReducer(loginReducer, liginItialState);

  return (
    <div>

        <Router>
            <CnxContext.Provider value={{ conn, dispatch }}>
                <Routes />
            </CnxContext.Provider>
        </Router>
    </div>
  );
}
export default App;
