import React, { Component } from 'react'
import { Link, hashHistory } from 'react-router'

class Sidebar extends Component {
	constructor(props) {
		super()
		this.submitHandler = this.submitHandler.bind(this)
	}
	submitHandler(event) {
		event.preventDefault();
		let formValue = this.refs.inputForm.value

		hashHistory.push({
			pathname:'/',
			query: {search:formValue}
		})
	}
	render() {
		let categories = [];
		let data = this.props.data
		if (data) {
			for (var category in data.categories) {
				categories.push(category)
				categories.sort()
			}
		}
		return (
			<div className='sidebar'>
				<div className="row">
					<div className="col-xs-12">
						{/**/}
						<form action="" className="sidebar__form" onSubmit={this.submitHandler}>
							<input type="search" className="sidebar__form__input-search" ref="inputForm"/>
						</form>
						{/**/}
						<ul className="sidebar__categories">
							{ categories.map((category) => {
								return <li className="sidebar__categories__item__tag-container" key={category}>
									<Link className="sidebar__categories__item__tag" to={"/category/" + category }>#{category}</Link>
								</li>
							}) }
						</ul>
					</div>
				</div>

			</div>
		);
	}
}

export default Sidebar
