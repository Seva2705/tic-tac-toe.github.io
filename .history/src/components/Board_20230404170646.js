import React from 'react'
import Box from './Box'

const Board = ({board}) => {
  return (
    <div>
        {board.map((value, idx) => {
            return <Box value={value} onClick={() => onClick}/>
        }
        )}

        </div>
  )
}

export default Board