import React from 'react'
import './ScoreBoard.css'

const ScoreBoard = ({scores, xPlaying}) => {
    const {xScore, oScore} = scores;
  return (
    <div className='scoreboard'>
        <span className={`score x-score ${!xPlaying && 'inactive'}`}>X - {xScore}</span>
        <span className={`score 0-score ${xPlaying && 'inactive'}`}>O - {oScore}</span>
    </div>
  )
}

export default ScoreBoard