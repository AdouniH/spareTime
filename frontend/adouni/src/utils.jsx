import React, {useContext, useEffect} from "react";
import {
  Route,
  Redirect
} from "react-router-dom";
import {CnxContext} from './App.js'
import axios from 'axios';

const server_ip = "http://51.178.84.176:8081"
// authentification
const PrivateRoute = ({component: Component, ...rest}) => {
    const { conn, dispatch } = useContext(CnxContext);
    useEffect(() => {
      if (conn){
            var key = localStorage.getItem('token');
            axios.get(server_ip+"/user/checktoken/",  { headers: { Authorization: 'token '+ key }})
              .then(res => {
                        console.log(res.status)
                  })
                  .catch(function (error) {
                        localStorage.removeItem('token');
                        dispatch('disconnect')
          })
            }
        });

    return (
        <Route {...rest} render={props => (
              conn?
              <Component {...props} />
            : <Redirect to="/authentification" />
        )} />
    );
};

export {PrivateRoute, server_ip}