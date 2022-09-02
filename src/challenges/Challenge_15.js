import React, { useState } from 'react'

function Challenge_15() {

    const [counter, setCounter] = React.useState(0);

  return (
    <div>
        <br />
        <br />
        <section className="h-full">
            <h1 className="">Challenge 15</h1>
            <br />
            <br />
            <div className='border p-20'>
                <h2>Counter: {counter}</h2>
                <button onClick={() => setCounter(counter + 1)}>Increment</button>
                <button onClick={() => setCounter(counter - 1)}>Decrement</button>
            </div>
            <br />
        </section>
    </div>
  )
}

export default Challenge_15