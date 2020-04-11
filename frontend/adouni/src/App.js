import React, {useReducer} from 'react';
import './App.css';
import Routes from './components/routing.jsx'


export const CnxContext = React.createContext();


const initialState = localStorage.getItem('token');
const reducer = (state, action) => {
    switch (action) {
        case 'connect': return true;
        case 'disconnect':
            localStorage.removeItem('token');
            return false;
        default: throw new Error('Unexpected action');
  }
};


function App() {
  const [conn, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
        <CnxContext.Provider value={{ conn, dispatch }}>
            <Routes />
        </CnxContext.Provider>
    </div>
  );
}
export default App;
