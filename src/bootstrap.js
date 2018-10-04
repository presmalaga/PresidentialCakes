import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './components/home';
import Form from './components/form';

import 'bootstrap/dist/css/bootstrap.css';
import './style/main.scss';

function main() {
  ReactDOM.render(
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/form' component={Form} />
      </Switch>
    </BrowserRouter>

    , document.querySelector('.app-wrapper'));
}

document.addEventListener('DOMContentLoaded', main);

