import React from 'react'
import ReactDOM from 'react-dom'
import {IndexRoute, Route, Router, hashHistory} from 'react-router'

import ContainerPage from './components/ContainerPage'
import MainPage from './components/MainPage'
import Post from './components/Post'

var css = require("!style!css!sass!../scss/styles.scss");


ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={ContainerPage}>
            <IndexRoute component={MainPage} />
        	<Route path="post/:post" component={Post} />
        </Route>
    </Router>,
  document.getElementById('react-container')
);

