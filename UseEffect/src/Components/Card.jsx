import React from 'react'

const Card = ({title , description , price} ) => {
  return (
    < div>
    <h1>{title}</h1>
    <p>{description}</p>
    <p>{price}</p>
    </  div>
  )
}

export default Card