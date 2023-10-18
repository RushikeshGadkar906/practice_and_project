import React from 'react'

const Card = ({user}) => {
  return (
    <div className='card'>
        <div className='item'>
            <h1>my name is : {user.name}</h1>
            <p>I am from : {user.add}</p>
        </div>
    </div>
  )
}

export default Card
