import React,  {useState, useContext} from 'react';
import './style/debug.css';
import axios from 'axios';
import {CnxContext} from '../App.js';

function AuthPage(props) {

  const {conn, dispatch } = useContext(CnxContext);

  const [code, setCode] = useState("");
  const [error, setError] = useState(false);

  var errortext;
  if(error){
      errortext = <p> code invalide </p>
  }

  function submition(event){
      event.preventDefault();
      axios.post('http://localhost:8000/user/ptoken/', {code: code})
          .then(res => {
            if (res.data.token){
              localStorage.setItem('token', res.data.token);
              dispatch("connect");
              props.history.push("/");
            }
        })
          .catch( error => { setError(true)})
      }

  return (
      <div className="debugbounding">
          <form onSubmit={submition}>
              <p>Enter your code:</p>
              <input type='text' name='code' onChange={(event) => {setCode(event.target.value)}}/>
              <input type='submit' />
              {errortext}
          </form>
      </div>
  );
}

export default AuthPage;
