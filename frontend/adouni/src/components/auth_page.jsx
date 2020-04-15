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
    <div>
HELLO
        <div></div>
        <div>
        <div>

            <form onSubmit={submition}>
                <div><span >Veuillez entrer votre code</span></div>
                <div><input onChange={(event) => {setCode(event.target.value); setError(false)}}></input></div>
                <div><button type="submit">Login</button></div>
            </form>
            <div>{errortext}</div>
        </div>
        </div>
    </div>

  );
}

export default AuthPage;
