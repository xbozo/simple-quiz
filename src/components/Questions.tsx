"use client"

import { questionsList } from "@/data/questionsList";
import { useState } from "react";

export default function Questions() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [isAnswerCorrect, setIsAnswerCorrect] = useState(false);
  const [totalCorrectAnswers, setTotalCorrectAnswers] = useState(0)


  function checkQuestion(key: number) {
    setSelectedAnswer(key);
    const selectedOption = questionsList[currentQuestion].questionOptions[key];
    const correctAnswer = questionsList[currentQuestion].questionAnswer;

    if(selectedOption === correctAnswer) {
      setTotalCorrectAnswers(totalCorrectAnswers + 1);
      setIsAnswerCorrect(true);
    }

    setTimeout(() => {
      setSelectedAnswer(null)
      setIsAnswerCorrect(false)
      setCurrentQuestion(currentQuestion + 1)
    }, 1500);
  }
  
  function handleRestartQuiz() {
    setCurrentQuestion(0)
  }

  return (
    <>
      {questionsList[currentQuestion] !== undefined ?
        <>
          <h3 className="font-bold text-xl">Quiz de Culinária</h3>
          <h1 className="mt-5 font-bold text-2xl">
            {currentQuestion + 1}. {questionsList[currentQuestion].question}
          </h1>
          <div className="flex flex-col mt-4">
            {questionsList[currentQuestion].questionOptions.map((item, key) => (
              <button
                key={key}
                onClick={() => checkQuestion(key)}
                disabled={selectedAnswer !== null}
                className={`rounded w-full text-start p-2 my-1 hover:brightness-90 ${
                  isAnswerCorrect
                    ? key === selectedAnswer
                      ? 'bg-green-500'
                      : 'bg-gray-300'
                    : key === selectedAnswer
                      ? 'bg-red-500'
                      : 'bg-gray-300'
                }`}
              >
                {item}
              </button>
            ))}
            <footer className=" flex justify-center text-sm mt-4">
                <span>
                  {currentQuestion + 1} de {questionsList.length} perguntas
                </span>
            </footer>
          </div>
        </> 
      :  
        <div className="flex flex-col gap-3">
          <h1 className="text-center text-2xl font-bold">
            O jogo acabou!
          </h1>
          
          <button 
            onClick={handleRestartQuiz}
            className="bg-blue-400 rounded px-4 mx-auto text-lg font-bold transition-all hover:brightness-75"
          >
            Recomeçar Quiz
          </button>

          <h2 className="text-center text-md border-b-2 border-gray-300 pb-2">
            {totalCorrectAnswers} de {questionsList.length} perguntas acertadas
          </h2>
      </div>
      }
    </>
  );
}