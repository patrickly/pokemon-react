import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from './App';
import Pokemon from './Pokemon';


const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={App} />
                <Route path="/pokemon/:id" exact component={Pokemon} />
            </Switch>
        </BrowserRouter>
    );
};

export default Routes;
