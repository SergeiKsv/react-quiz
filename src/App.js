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
      setGame(true),
    );
    
  }
  
  const setQuestion = () => {
    if (currentQuestion >= questions.length - 1) {
      setGame(false);
      setCurrentQuestion(0);
      setQuestions(0);
    }
    else {
      setCurrentQuestion(currentQuestion + 1);
    }
  }
  
  return (
    <div>
      {
        questions.length > 0 ?
        <QuestionScreen nextQuestion={setQuestion}
          question={questions[currentQuestion]}
          currentQuestion={currentQuestion}
          questionsCount={questions.length} /> :
  
        <div className={style.wrapper}>
          <HomeScreen startGame={startGame} />
        </div>
      }
    </div>
    

  );
}

export default App;
