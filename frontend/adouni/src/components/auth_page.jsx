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
  // document.body.classList.add('background-body');
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
    <div>
    <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"></link>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"></script>
        <div className="spacer"></div>
        <div>
        <div class="centrallogin">

            <form onSubmit={submition}>
                <div class="logintext"><span >Veuillez entrer votre code</span></div>
                <div class="logininput"><input class="in" onChange={(event) => {setCode(event.target.value); setError(false)}}></input></div>
                <div class="loginbutton"><button class="in enjoy-css" type="submit">Login</button></div>
            </form>
            <div className="errortext">{errortext}</div>
        </div>
        </div>
    </div>

  );
}

export default AuthPage;
