import React, {useState} from "react";
import axios from 'axios';


function Proj() {
  const [state, setState] = useState({});
  const [result, setResult] = useState({})

  const claculer = (event) => {
       event.preventDefault();
       axios.get('https://houssem-adouni.com:8081/proj/'+state.e+'/'+state.s+'/'+state.x+'/'+state.y+'/')
      .then(res => {console.log(res.data); setResult(res.data);})
      .catch( error => {alert('erreur');})
  }

  return (
    <div class="debugbounding">
        <form onSubmit={claculer}>
            <p>EPSG en entrée</p>
            <p><input name='e' value="4223" type='number' onChange={(event) => {setState({...state, e: event.target.value})}}/></p>
            <p>EPSG en sortie</p>
            <p><input name='s' value="22391" type='number' onChange={(event) => {setState({...state, s: event.target.value})}}/></p>
            <p>X</p>
            <p><input name='x' type='text' onChange={(event) => {setState({...state, x: event.target.value})}}/></p>
            <p>Y</p>
            <p><input name='y' type='text' onChange={(event) => {setState({...state, y: event.target.value})}}/></p>
            <p><input type='submit' value="Calculer"/></p>
        </form>
        <p>le resultat est : <br/> x = {result.x}  <br/>  y = {result.x}</p>
    </div>
  );
}

export default Proj;
