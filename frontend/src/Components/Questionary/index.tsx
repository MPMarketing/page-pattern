import React, { useState } from 'react';

interface Question {
  id: number;
  text: string;
  options: string[];
}

const questions: Question[] = [
  {
    id: 1,
    text: 'Have you tried any methods such as simple diets or physical exercise?',
    options: ['Yes', 'Never'],
  },
  {
    id: 2,
    text: 'How many pounds do you plan to lose with this program?',
    options: ['5 Pounds', '10 Pounds', 'More than 10 Pounds'],
  },
  {
    id: 3,
    text: 'How difficult is it for you to lose weight?',
    options: ['Easy', 'Medium', 'Hard', 'Extremely Hard'],
  },
  {
    id: 4,
    text: 'Is your current diet healthy or do you eat everything?',
    options: ['Healthy Diet', 'Balanced', 'Eat everything on my way'],
  },
  {
    id: 5,
    text: 'Is your current diet healthy or do you eat everything?',
    options: ['Yes, I will be careful'],
  },
  // Adicione mais perguntas conforme necessário
];

const Quiz: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [progress, setProgress] = useState<number>(0);
  const [showCompletionText, setShowCompletionText] = useState<boolean>(false);
  const [showCompletionButton, setShowCompletionButton] = useState<boolean>(false);

  const handleAnswerClick = (answer: string) => {
    setSelectedAnswer(answer);
    updateProgress();
  };

  const updateProgress = () => {
    const totalQuestions = questions.length;
    const answeredQuestions = currentQuestion + 1;
    const calculatedProgress = (answeredQuestions / totalQuestions) * 100;
    setProgress(calculatedProgress);

    if (calculatedProgress === 100) {
        setShowCompletionText(true);
        setShowCompletionButton(true);
      }
  };

  const handleNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setSelectedAnswer(null);
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handleCompleteQuiz = () => {
    // Lógica para finalizar o quiz, por exemplo, enviar respostas para um servidor
    window.location.href = 'https://thenighttimeprotocol.com/quizz-complete';
    console.log('Quiz completed!');
  };

  return (
    <div style={{marginTop: '2rem', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center'}}>
      <h2>Question {currentQuestion + 1}</h2>
      <p>{questions[currentQuestion].text}</p>
      <progress value={progress} max={100} />

      <ul style={{display: 'flex', marginTop: '2rem', gap: '1rem', flexDirection: 'column'}}>
        {questions[currentQuestion].options.map((option, index) => (
          <li key={index} style={{listStyle: 'none'}}>
            <button type='button' onClick={() => handleAnswerClick(option)} disabled={selectedAnswer !== null} style={{padding: '1rem', borderRadius: '30px', backgroundColor: 'orange', fontWeight: '700'}}>
              {option}
            </button>
          </li>
        ))}
      </ul>

      {/* {selectedAnswer && (
        <p style={{marginTop: '2rem'}}>
          Your answer: <strong>{selectedAnswer}</strong>
        </p>
      )} */}

      {showCompletionText && (
        <p style={{fontWeight: '700', marginTop: '1rem'}}>
        Ready!<br/> Your result has already been generated, to check it, just click the button below!        
        </p>
       )}

      {currentQuestion < questions.length - 1 && (
        <button type='button' onClick={handleNextQuestion} disabled={selectedAnswer === null} style={{marginTop: '3rem', backgroundColor: 'grey', borderRadius: '30px', padding: '1rem', fontWeight: '700'}}>
          Next Question
        </button>
      )}

      {showCompletionButton && (
        <button type='button' onClick={handleCompleteQuiz} style={{backgroundColor: 'red', padding: '1rem', textAlign: 'center', fontWeight: '700', marginTop: '2rem', borderRadius: '30px', color: 'white'}}>
          I want to be part of the program
        </button>
      )}
    </div>
  );
};

export default Quiz;