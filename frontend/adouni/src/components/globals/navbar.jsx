import React, {useContext, useState} from "react";
import {CnxContext} from '../../App.js'
import {Link} from "react-router-dom";
import './navbar.css';


function NavBar(props) {
  const { conn, dispatch } = useContext(CnxContext);
  const [tog, setTog] = useState('collapse');
  const managetog = () => {if (tog != "collapse"){setTog("collapse")} else {setTog("")}}


  return (
      <div class="ok">
        <nav class="navbar navbar-expand-md navbar-dark">
          <Link class="navbar-brand" to="/"></Link>
          <button  onClick={managetog} class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
              <span class="navbar-toggler-icon"></span>
          </button>
          <div class={tog + " navbar-collapse test"} id="collapsibleNavbar">
              <div>
                    <ul class="navblock navbar-nav">
                          <li class="left nav-item" onClick={() => {dispatch({type: "disconnect"})}}>
                              <Link class="nav-link" to="/">Déconnexion</Link>
                          </li>
                    </ul>
              </div>
          </div>
        </nav>
      </div>
  );
}

export default NavBar;
