import style from "./App.module.css";
import { HomeScreen } from "./components/HomeScreen/HomeScreen";
import { QuestionScreen } from "./components/QuestionScreen/QuestionScreen";
import { Footer } from "./components/Footer/Footer";
import { getQuestions } from "./Api";
import { useState } from "react";

const App = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answer, setAnswer] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  const startGame = (amount, category, difficulty) => {
    getQuestions(amount, category, difficulty).then((items) =>
      setQuestions(items)
    );
  };

  const checkAnswer = (e) => {
    if (e === true) setAnswer((prev) => prev + 1);
  };

  const setQuestion = () => {
    if (currentQuestion >= questions.length - 1) {
      setCurrentQuestion(0);
      setQuestions(0);
      setGameOver(true);
    } else {
      setCurrentQuestion(currentQuestion + 1);
    }
  };
  let gameOverScreen;
  if (gameOver) {
    gameOverScreen = <div>{answer}</div>;
  }
  return (
    <div className={style.AppWrapper}>
      {questions.length > 0 ? (
        <QuestionScreen
          nextQuestion={setQuestion}
          question={questions[currentQuestion]}
          currentQuestion={currentQuestion}
          questionsCount={questions.length}
          setAnswer={checkAnswer}
          correctAnswer={answer}
        />
      ) : (
        <div className={style.wrapper}>
          <HomeScreen startGame={startGame} />
          {gameOverScreen}
        </div>
      )}
      <Footer />
    </div>
  );
};

export default App;
