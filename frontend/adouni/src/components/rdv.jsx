
import React from "react";
import './style/debug.css';
import Navbar from './globals/navbar.jsx'

function Rdv(props) {
  document.body.classList.remove('background-body');
  return (
    <div>
        <Navbar />
        <div className="debugbounding">
          <h1 > rendez vous ... </h1>
        </div>
    </div>
  );
}

export default Rdv;
