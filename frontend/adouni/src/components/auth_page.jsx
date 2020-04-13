import React,  {useState, useContext} from 'react';
import './style/debug.css';
import './style/auth_page.css';
import axios from 'axios';
import {CnxContext} from '../App.js';
import {server_ip} from '../utils.jsx'

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
      <div>
      <div class="row">
    <div class="col-sm-4">
      1
    </div>
    <div class="col-sm-4">
        <div className="debugbounding">
            <form className="debugbounding" onSubmit={submition}>
                <div class="row a">
                    <div class="col-sm-2"></div>
                    <p className="col-sm-8">Enter your code:</p>
                    <div class="col-sm-2"></div>
                </div>
                <div class="row a">
                    <div class="col-sm-3"></div>
                    <input class="col-sm-6" type='text' name='code' onChange={(event) => {setCode(event.target.value)}}/>
                    <div class="col-sm-3"></div>
                </div>
                <p className="centerizeText"><input type='submit' value="send"/></p>
            </form>
            {errortext}
        </div>
    </div>
    <div class="col-sm-4">
      3
    </div>
  </div>

      </div>
  );
}

export default AuthPage;
