import React from 'react'

function Challenge_06() {

    const users = [1, 2, 3, 4, 5, 6]
    const usersList = users.map(user => (<li key={user}>User Number {user}</li>))


  return (
    <div>
        <br />
        <br />
        <section className="h-full">
            <h1 className="">Challenge 06</h1>
            <br />
            <br />
            <div className='border p-20'>
                <h1>This is a list Component</h1>
                <ul>
                    {usersList}
                </ul>
            </div>
            <br />
        </section>
    </div>
  )
}

export default Challenge_06