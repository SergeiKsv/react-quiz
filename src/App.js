import style from "./App.module.css";
import { HomeScreen } from "./components/HomeScreen/HomeScreen";
import { QuestionScreen } from "./components/QuestionScreen/QuestionScreen";
import { Footer } from "./components/Footer/Footer";
import { getQuestions } from "./Api";
import { useState } from "react";

const App = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  let gameOverScreen;
  let homeScreen;
  let questionScreen;

  const startGame = (amount, category, difficulty) => {
    getQuestions(amount, category, difficulty).then((items) =>
      setQuestions(items)
    );
    setScore(0);
  };

  const checkAnswer = (e) => {
    if (e === true) setScore((prev) => prev + 1);
  };

  const setQuestion = () => {
    if (currentQuestion >= questions.length - 1) {
      setCurrentQuestion(0);
      setQuestions([]);
      setGameOver(true);
    } else {
      setCurrentQuestion(currentQuestion + 1);
    }
  };
 
  if(!gameOver&&questions.length===0){
    homeScreen =<HomeScreen startGame={startGame} />     
  }

  if(gameOver) {
    gameOverScreen = <div className={style.resultScreen}>
      <h1>Game Over!</h1>
      <p>Your score: {score}</p> 
    <button onClick={()=>{setGameOver(false)}} className={style.playAgainButton}>Play Again</button>
    </div>;
  } 
  
  if(!gameOver&&questions.length>0){
    questionScreen=<QuestionScreen
          nextQuestion={setQuestion}
          question={questions[currentQuestion]}
          currentQuestion={currentQuestion}
          questionsCount={questions.length}
          setAnswer={checkAnswer}
          correctAnswer={score}
        />
  }
  
  return (
    <div className={style.AppWrapper}>
      {questionScreen}
        <div className={style.wrapper}>
          {homeScreen}
          {gameOverScreen}
        </div>
      <Footer />
    </div>
  );
};

export default App;
