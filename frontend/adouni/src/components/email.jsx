import React, {useState, useContext} from "react";
import {CnxContext} from '../App.js'
import NavBar from './globals/navbar.jsx'
import {server_ip} from '../utils.jsx'
import './style/email.css';
import axios from 'axios';

function EmailSent(props) {
    return(
        <div  className="succestext"> Email enregistré avec succès  </div>
    )
}


function EmailExisteDeja(props) {
    return(
        <div className="errortext"> Cet Email est déja présent dans ma base de données</div>
    )
}

function EmailNonValid(props) {
    return(
        <div className="errortext"> Erreur ! </div>
    )
}


function Email(props) {
  document.body.classList.remove('background-body');
  document.body.classList.add('background-body-email');
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

          <div className="spacer"></div>
          <div>
          <div class="centrallogin">
              <form onSubmit={saveMail}>
                  <div class="logintext"><span >Veuillez saisir votre email</span></div>
                  <div class="logininput"><input type="email" class="in" value={email} onChange={(event) => {setEmail(event.target.value); setEmail_sent_status(0);}}></input></div>
                  <div class="loginbutton"><button class="in enjoy-css" type="submit">Enregistrer</button></div>
              </form>
              <div>{response}</div>
          </div>
          </div>
      </div>
  );
}

export default Email;
