import React                from 'react';
import {Switch }            from 'react-router-dom';
import Route                from '../routes/Route';

import Login                from '../pages/Login';
import CriarConta           from '../pages/CriarConta';
import DashBoard            from '../pages/DashBoard';



export default function Routes(){
    return(
        
            <Switch>
                <Route path="/"                         exact component={Login} />            
                <Route path="/criarconta"               exact component={CriarConta} />            
                <Route path="/dashboard"                exact component={DashBoard} />            
            </Switch>
        
    )
}
