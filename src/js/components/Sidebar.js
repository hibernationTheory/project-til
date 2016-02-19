import React, { Component } from 'react'

class Sidebar extends Component {
	render() {
		var item = this.props.data
		return (
			<div className='post'>
				<div className="row">
					<div className="col-xs-12">
						<form action="">
							<input type="search"/>
							<input type="submit"/>
						</form>
						<div>Categories</div>
						<ul>
							<li></li>
						</ul>
					</div>
				</div>

			</div>
		);
	}
}

export default Sidebar
