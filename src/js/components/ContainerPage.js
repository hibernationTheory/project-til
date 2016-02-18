/*
	Main Wrapper that surrounds all the pages.
*/

import React, { Component } from 'react'

class Container extends Component {
  render() {
    return (
        <div className='MasterPage'>
        	<h1>Header!!!!!</h1>
            { this.props.children }
        </div>
    );
  }
}

export default Container
