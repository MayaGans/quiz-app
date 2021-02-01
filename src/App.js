import React, { useState } from 'react';
import Introduction from './Introduction.js'
import Quiz from './Quiz.js'
import Exercise from './Exercise'

export default function App() {
  const [quiz, showQuiz] = React.useState(false)
  const [introduction, showIntroduction] = React.useState(true)
  const [exercise, showExercise] = React.useState(false)
  
  const showQuizFunction = () => {
    showQuiz(true)
    showExercise(false)
    showIntroduction(false)
  }

  const showExerciseFunction = () => {
    showQuiz(false)
    showExercise(true)
    showIntroduction(false)
  }

  const showIntroductionFunction = () => {
    showQuiz(false)
    showExercise(false)
    showIntroduction(true)
  }
  


  return (
    <div className="app">

     <div className="navbar">
    <div className="btn nav-link" onClick={showIntroductionFunction}>Introduction</div>
    <div className="btn nav-link" onClick={showQuizFunction}>Quiz</div>
    <div className="btn nav-link" onClick={showExerciseFunction}>Exercise</div>
      </div>

    <div>
          { quiz ? <Quiz /> : null }
          { introduction ? <Introduction /> : null }
          { exercise ? <Exercise /> : null }
    </div>

    </div>
  )
}