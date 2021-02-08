import React from 'react';
import SingleChoice from './SingleChoice.js'
import MultipleChoice from './MultipleChoice.js'

export default function Quiz() {
	const questions = [
		{
			questionText: 'Which statement is true?',
			answerOptions: [
				{ answerText: 'true has 5 letters', isCorrect: false },
				{ answerText: 'true has 4 letters', isCorrect: true }
			],
		},
		{
			questionText: 'Select all that are yellow?',
			answerOptions: [
				{ answerText: 'Banana', isCorrect: true },
				{ answerText: 'Pear', isCorrect: false },
				{ answerText: 'Lemon', isCorrect: true },
				{ answerText: 'Apple', isCorrect: false },
			],
		},
		{
			questionText: 'Which statement is true?',
			answerOptions: [
				{ answerText: 'The sky is blue', isCorrect: true },
				{ answerText: 'The grass is blue', isCorrect: false }
			],
		},
		{
			questionText: 'Select all that are round?',
			answerOptions: [
				{ answerText: 'Sun', isCorrect: true },
				{ answerText: 'Basketball', isCorrect: true },
				{ answerText: 'Moon', isCorrect: true },
				{ answerText: 'Television', isCorrect: false },
			],
		}
	];

	const [currentQuestion, setCurrentQuestion] = React.useState(0);
	const [bgColor, setbgColor] = React.useState('')
	const [answer, setAnswer] = React.useState('')
	const [value, setValue] = React.useState(true)
	const [correctArray, setCorrectArray] = React.useState(questions[currentQuestion].answerOptions.map(items => items.isCorrect))
	
	// start with the number of correct answers for the first question
	// then progress to previous or next
	const [numberCorrect, setNumberCorrect] = React.useState(questions[0].answerOptions.filter(item => item.isCorrect === true).length)
	
	const boxClick = (isCorrect) => {
		if (isCorrect) {
			setbgColor("#9ef0bc")
			setValue(false)
		} else {
			setbgColor("#f56342")
			setValue(true)
		}
	}

	const multiBoxClick = () => {
		// a practice array 
		// before I figure out how to push up the array from multiplechoice
		let currentArray = [true,false,true,true]
		if (correctArray.every(function(value, index) { return value === currentArray[index]})) {
			setValue(true)
		} else {
			setValue(false)
		}
	}

	const nextClicked = () => {
		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
			setNumberCorrect(questions[nextQuestion].answerOptions.filter(item => item.isCorrect === true).length)
			setCorrectArray(questions[nextQuestion].answerOptions.map(items => items.isCorrect))
		}

		if (currentQuestion === questions.length) {
			setCurrentQuestion(questions.length)
			setNumberCorrect(questions[currentQuestion].answerOptions.filter(item => item.isCorrect === true).length)
			setCorrectArray(questions[currentQuestion].answerOptions.map(items => items.isCorrect))
		}

		// when you click next you cannot advance
		setValue(false)
	};

	const previousClicked = () => {
		if (currentQuestion <= 0) {
			setCurrentQuestion(0);
			setNumberCorrect(questions[0].answerOptions.filter(item => item.isCorrect === true).length)
			setCorrectArray(questions[0].answerOptions.map(items => items.isCorrect))
		} else if (currentQuestion === questions.length) {
			setCurrentQuestion(questions.length)
			setNumberCorrect(questions[currentQuestion - 1].answerOptions.filter(item => item.isCorrect === true).length)
			setCorrectArray(questions[currentQuestion - 1].answerOptions.map(items => items.isCorrect))
		} else {
			const nextQuestion = currentQuestion - 1;
			setCurrentQuestion(nextQuestion);
			setNumberCorrect(questions[currentQuestion - 1].answerOptions.filter(item => item.isCorrect === true).length)
			setCorrectArray(questions[currentQuestion - 1].answerOptions.map(items => items.isCorrect))
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
					{(() => {
						if (numberCorrect === 1) {
							return questions[currentQuestion].answerOptions.map((answerOption) => (
							<SingleChoice
									name={answerOption.answerText}
									isCorrect={answerOption.isCorrect}
									boxClick={boxClick}
									bgColor={bgColor}
									setAnswer={setAnswer}
									answer={answer}/>))
						} else {
							return questions[currentQuestion].answerOptions.map((answerOption) => (
								<MultipleChoice
									name={answerOption.answerText}
									isCorrect={answerOption.isCorrect}
									multiBoxClick={multiBoxClick} 
									bgColor={bgColor}
									setAnswer={setAnswer}
									answer={answer} />))
						}
					})()}
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
