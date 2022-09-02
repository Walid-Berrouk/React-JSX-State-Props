import React, { Component } from 'react'
import SmallComponent from './SmallComponent'

export class BigComponent extends Component {
  render() {
    return (
      <div className='border p-20'>
            <h1>I'm a Big Component</h1>
            <SmallComponent />
      </div>
    )
  }
}

export default BigComponent