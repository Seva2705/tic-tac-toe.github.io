import React from 'react'
import './ScoreBoard.css'

const ScoreBoard = ({scores, xPlaying}) => {
    const {xScore, oScore} = scores;
  return (
    <div className='scoreboard'>
        <span>X - {xScore}</span>
        <span>O - {xScore}</span>
    </div>
  )
}

export default ScoreBoard