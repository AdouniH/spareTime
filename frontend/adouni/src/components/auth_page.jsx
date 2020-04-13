import React,  {useState, useContext} from 'react';
import './style/debug.css';
import './style/auth_page.css';
import axios from 'axios';
import {CnxContext} from '../App.js';
import {server_ip} from '../utils.jsx'
import cover from './cover.jpg'


function ErrorMsg(){
    return(<div className="debugbounding">ERROR</div>)
}


function AuthPage(props) {

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
        <div className="debugbounding">
            <div className="debugbounding gwd-page-content gwd-page-size">
                <form onSubmit={submition}>
            			  <img id="cover" src={cover} className="gwd-image-2734"></img>
            			  <label id="Login" className="gwd-label-1wfl">Veuillez entrer votre code</label>

                    <input  className="gwd-input-bdmc"
                            placeholder="code"
                            onChange={(event) => {setCode(event.target.value)}}></input>
            			  <button type="submit" id="button_1" className="gwd-button-1q3m">Login</button>
                </form>
            </div>
            {errortext}
        </div>
  );
}

export default AuthPage;
