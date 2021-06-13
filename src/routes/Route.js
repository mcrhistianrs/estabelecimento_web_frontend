import React from 'react';
import { Route,Redirect }  from 'react-router-dom';
import store from '../store';

export default function RouterWrapper({
    component:Component,
    isPrivate=false,
    ...rest
}){
    // console.log(store.getState().auth)
    // const {signed} = store.getState().auth;
    // //console.tron.log(signed);
    // //const signed =  false;
    

    // if(signed === false && isPrivate){
    //     return <Redirect to="/" />
    // }

    // if(signed === true && !isPrivate){
    //     return <Redirect to="/dashboard" />
    // }

    return  <Route  {...rest} component={Component}/>;
    
}

