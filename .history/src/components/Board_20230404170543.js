import React from 'react'
import Box from './Box'

const Board = ({board}) => {
  return (
    <div>
        {board.map((value, index) => {
            return <Box value={value} onClick={() => console.log(index)}/>
        }
        <Box value="X" onClick={null}/>
        </div>
  )
}

export default Board