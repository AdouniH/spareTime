import React from 'react';
// import logo from './logo.jpg';
import './App.css';
import AuthPage from './components/auth_page.jsx'
import Routes from './components/routing.jsx'


function App() {
  document.title = "Houssem ADOUNI"
  return (
    <div>
        <Routes />
    </div>
  );
}

export default App;
