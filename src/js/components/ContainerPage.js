/*
	Main Wrapper that surrounds all the pages.
*/

import React, { Component } from 'react'
import Sidebar from './Sidebar'
// seems like if you are to use a .json, you can just import the data and use it.
// for that to work your json file should be relative to the source js file.
import data from '../data/gist_data_all.json'

class Container extends Component {
	constructor() {
		super();
		this.state = {
			"gist_data":{}
		}
		this.hideSidebar = this.hideSidebar.bind(this)
	}
	hideSidebar() {
		if (this.props.params.post) {
			return true
		}
		return false;
	}
	componentDidMount() {
		/*
		window.fetch('/data/gist_data_all.json').then((response) => {
			if(response.ok) {
				return response.json()
			} else {
				console.log('Fetch Failed')
				return [];
			}
		}).then((data) => {
			console.log(data)
			console.log(data["gist_data"])
			this.setState({
				"all_data":data,
				"category_data":data["categories"],
				"gist_data":data["gist_data"],
			});
		});
		*/

		this.setState({
			"all_data":data,
			"category_data":data["categories"],
			"gist_data":data["gist_data"]
		});
	}
	render() {
		let child = this.state.gist_data.length > 0
			&& this.props.children
			&& React.cloneElement(this.props.children, {"data":this.state.all_data})
		let sidebarHidden = this.hideSidebar()
		return (
			<div className="">
				<header className="container-page__header">
					<h1 ><a href="/" className="container-page__header__text">Today I Learned</a></h1>
				</header>
				<div className="container-page row">
					<div className={"col-sm-3" + (sidebarHidden ? ' hidden' : '')}>
						<Sidebar data={this.state.all_data} />
					</div>
					<div className={"col-xs-12 col-sm-" + (sidebarHidden ? '12' : '9')}>
						{ child }
					</div>
				</div>
			</div>
		);
	}
}

export default Container
