import React from 'react'

function Row(props) {
  return (
    <tr key={props.info.id}>
        <th scope="row">{props.info.id}</th>
        <td>{props.info.title}</td>
        <td>{props.info.description}</td>
        <td>{props.info.button}</td>
    </tr>
  )
}

export default Row