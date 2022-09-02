import React, { Component } from 'react'

export class Challenge_03 extends Component {
  render() {
    return (
      <div>
        <br />
        <br />
        <section className="h-full">
            <h1 className="">Challenge 03</h1>
            <br />
            <br />
            <div className='border p-20'>
                <h1>This is a Container Component</h1>
                <div className='border p-20'>
                    <h2>I'm a Header Component</h2>
                </div>
                <br />
                <div className='border p-20'>
                    <p>I'm a Paragraph Compnonent Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo, quisquam modi minima dolorum fugit alias officia quidem dolor hic consequatur, aliquid mollitia, ad neque dicta quod molestiae incidunt? Repudiandae, nulla.</p>
                </div>
                <br />
                <div className='border p-20'>
                <a
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                    This is a Learn React Anchor Component
                </a>
                </div>
            </div>
            <br />
        </section>
      </div>
    )
  }
}

export default Challenge_03