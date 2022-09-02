import React from 'react'
import PropTypes from "prop-types"

function Row({id, firstName, lastName, twitter, seeDetails}) {
  return (
    <tr>
        <th scope="row">{id}</th>
        <td>{firstName}</td>
        <td>{lastName}</td>
        <td>{twitter}</td>
        <td><button className='btn btn-primary' onClick={seeDetails}>See Details</button></td>
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
  seeDetails: PropTypes.func

}

export default Row