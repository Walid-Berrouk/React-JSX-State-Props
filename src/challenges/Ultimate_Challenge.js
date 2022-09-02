import React, { useState } from 'react'
import Card from './Ultimate_Challenge/Card'
import image from "./Ultimate_Challenge/curved1.jpg"
import Row from './Ultimate_Challenge/Row'
import Raw from './Ultimate_Challenge/Raw'



function Ultimate_Challenge() {

    const [choice, setChoice] = useState(0)
    const info =[
        {
            id: 0,
            image: image,
            title: "Here I am",
            description: "Once again",
            button: "Feeling lost but now and then"
        },
        {
            id: 1,
            image: image,
            title: "And you don't know where you are now",
            description: "Or what it would come to, if only somebody could hear",
            button: "When you figure out how"
        },
        {
            id: 2,
            image: image,
            title: "You're never gonna fade, you'll be the main attraction",
            description: "Not a fantasy, just remember me",
            button: "When it turns out right"
        }
    ]

    const infoList = info.map(singleInfo => (<Card info={singleInfo}/> ))
    const tableList = info.map(singleInfo => (<Row info={singleInfo}/>))
    const RawList = info.map(singleInfo => (<Raw info={singleInfo}/>))

  return (
    <div>
        <br />
        <br />
        <section className="h-full">
            <h1 className="text-center">Ultimate Challenge</h1>
            <br />
            <br />
            <div className='border p-20'>
                <h1>Choose your Layout</h1>
                <button onClick={() => setChoice(1)}>Raw Layout</button>
                <button onClick={() => setChoice(2)}>Card Layout</button>
                <button onClick={() => setChoice(3)}>Table Layout</button>
                <button onClick={() => setChoice(0)}>Hide Layout</button>
                <div className='border p-20'>
                    {!choice ?
                        <></>
                    : choice == 1 ?
                        <div>
                            {RawList}
                        </div>
                        
                    : choice == 2 ?
                        <div className='flex'>
                            {infoList}
                        </div>
                        
                    :
                     <table className="table">
                        <tbody>
                            {tableList}
                        </tbody>
                    </table>
                    }
                </div>
            </div>
            <br />
        </section>
    </div>
  )
}

export default Ultimate_Challenge