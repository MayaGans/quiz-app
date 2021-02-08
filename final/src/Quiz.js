import React, { useState } from 'react';
import SingleChoice from './SingleChoice.js'

export default function Quiz() {
	const questions = [
		// case where multiple are true
		{ 
				questionText: 'Select all that are yellow?',
				id: 1,
				answerOptions: [
						{ answerText: 'Banana', isCorrect: true },
						{ answerText: 'Pear', isCorrect: false },
						{ answerText: 'Lemon', isCorrect: true },
						{ answerText: 'Apple', isCorrect: false },
				],
		},
		{
				questionText: 'Who is CEO of Tesla?',
				id: 2,
				answerOptions: [
						{ answerText: 'Jeff Bezos', isCorrect: false },
						{ answerText: 'Elon Musk', isCorrect: true },
						{ answerText: 'Bill Gates', isCorrect: false },
						{ answerText: 'Tony Stark', isCorrect: false },
				],
		},
		{
				questionText: 'The iPhone was created by which company?',
				id: 3,
				answerOptions: [
						{ answerText: 'Apple', isCorrect: true },
						{ answerText: 'Intel', isCorrect: false },
						{ answerText: 'Amazon', isCorrect: false },
						{ answerText: 'Microsoft', isCorrect: false },
				],
		},
		{
				questionText: 'How many Harry Potter books are there?',
				id: 4,
				answerOptions: [
						{ answerText: '1', isCorrect: false },
						{ answerText: '4', isCorrect: false },
						{ answerText: '6', isCorrect: false },
						{ answerText: '7', isCorrect: true },
				],
		},
];

const [currentQuestion, setCurrentQuestion] = React.useState(0);
const [bgColor, setbgColor] = React.useState('')
const [answer, setAnswer] = React.useState('')
const [value, setValue] = React.useState(true)

// start with the number of correct answers for the first question
// then progress to previous or next
const [numberCorrect, setNumberCorrect] = React.useState(questions[0].answerOptions.filter(item => item.isCorrect === true).length)

const boxClick = (isCorrect) => {
 if(isCorrect) {
	 setbgColor("#9ef0bc")
	 setValue(false)
 } else {
	 setbgColor("#f56342")
	 setValue(true)
 }
}

const nextClicked = () => {
		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
				setCurrentQuestion(nextQuestion);
		}
		// change the number of correct items to the current question
		setNumberCorrect(questions[currentQuestion].answerOptions.filter(item => item.isCorrect === true).length)
};

const previousClicked = () => {
		if (currentQuestion <= 0) {
				setCurrentQuestion(0);
		} else {
				const nextQuestion = currentQuestion - 1;
				setCurrentQuestion(nextQuestion);
		}

		// change the number of correct items to the current question
		setNumberCorrect(questions[currentQuestion].answerOptions.filter(item => item.isCorrect === true).length)
}

const Buttons;
// if the number of correct options is one use regular button rendering
if (numberCorrect === 1) {
	Buttons = <Button name={answerOption.answerText} isCorrect={answerOption.isCorrect} boxClick={boxClick} bgColor={bgColor} setAnswer={setAnswer} answer={answer} key={answerOption.id}/>
} else {
// if not use multiple choice rendering where the color persists and all buttons that are correct need to be clicked
// to move on
	Buttons = <button>Hello</button>
}


return (
		<div className='quiz'>
		<div className='app'>
								<div className='question-section'>
										<div className='question-count'>
												<span>Question {currentQuestion + 1}</span>/{questions.length}
										</div>
										<div className='question-text'>{questions[currentQuestion].questionText}</div>
								</div>
								<div className='answer-section'>
										{questions[currentQuestion].answerOptions.map((answerOption) => (
											Buttons
										))}
								</div>
				</div>
				<br></br>
				<div className='buttons'>
					<button className="prev" onClick={() => previousClicked()}>Previous</button>
						<button className="next" onClick={() => nextClicked()} disabled={value}>Next</button>
				</div>
		</div>
);

}
