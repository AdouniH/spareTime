import React, {useState, useContext} from "react";
import {CnxContext} from '../App.js'
import NavBar from './globals/navbar.jsx'
import {server_ip} from '../utils.jsx'
import axios from 'axios';

function EmailSent(props) {
    return(
        <div className="debugbounding"> Email is sent go go go ...  </div>
    )
}


function EmailExisteDeja(props) {
    return(
        <div className="debugbounding"> Cet Email est déja présent dans ma base de données</div>
    )
}

function EmailNonValid(props) {
    return(
        <div className="debugbounding"> Erreur ! email non sauvegardé</div>
    )
}


function Email(props) {
  const {conn, dispatch} = useContext(CnxContext);
  const [email, setEmail] = useState("")
  const [email_sent_status, setEmail_sent_status] = useState(0)

  var response;
  if (email_sent_status === 1){
       response = <EmailSent/>
  }
  else if (email_sent_status === 2) {
      response = <EmailExisteDeja/>
  }
  else if (email_sent_status === 3) {
      response = <EmailNonValid/>
  }

  function saveMail(event){
      event.preventDefault();
      axios.post(server_ip+'/mail/',  {email: email}, {headers: {Authorization: 'token '+conn}})
      .then(res => {
        setEmail_sent_status(1)
        setEmail("")
      })
      .catch( error => {
          if(error.response.data.email['0'] === "mail with this email already exists."){
              setEmail_sent_status(2)
          }
          else {
              setEmail_sent_status(3)
          }
        })
  }

  return (
      <div>
          <NavBar/>
          <div className="debugbounding">
              <form onSubmit={saveMail}>
                  <p>Enter your email, and submit:</p>
                  <input type='email' value={email} onChange={(event) => {setEmail(event.target.value); setEmail_sent_status(0);}}/>
                  <input type='submit'/>
              </form>
              {response}
          </div>
      </div>
  );
}

export default Email;
