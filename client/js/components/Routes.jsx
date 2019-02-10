import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Login from './Login';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Login}/>
            <Route path="/home" component={Home}/>
            <Route path="/login" component={Login}/>
            <Route path="*" component={NotFound}/>
        </Switch>
    </BrowserRouter>
);

export default Routes;