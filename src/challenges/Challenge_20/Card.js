import React from 'react'

function Card({ children }) {
  return (
    <div className="card" style={{width: "18rem;", marginLeft: 20}}>
    <div className="card-body">
        <h5 className="card-title">Hi, I'm a Card !</h5>
        <h6 className="card-subtitle mb-2 text-muted">I am so versitle actually, i can have {children ? " : " : "Nothing."}</h6>
        {children}
    </div>
    </div>
  )
}

export default Card