import React,  {useState, useContext} from 'react';
import './style/debug.css';
import axios from 'axios';
import {CnxContext} from '../App.js';
import {server_ip} from '../utils.jsx'
import cover from './cover.jpg'
import {Link} from "react-router-dom";
import './style/auth_page.css';


function ErrorMsg(){
    return(
      <div>
          <label class="red_color">Code incorrect !&nbsp;</label>
      </div>
  )
}


function AuthPage(props) {
  document.body.classList.remove('background-body-email');
  document.body.classList.add('background-body');
  const {conn, dispatch } = useContext(CnxContext);
  const [code, setCode] = useState("");
  const [error, setError] = useState(false);
  const [checked, setChecked] = useState(false);
  const [label, setLabel] = useState("Veuillez entrer votre code");
  const [buttontext, setButtontext] = useState("Télécharger le fichier");

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

  function download(event){
      event.preventDefault();
      axios.get(server_ip+'/cloud/check/'+code)
          .then(res => {window.location.href= server_ip + '/cloud/' + code; setCode('')})
          .catch(error => {setError(true);})
      }

  function run(event){
    if(checked){submition(event)}
    else{download(event)}
  }

  function checkboxChanged(event){
      var thecheck = event.target.checked;
      if(thecheck===true){
        setChecked(thecheck)
        setLabel("Veuillez entrer votre code utilisateur");
        setButtontext("Login")
      }
      else if (thecheck===false) {
        setChecked(thecheck)
        setLabel("Veuillez entrer votre code");
        setButtontext("Télécharger le fichier")
      }
      setChecked(thecheck);
  }

  return (
    <div>
        <div className="spacer"></div>

        <div>
            <div class="centrallogin1">
                <p><span class="text">Vous avez un code utilisateur </span>
                        <input onChange={checkboxChanged} type="checkbox" id="test1" />
                        <label for="test1"><span class="ui"></span></label>
                </p>
            </div>

            <div class="centrallogin">
                <form onSubmit={run}>
                    <div class="logintext"><span >{label}</span></div>
                    <div class="logininput"><input value={code} class="in" onChange={(event) => {setCode(event.target.value); setError(false)}}></input></div>
                    <div class="loginbutton"><button class="in enjoy-css" type="submit">{buttontext}</button></div>
                </form>
                <div className="errortext">{errortext}</div>
            </div>
        </div>
    </div>

  );
}

export default AuthPage;
