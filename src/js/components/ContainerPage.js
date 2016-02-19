/*
	Main Wrapper that surrounds all the pages.
*/

import React, { Component } from 'react'
import Sidebar from './Sidebar'

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
			<div className="">
				<header className="container-page__header">
					<h1 ><a href="/" className="container-page__header__text">Today I Learned</a></h1>
				</header>
				<div className="container-page row">
					<div className="col-sm-3">
						<Sidebar />
					</div>
					<div className="col-sm-9 col-xs-12">
						{ child }
					</div>
				</div>
			</div>

		);
	}
}

export default Container
