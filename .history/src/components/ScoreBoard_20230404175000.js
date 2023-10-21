import React from 'react'
import './ScoreBoard.css'

const ScoreBoard = ({scores, xPlaying}) => {
    const {xScore, oScore} = scores;
  return (
    <div className='scoreboard'>
        <span className={`score x-`}>X - {xScore}</span>
        <span>O - {oScore}</span>
    </div>
  )
}

export default ScoreBoard