import React from 'react'

import './Box.css'

const Box = () => {
    const style = value === 'X' ? 'box x' : 'box o';
  return (
    <button className='box'>X</button>
  )
}

export default Box