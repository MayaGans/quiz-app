import React from 'react';

//const answers = []
export default function MultipleChoice({answer, name, bgColor, isCorrect, multiBoxClick, setAnswer}) {

 const [activeState, setActiveState] = React.useState(false)
 const [color, setColor] = React.useState('')

  const handleClick = (isCorrect, activeState) => {
    if (isCorrect & !activeState) {
      setColor("#9ef0bc")
    } else if (activeState) {
      setColor('')
    } else {
      setColor("#f56342")
    }
  }

  return (
    <div className={`${activeState} boxClickCss`}
          style={{backgroundColor: color}} 
          onClick={(e) => {
            //handleInput(name)
            setActiveState((buttonActive) => !buttonActive)
            handleClick(isCorrect, activeState)
            multiBoxClick()
            setAnswer(name)
          }}>
        {name}
    </div>
  )
}