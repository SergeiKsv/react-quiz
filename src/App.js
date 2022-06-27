import style from './App.module.css';
import { HomeScreen } from './components/HomeScreen/HomeScreen';
import { QuestionScreen } from './components/QuestionScreen/QuestionScreen';
import { Footer } from './components/Footer/Footer';
import { getQuestions } from './Api';
import { useState } from 'react';


const App = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const startGame = (amount, category, difficulty) => {
    getQuestions(amount, category, difficulty).then(
      items => setQuestions(items)
    );
    
  }
  
  const setQuestion = () => {
    if (currentQuestion >= questions.length-1) {
      setCurrentQuestion(0);
      setQuestions(0);
    }
    else {
      setCurrentQuestion(currentQuestion+1);
    }
  }
  
  return (
    <div className={style.AppWrapper}>
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
     <Footer/>
    </div>
  );
}

export default App;
