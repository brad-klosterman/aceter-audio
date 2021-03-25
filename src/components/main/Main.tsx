import React, { Dispatch, createContext, useReducer } from 'react';
import {
    Redirect,
    Route,
    HashRouter as Router,
    Switch,
} from 'react-router-dom';

import Workstation from '../workstation/Workstation';
import Hub from './Hub';
import { AppProvider } from './State';

const Main = (): React.ReactElement => {
    return (
        <AppProvider>
            <Router>
                <Switch>
                    <Route exact path="/" component={Hub} />
                    <Route exact path="/track" component={Workstation} />
                    <Redirect to="/" />
                </Switch>
            </Router>
        </AppProvider>
    );
};

export default Main;
