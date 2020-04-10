import React,  {useState, useEffect} from 'react';
import './style/debug.css';
import axios from 'axios';


function AuthPage(props) {
    const [connected, setconnection] = useState(false);
    const [codepass, setCodepass] = useState("");

    useEffect(() => {
        if (connected){
            props.history.push('/');
        }
    });

  function checkUser(event){
      event.preventDefault();

      axios.post('http://51.178.84.176:8082/user/ptoken/', {"code": codepass})
        .then(res => {
            if (res.status === 200){
                localStorage.setItem('token', res.data.token);
                setconnection(res.data.token);
            }
              }
        )
  }

  function updateCode(event){
      setCodepass(event.target.value);
  }

  return (
    <div className="debugbounding">
        <form onSubmit={checkUser}>
            Veuillez entrez votre code : <input type='text' onChange={updateCode}/>
            <input type='submit'/>
        </form>
    </div>
  );
}

export default AuthPage;
