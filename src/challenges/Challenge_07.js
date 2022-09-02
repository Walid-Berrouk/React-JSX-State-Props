import React from 'react'
import { users } from '../shared/users'

function Challenge_07() {
    
    const usersList = users.map(user => (
        <div key={user.id} className="border p-20">
            <h1>{user.firstName}</h1>
            <code>{user.codeName}</code>
            <p>{user.age}</p>
        </div>)
    )


  return (
    <div>
        <br />
        <br />
        <section className="">
            <h1 className="">Challenge 07</h1>
            <br />
            <br />
            <div className='border p-20'>
                <h1>This is a list Component</h1>
                <div>
                    {usersList}
                </div>
            </div>
            <br />
        </section>
    </div>
  )
}

export default Challenge_07