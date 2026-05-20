import React from 'react'

//props destructing
export const multiply = ({props}) => {
  return (
    <div>
    <h2>Multiply : {props.first * props.second}</h2>
    </div>
  )
}
