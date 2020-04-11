import React, {useContext} from "react";
import {CnxContext} from '../App.js'


function Home(props) {

  const { conn, dispatch } = useContext(CnxContext);
  return (
      <div>
          <div className="debugbounding">
              <ul>
                  <li onClick={() => {dispatch("disconnect")}}> <a href="">disconnect</a></li>
              </ul>
          </div>
          <div className="debugbounding">
              <h3>Coming soon ...</h3>
          </div>
      </div>
  );
}

export default Home;
