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
			<Route path="/page/:page" component={MainPage} />
			<Route path="/post/:post" component={MainPage} />
			<Route path="/category/:category" component={MainPage}>
				<Route path=":page" component={MainPage} />
			</Route>
		</Route>
	</Router>,
  document.getElementById('react-container')
);

