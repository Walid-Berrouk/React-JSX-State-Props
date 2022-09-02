import React from 'react'

function Card(props) {
  return (
    <div key={props.info.id} className="card" style={{width: "18rem", marginLeft: 20}}>
        <img className="card-img-top" src={props.info.image} alt="Card image cap" />
        <div className="card-body">
            <h5 className="card-title">{props.info.id} - {props.info.title}</h5>
            <p className="card-text">{props.info.description}</p>
            <a href="#" className="btn btn-primary">{props.info.button}</a>
        </div>
        </div>
  )
}

export default Card