import React from "react";
import './style/home.css'
import './style/debug.css'
import my from "../static/my.jpg"
import NavBar from './globals/navbar.jsx'


function Head(props) {
  // document.body.classList.remove('background-body');
  return (
        <div>
            <div class="h_backm"><NavBar/></div>
            <div class="row">
                <div class="col-sm-3 h_back">
                    <div class="center">
                        <img class='pimg' src={my}></img>
                    </div>
                </div>
                <div class="col-sm-9 h_back">
                    <h2 class="mtop">Houssem ADOUNI</h2>
                    <h4 class="pcenter">Développeur système d'information géographique</h4>
                    <h4 class="pcenter">Passionné par l'architecture SIG</h4>
                </div>
            </div>
        </div>
  );
}

function Home(props) {
  // document.body.classList.remove('background-body');
  return (
        <div>
            <Head/>
            <br/>
            ...
        </div>
  );
}

export default Home;
