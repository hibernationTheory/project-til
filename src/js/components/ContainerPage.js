/*
	Main Wrapper that surrounds all the pages.
*/

import React, { Component } from 'react'

class Container extends Component {
	constructor() {
		super();
		this.state = {
			"gist_data":[]
		}
	}
	componentDidMount() {
		window.fetch('/data/gist_data_all.json').then((response) => {
			if(response.ok) {
				return response.json()
			} else {
				console.log('Fetch Failed')
				return [];
			}
		}).then((data) => {
			this.setState({
				"gist_data":data
			});
		});
	}
	render() {
		let child = this.state.gist_data.length > 0
			&& this.props.children
			&& React.cloneElement(this.props.children, {"gist_data":this.state.gist_data})
		return (
			<div className='container-page'>
				{ child }
			</div>
		);
	}
}

export default Container
