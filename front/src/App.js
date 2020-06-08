import React, { Component } from 'react';
import {BrowserRouter} from 'react-router-dom';
import Header from './Components/Header';
import {Main} from  './Components/Main'

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Header/>
                <Main />
            </BrowserRouter>
        );
    }
}

export default App;
