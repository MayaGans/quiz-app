import React from 'react';

const answers = []
export default function SingleChoice({answer, name, bgColor, isCorrect, boxClick, setAnswer}) {

  const handleInput = (value)  => {
    answers.push(value)
    // this is where we'd send answers to a database or API or something?
    //console.log(answers)
  }

  return (
    <div className="boxClickCss" 
          style={{backgroundColor: (answer === name) && bgColor}} 
          onClick={(e) => {
            handleInput(name)
            boxClick(isCorrect)
            setAnswer(name)
          }}>{name}
    </div>
  )
}