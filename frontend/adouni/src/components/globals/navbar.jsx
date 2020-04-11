import React, {useContext} from "react";
import {CnxContext} from '../../App.js'


function NavBar(props) {
  const { conn, dispatch } = useContext(CnxContext);
  return (
      <div>
          <div className="debugbounding">
              <ul>
                  <li onClick={() => {dispatch({type: "disconnect"})}}> <a href="">disconnect</a></li>
              </ul>
          </div>
      </div>
  );
}

export default NavBar;
