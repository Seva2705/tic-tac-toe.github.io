import React from 'react'
import './ScoreBoard.css'

const ScoreBoard = ({scores, xPlaying}) => {
    const {xScore, oScore} = scores;
  return (
    <div className='scoreboard'>
        <span className={`score x-score ${!xPlaying && 'inactive'}`}>X - {xScore}</span>
        <span {`score x-score ${!xPlaying && 'inactive'}`}>X - {xScore}>O - {oScore}</span>
    </div>
  )
}

export default ScoreBoard