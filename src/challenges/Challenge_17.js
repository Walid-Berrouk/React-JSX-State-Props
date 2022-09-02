import React, { useState } from 'react'
import Child from './Challenge_17/Child'

function Challenge_17() {

    const name = "Walid"

  return (
    <div>
    <br />
    <br />
    <section className="h-full">
        <h1 className="">Challenge 17</h1>
        <br />
        <br />
        <div className='border p-20'>
            <h1>I'm {name}</h1>
            <Child name={name}/>
        </div>
        <br />
    </section>
  </div>
  )
}

export default Challenge_17