import React from 'react'

function Raw(props) {
  return (
    <div key={props.info.id}>
        <h1> {props.info.id} - {props.info.title}</h1>
        <p>{props.info.description}</p>
        <button>{props.info.button}</button>
    </div>
  )
}

export default Raw