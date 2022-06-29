import { useState, useEffect } from "react";
import styles from "./Questions.module.css";

export const QuestionScreen = (props) => {
  const [disabled, setDisabled] = useState(true);
  const [classNames, setClassName] = useState({
    correctAnswer: "",
    incorrectAnswer: ""
  });

  useEffect(() => {
    return () => {
      setClassName("");
      setDisabled(true);
    };
  }, [props.currentQuestion]);

  const checkCorrectAnswer = (e) => {
    setClassName({
      ...classNames,
      correctAnswer: styles.correctAnswer,
      incorrectAnswer: styles.incorrectAnswer
    });
    setDisabled(false);
    if (e === true) {
      props.setAnswer(e);
    }
  };

  return (
    <div className={styles.QuestionScreen}>
      <div className={styles.leftInfoBlock}>
        <div className={styles.header}>
          <span>{props.question.category}</span>
        </div>
        <p className={styles.question}>{props.question.question}</p>
        <div className={styles.questionsCountInfo}>
          <span>
            Question {props.currentQuestion + 1} of {props.questionsCount}{" "}
          </span>
          <span>
            Correct answer: {props.correctAnswer} of {props.questionsCount}
          </span>
        </div>
      </div>
      <div className={styles.rightInfoBlock}>
        <div className={styles.header}>
          <span>Choose the correct answer</span>
        </div>
        <div className={styles.answersWrapper}>
          {props.question.answers.map((items) => (
            <button
              className={
                styles.pageButtons +
                " " +
                styles.answers +
                " " +
                `${
                  items.isCorrect
                    ? classNames.correctAnswer
                    : classNames.incorrectAnswer
                }`
              }
              onClick={(e) => checkCorrectAnswer(items.isCorrect)}
            >
              {items.val}
            </button>
          ))}
        </div>
        <div className={styles.questionControlGroup}>
          <button
            className={styles.pageButtons + " " + styles.questionControl}
            onClick={() => {
              props.nextQuestion();
            }}
            disabled={disabled}
          >
            Next Question
          </button>
        </div>
      </div>
    </div>
  );
};
