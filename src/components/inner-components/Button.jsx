import React from 'react'

const Button = (props) => {
  return (
    <>
    <button className='primary-btn' type="button"><span>{props.title}</span></button>
    </>
  )
}

export default Button