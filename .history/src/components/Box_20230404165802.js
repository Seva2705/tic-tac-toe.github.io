import React from 'react'

import './Box.css'

const Box = ({value, onClick}) => {
    const style = value === 'X' ? 'box x' : 'box o';
  return (
    <button className={style}>X</button>
  )
}

export default Box