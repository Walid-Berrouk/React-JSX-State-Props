import React, { Component } from 'react'
import Func from './Challenge_01/Func'
import Cls from './Challenge_01/Cls'    

export class Challenge_01 extends Component {
  render() {
    return (
      <div>
        <br />
        <br />
        <section className="h-full">
            <h1 className="">Challenge 01</h1>
            <br />
            <br />
            <Func />
            <br />
            <Cls />
        </section>
      </div>
    )
  }
}

export default Challenge_01