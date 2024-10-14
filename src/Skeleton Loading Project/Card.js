import React from 'react'

const Card = ({body,title}) => {
    return (
        <div className="card" style={{height:"100%"}}>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{body}</p>
             
            </div>
        </div>

    )
}

export default Card