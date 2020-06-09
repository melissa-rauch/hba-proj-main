import React from 'react'

export const Midwives = ({midwives}) => {
    return (
        <div>
            
            <h2>{midwives.name}</h2>
            <p>{midwives.bio}</p>

        </div>
    )
}