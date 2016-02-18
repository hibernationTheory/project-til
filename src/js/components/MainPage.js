/*
	Main Page which displays all the entries in a paginated manner.
*/

import React, { Component } from 'react'

import Post from './Post';

class MainPage extends Component {
	constructor() {
		super();
		this.state = {
			"data":[]
		}
	}
	componentDidMount() {
		var that = this;
		window.fetch('./data/gist_data_all.json').then(function(response) {
			if(response.ok) {
				return response.json()
			} else {
				console.log('Fetch Failed')
				return [];
			}
		}).then(function(json) {
			that.setState({
				"data":json
			});
		});
	}
	render() {
		var elements = this.state.data.map((item) => {
							console.log(item)
							return <Post data={item} />
						})
		return (
			<div className="">
				{ elements }
			</div>
		)
	}
}

export default MainPage
