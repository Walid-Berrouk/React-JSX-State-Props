import React from 'react'
import Curved from './Challenge_05/curved14.jpg'
import Curved2 from './Challenge_05/curved1.jpg'
import Curved3 from './Challenge_05/curved-6.jpg'

function Challenge_05() {

  const styles = {
    marginLeft: 25,
    borderRadius: 25
  }

  return (
    <div>
    <br />
    <br />
    <section className="h-full">
        <h1 className="">Challenge 05</h1>
        <br />
        <br />
        <div className='border p-20'>
            <h1>This is a Component Holding an Image</h1>
            <div className='flex justify-center'>
              <img src={Curved} style={styles} alt="Curved Image" height={200} />
              <img src={Curved2} style={styles} alt="Curved Image" height={200} />
              <img src={Curved3} style={styles} alt="Curved Image" height={200} />
            </div>
        </div>
        <br />
    </section>
  </div>
  )
}

export default Challenge_05