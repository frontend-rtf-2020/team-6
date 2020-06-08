import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import Authorization from './Authorization';
import Registration from './Registration';

export class Main extends Component {
    render() {
        return(
            <Switch>
                <Route path="/auth" component={Authorization}/>
                <Route path="/reg" component={Registration}/>
            </Switch>
        );
    }
}
