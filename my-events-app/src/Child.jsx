import React from 'react'

export const Child = (props) => {
    let msg = "MSG form child";
    props.sendMSG(msg);

  return (
    <div>Child</div>
   
  )
}
