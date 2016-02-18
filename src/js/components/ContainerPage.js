/*
	Main Wrapper that surrounds all the pages.
*/

import React, { Component } from 'react'

class Container extends Component {
  render() {
    return (
        <div className='container-page'>
            { this.props.children }
        </div>
    );
  }
}

export default Container
