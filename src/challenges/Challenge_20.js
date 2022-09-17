import React from 'react'
import Card from './Challenge_20/Card'

function Challenge_20() {

    const cards = [
        <p className="card-text">Some quick description for you dish.</p>,
        <>
            <p className="card-text">Some description to your dish and</p>
            <a href="#" className="card-link">A link to it</a>
        </>,
        <>
            <p className="card-text">Some description to your dish and</p>
            <a href="#" className="card-link">A link to it</a>
            <a href="#" className="card-link">Another link to it</a>
            <a href="#" className="card-link">A whole bunch of links to it</a>
        </>,
        <p className="card-text">Anything !</p>
    ]


  return (
    <div>
        <br />
        <br />
        <section className="h-full">
            <h1 className="text-center">Challenge 20</h1>
            <br />
            <br />
            <div className='border p-20 flex justify-center'>
                <h1 className='mb-5'>Let's Discover the power of having children !</h1>
                <div className='flex'>
                   {
                    cards.map(card => (
                        <Card>
                            {card}
                        </Card>
                    ))
                   }

                </div>
            </div>
            <br />
        </section>
    </div>
  )
}

export default Challenge_20