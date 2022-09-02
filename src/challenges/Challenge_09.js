import React from 'react'

function Challenge_09() {

    let user = [1, 2, 3, 4, 5]

    let userList = user.map(user => {
        return (
            <div className='border p-20'>
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
        <h1 className="">Challenge 09</h1>
        <br />
        <br />
        <div className='border p-20'>
            <h1>This is a Component With Children</h1>
            {userList}
            {/* Doesn't Work, Check Challenge 11 */}
            <button onClick={() => user.push(user[user.length-1] + 1)}>Click Here to Add Components</button>
        </div>
        <br />
    </section>
  </div>
  )
}

export default Challenge_09