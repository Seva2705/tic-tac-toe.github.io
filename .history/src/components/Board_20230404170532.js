import React from 'react'
import Box from './Box'

const Board = ({board}) => {
  return (
    <div>
        {board.map}
        <Box value="X" onClick={null}/>
        </div>
  )
}

export default Board