import React, {useContext} from "react";
import {CnxContext} from '../../App.js'
import {Link} from "react-router-dom";


function NavBar(props) {
  const { conn, dispatch } = useContext(CnxContext);
  return (
      <div>
          <div className="debugbounding">
              <ul>
                  <li onClick={() => {dispatch({type: "disconnect"})}}>
                      <Link to="/">disconnect</Link>
                  </li>
                  <li>
                    <Link to="/rendezvous">Rdv</Link>
                  </li>
                  <li>
                    <Link to="/mail">mail</Link>
                  </li>
              </ul>

          </div>
      </div>
  );
}

export default NavBar;
