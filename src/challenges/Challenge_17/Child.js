import React from 'react'

function Child({ name }) {
  return (
    <div className='border p-20'>
        <h3>He is {name}</h3>
    </div>
  )
}

export default Child