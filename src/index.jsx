import React, { Component } from 'react';
import { render } from 'react-dom';
import { hashHistory } from 'react-router'
{/*<Router history={hashHistory} />*/}

import {Router, Route, IndexRoute} from 'react-router';

import Home  from './common/home.component.jsx'
import About from './common/about.component.jsx'
import Main  from './common/main.component.jsx'
import Car   from './car/car.component.jsx'

render(
  <Router history={hashHistory}>
    <Route component={Main} path="/">
      <IndexRoute component={Home} />
      <Route path="/cars"  component={Car}/>
      <Route path="/about" component={About}/>
    </Route>
  </Router>,
  document.getElementById('container')
);
