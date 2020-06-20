import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import Authorization from './Authorization';
import Registration from './Registration';
import Logout from './Logout';
import Chat from './Chat';
import Search from './Search';

export class Main extends Component {
    render() {
        return(
            <Switch>
                <Route path="/auth" component={Authorization} />
                <Route path="/reg" component={Registration} />
                <Route path="/exit" component={Logout} />
                <Route path="/chat" component={Chat} />
                <Route path="/search" component={Search} />
            </Switch>
        );
    }
}
