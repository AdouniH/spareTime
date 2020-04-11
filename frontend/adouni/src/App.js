import React, {useReducer} from 'react';
import './App.css';
import Routes from './components/routing.jsx'
import {loginReducer} from './reducers.jsx'


export const CnxContext = React.createContext();
const liginItialState = localStorage.getItem('token');


function App() {
  const [conn, dispatch] = useReducer(loginReducer, liginItialState);
  return (
    <div>
        <CnxContext.Provider value={{ conn, dispatch }}>
            <Routes />
        </CnxContext.Provider>
    </div>
  );
}
export default App;
