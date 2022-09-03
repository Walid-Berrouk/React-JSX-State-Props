import React from 'react'
import PropTypes from "prop-types"

function Row({id, firstName, lastName, twitter}) {
  return (
    <tr>
        <th scope="row">{id}</th>
        <td>{firstName}</td>
        <td>{lastName}</td>
        <td>{twitter}</td>
        <td><button className='btn btn-primary' onClick={() => alert("id : "+ id + "\n" + "firstname :" + firstName + "\n" + "lastname :" + lastName + "\n" + "twitter account :" + twitter)}>See Details</button></td>
    </tr>
  )
}

Row.defaultProps = {
    firstName: " - ",
    lastName: " - ",
    twitter: " - "
};

Row.propTypes = {
  id: PropTypes.number.isRequired,
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  twitter: PropTypes.string,
}

export default Row