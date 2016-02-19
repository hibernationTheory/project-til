/*
	Main Page which displays all the entries in a paginated manner.
*/

import React, { Component } from 'react'
import { Link } from 'react-router'

import Post from './Post';

class MainPage extends Component {
	constructor() {
		console.log('init')
		super();
		this.state = {
			"paginatedData":[],
			"postsPerPage":2,
			"paginated":null,
			"lastPage":null,
			"page": 1
		}
		this.paginateData = this.paginateData.bind(this)
		this.setPageState = this.setPageState.bind(this)
	}
	paginateData() {
		console.log('paginage data')
		let page = this.state.page
		let data = this.props.gist_data
		let ppp = this.state.postsPerPage
		let paginatedData = data.slice((page - 1) * ppp, ((page - 1) * ppp) + ppp)

		this.setState({
			"paginatedData":paginatedData
		})
	}
	setPageState() {
		console.log('set page state');
		let firstPage = false
		let lastPage = false
		let paginated = false
		let page = this.state.page

		if (page * this.state.postsPerPage >= this.props.gist_data.length) lastPage = true
		if (this.state.paginatedData.length !== this.props.gist_data.length) paginated = true
		if (paginated && page === 1 ) firstPage = true

		this.setState({
			"firstPage":firstPage,
			"lastPage":lastPage,
			"paginated":paginated,
		});
		console.log('setPageStateData', this.state);
	}
	componentWillMount() {
		console.log('will mount')
		console.log(this.props.params)
		this.setState({
			"page": parseInt(this.props.params.page) || this.state.page
		})
		this.paginateData()
		this.setPageState()
	}
	componentDidMount() {
		console.log('did mount')
		this.setState({
			"page": parseInt(this.props.params.page) || this.state.page
		})
		this.paginateData()
		this.setPageState()
	}
	componentWillReceiveProps() {
		/*
		console.log('will receive props!')
		this.setState({
			"page": parseInt(this.props.params.page) || this.state.page
		})
		console.log(this.props.params);
		this.paginateData()
		this.setPageState()
		*/
	}
	render() {
		console.log('render state is:', this.state)
		let elements = this.state.paginatedData.map((item) => {
							return <Post data={item} />
						})
		let nextPageEl = (
			<a className="pagination__link--next" href={"/page/" + (this.state.page + 1)}>Older</a>
			//<Link className="pagination__link--next" to={{pathname: "/page/" + (this.state.page + 1)}}>Older</Link>
		)
		let prevPageEl = (
			<a className="pagination__link--prev" href={(this.state.page - 1 === 1 ? "/" : "/page/" + (this.state.page -1)) }>Newer</a>
			//<Link className="pagination__link--prev" to={{pathname: "/page/" + (this.state.page - 1)}}>Newer</Link>
		)
		let pagination = (modifier, ...el) => (
			<nav className={"pagination"+modifier}>
				{el}
			</nav>
		)
		let paginationResult = () => {
			if (this.state.paginated) {
				if (this.state.firstPage) {
					return pagination('--flex-end', nextPageEl)
				} else if (this.state.lastPage) {
					return pagination('', prevPageEl)
				} else {
					return pagination('', prevPageEl, nextPageEl)
				}
			} else {
				return null;
			}
		}
		return (
			<div className="">
				<div className="">{ elements }</div>
				{ paginationResult() }
			</div>
		)
	}
}

export default MainPage
