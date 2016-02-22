import React, { Component } from 'react'
import { Link } from 'react-router'

class PostInfo extends Component {
	render() {
		let item = this.props.data
		let date = new Date(item.created_at)
		let month = date.getMonth()
		let day = date.getDate()
		let year = date.getFullYear()
		let parsed_date = day + '/' + month + '/' + year

		return (
			<div className='post-info'>
				<ul className="post-info__list">
					<li className="post-info__list__item">
						<div>{parsed_date}</div>
					</li>
					<li className="post-info__list__item">
						<a href={item.url}>Gist</a>
					</li>
					<li className="post-info__list__item">
						{ item.metadata.tags.split(',').map((tag) => {
							tag = tag.trim()
							let link = `/category/${tag}/`
							return <Link key ={ tag } className="post-info__list__item__tag" to={link}>{ '#'+tag }</Link>
						}) }
					</li>
				</ul>
			</div>
			);
	}
}

export default PostInfo
