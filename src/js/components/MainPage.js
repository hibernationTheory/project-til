/*
	Main Page which displays all the entries in a paginated manner.
*/

import React, { Component } from 'react'

import Post from './Post';

class MainPage extends Component {
	constructor() {
		super();
		this.state = {
			"data":[],
			"postsPerPage":2,
			"paginated":null,
			"lastPage":null,
			"page": -1
		}
	}
	paginateData(data, page, postsPerPage) {
		let ppp = postsPerPage
		let currentData = data.slice((page - 1) * ppp, ((page - 1) * ppp) + ppp)
		return currentData
	}
	componentWillMount() {
		this.setState({
			"page": this.props.params.page || 1
		})
	}
	componentDidMount() {
		let that = this;
		window.fetch('/data/gist_data_all.json').then(function(response) {
			if(response.ok) {
				return response.json()
			} else {
				console.log('Fetch Failed')
				return [];
			}
		}).then(function(json) {
			let lastPage = false
			let paginated = false
			let page = that.state.page

			let paginated_data = that.paginateData(json, page, that.state.postsPerPage)

			if (page * that.state.postsPerPage > json.data) lastPage = true
			if (paginated_data.length !== json.length) paginated = true

			that.setState({
				"data":paginated_data,
				"paginated":paginated,
				"lastPage":lastPage
			});
		});
	}
	render() {
		let elements = this.state.data.map((item) => {
							console.log(item)
							return <Post data={item} />
						})
		let nextPageEl = (
			<div className="post">
				<a href={"page/" + (this.state.page + 1)} >Next Page</a>
			</div>
		)

		return (
			<div className="">
				<div className="">{ elements }</div>
				{ this.state.paginated ? nextPageEl : null }

			</div>
		)
	}
}

export default MainPage
