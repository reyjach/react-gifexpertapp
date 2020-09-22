import React from 'react'

export const GitGridItem = ({ title, url }) => {


    return (
        <div className="card animate__animated animate__fadeInLeftBig">
            <img src={ url } alt={ title }></img>
            <p>{ title }</p>
        </div>
    )
}
