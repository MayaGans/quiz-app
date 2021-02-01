import React, { useState } from 'react';
import Button from './Button.js'

export default function Quiz() {
	const questions = [
		{
				questionText: 'What is the capital of France?',
				answerOptions: [
						{ answerText: 'New York', isCorrect: false },
						{ answerText: 'London', isCorrect: false },
						{ answerText: 'Paris', isCorrect: true },
						{ answerText: 'Dublin', isCorrect: false },
				],
		},
		{
				questionText: 'Who is CEO of Tesla?',
				answerOptions: [
						{ answerText: 'Jeff Bezos', isCorrect: false },
						{ answerText: 'Elon Musk', isCorrect: true },
						{ answerText: 'Bill Gates', isCorrect: false },
						{ answerText: 'Tony Stark', isCorrect: false },
				],
		},
		{
				questionText: 'The iPhone was created by which company?',
				answerOptions: [
						{ answerText: 'Apple', isCorrect: true },
						{ answerText: 'Intel', isCorrect: false },
						{ answerText: 'Amazon', isCorrect: false },
						{ answerText: 'Microsoft', isCorrect: false },
				],
		},
		{
				questionText: 'How many Harry Potter books are there?',
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


const boxClick = isCorrect => {
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
};

const previousClicked = () => {
		if (currentQuestion <= 0) {
				setCurrentQuestion(0);
		} else {
				const nextQuestion = currentQuestion - 1;
				setCurrentQuestion(nextQuestion);

		}
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
												<Button name={answerOption.answerText} isCorrect={answerOption.isCorrect} boxClick={boxClick} bgColor={bgColor} setAnswer={setAnswer} answer={answer} />
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
