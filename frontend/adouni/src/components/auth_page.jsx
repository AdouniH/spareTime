import React,  {useState, useContext} from 'react';
import './style/debug.css';
import './style/auth_page.css';
import axios from 'axios';
import {CnxContext} from '../App.js';
import {server_ip} from '../utils.jsx'
import cover from './cover.jpg'


function ErrorMsg(){
    return(
      <div>
          <label class="red_color">Code incorrecte !&nbsp;</label>
      </div>
  )
}


function AuthPage(props) {
  document.body.classList.add('background-body');


  const {conn, dispatch } = useContext(CnxContext);

  const [code, setCode] = useState("");
  const [error, setError] = useState(false);

  var errortext;
  if(error){
      errortext = <ErrorMsg/>
  }

  function submition(event){
      event.preventDefault();
      axios.post(server_ip+'/user/ptoken/', {code: code})
          .then(res => {
            if (res.data.token){
              dispatch({type: "connect", key: res.data.token});
              props.history.push("/");
            }
        })
          .catch( error => {
                setError(true);
            })
      }

  return (
    <div >


            <div class="spacer d-none d-sm-block"></div>
            <div class="spacersm .d-block .d-sm-none"></div>
            <div class="test centrize">
                <div class="labelinput"><span>Veuillez entrer votre code</span></div>
                <div class="next">
                    <form onSubmit={submition}>

                        <div class="in">
                            <input class="all" onChange={(event) => {setCode(event.target.value)}}></input>
                        </div>
                        <div class="bottom"><button class="bouton-css" type="submit">Login</button></div>
                    </form>
                    <div class="errormsg">{errortext}</div>
                </div>
            </div>
    </div>
  );
}

export default AuthPage;
