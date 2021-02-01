import React, { Component } from 'react';

export default function Button({answer, name, bgColor, isCorrect, boxClick, setAnswer}) {

  return (
    <div className="boxClickCss" 
          style={{backgroundColor: (answer === name) && bgColor}} 
          onClick={(e) => {
            boxClick(isCorrect)
            setAnswer(name)
          }}>
        {name}
    </div>
  )
}