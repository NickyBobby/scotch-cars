import React, { Component } from 'react';
import { render } from 'react-dom';

import {Router, Route, IndexRoute, browserHistory} from 'react-router';

import Home  from './common/home.component.jsx'
import About from './common/about.component.jsx'
import Main  from './common/main.component.jsx'
import Car   from './car/car.component.jsx'

render(
  <Router>
    <Route path="/" component={Main} history={browserHistory}>
      <IndexRoute component={Home} />
      <Route path="/cars"     component={Car}/>
      <Route path="/cars/:id" component={CarDetail}/>
      <Route path="/about"    component={About}/>
    </Route>
  </Router>,
  document.getElementById('container')
);
