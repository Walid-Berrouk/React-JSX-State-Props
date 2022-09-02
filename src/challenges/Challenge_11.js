import React, { useState } from 'react'

function Challenge_11() {



    const[users, setUsers] = useState([1, 2, 3, 4, 5])

    let userList = users.map(user => {
        return (
            <div key={user} className='border p-20'>
                <h1>This is Component {user}</h1>
                <p>This is paragraph {user}</p>
            </div>
        )
    })

  return (
    <div>
    <br />
    <br />
    <section className="">
        <h1 className="">Challenge 11</h1>
        <br />
        <br />
        <div className='border p-20'>
            <h1>This is a Component With Children</h1>
            {userList}
            <button onClick={() => setUsers([...users, users[users.length-1] + 1])}>Click Here to Add Components</button>
        </div>
        <br />
    </section>
  </div>
  )
}

export default Challenge_11