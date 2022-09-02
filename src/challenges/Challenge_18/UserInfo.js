import React from 'react'

function UserInfo(props) {
  return (
    <div key={props.user} className='border p-20'>
        <h1>This is Component {props.user}</h1>
        <p>This is paragraph {props.user}</p>
    </div>
  )
}

export default UserInfo