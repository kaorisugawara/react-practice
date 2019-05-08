import React, { Component } from 'react'; 
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';

import Header from '../proto/component/header/header';
import Home from '../page/home';
import About from '../page/about';
import Other from '../page/other';
import NotFound from '../page/notfound';

const App = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/other" component={Other} />
                <Route component={NotFound} />
            </Switch>
        </div>
    </BrowserRouter>
)

export default App;