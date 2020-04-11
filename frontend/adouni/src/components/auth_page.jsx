import React,  {useState, useContext} from 'react';
import './style/debug.css';
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

          <div className="debugbounding">
              <form onSubmit={submition}>
                  <p>Enter your code:</p>
                  <input type='text' name='code' onChange={(event) => {setCode(event.target.value)}}/>
                  <input type='submit' />
              </form>
              {errortext}
          </div>
      </div>
  );
}

export default AuthPage;
