import React, { useState } from 'react'

function Challenge_12() {

    const [show, setShow] = useState(false)

  return (
    <div>
    <br />
    <br />
    <section className="h-full">
        <h1 className="">Challenge 12</h1>
        <br />
        <br />
        <div className='border p-20'>
            <h1>This is a Component With Data To Show or Hide</h1>
            {show ?
                <div className='border p-20'>
                    <h1>Hi, I'm a Secret Component</h1>
                    <p>I Have some secrets that only worthy persons must see</p>
                    <code>You need to click on the button to find me !</code>
                </div>
            :
            <></>
            }
            <button onClick={() => setShow(!show)}>Click here to check out secret !</button>
            
        </div>
        <br />
    </section>
  </div>
  )
}

export default Challenge_12