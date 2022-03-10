import style from './App.module.css';
import { HomeScreen } from './components/HomeScreen/HomeScreen';
import { QuestionScreen } from './components/QuestionScreen/QuestionScreen';
import { getQuestions } from './Api';
import { useState } from 'react';


const App = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [isGameReady, setGame] = useState(false);

  const startGame = (amount, category, difficulty) => {
    getQuestions(amount, category, difficulty).then(
      items => setQuestions(items),
      setGame(true)
    );
      
      
  }
  
  const setQuestion = () => {
    setCurrentQuestion(currentQuestion + 1);
  }

  
  return (
    isGameReady&&questions.length>0 ?
      <QuestionScreen setCurrentQuestion={setQuestion} question={questions[currentQuestion]} /> :

      <div className={style.wrapper}>
        <HomeScreen startGame={startGame} />
      </div>

  );
}

export default App;
