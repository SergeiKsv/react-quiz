import { useState, useEffect } from 'react';
import styles from './Questions.module.css'

export const QuestionScreen = (props) => {
    const [correctAnswer, setAnswer] = useState(0);
    const [variants, setVariants] = useState([]);
    const [classNames, setClassName] = useState({ correctAnswer: '', incorrectAnswer: '' });
    const [display,setDisplay]=useState(true);
 
    useEffect(() => {
        function shuffle(arr) {
            for (let i = arr.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [arr[i], arr[j]] = [arr[j], arr[i]];
            }
            return arr;
        }
        setVariants(shuffle([...props.question.incorrect_answers, props.question.correct_answer]
            .map(val => ({ val, isCorrect: val === props.question.correct_answer ? true : false }))));
        return () => {
            setClassName('');
            setDisplay(true);
        };
    }, [props.question.incorrect_answers, props.question.correct_answer])

    let questionsReplaced = [];

    let str = props.question.question.replace(/&amp;/g, '&')
        .replace(/&ldquo;/g, '<')
        .replace(/&rdquo;/g, '>')
        .replace(/&rsquo;/, "'")
        .replace(/&quot;/g, '"')
        .replace(/&#039;/g, "'")
        .replace(/&eacute;/g, "é");

    for (let i = 0; i < variants.length; i++) {
        questionsReplaced.push({
            answer: variants[i].val.replace(/&amp;/g, '&')
                .replace(/&ldquo;/g, '<')
                .replace(/&rdquo;/g, '>')
                .replace(/&rsquo;/, "'")
                .replace(/&quot;/g, '"')
                .replace(/&#039;/g, "'")
                .replace(/&eacute;/g, "é"), isCorrect: variants[i].isCorrect
        });
    }

    const checkCorrectAnswer = (e) => {
        setClassName({ ...classNames, correctAnswer: styles.correctAnswer, incorrectAnswer: styles.incorrectAnswer });
        setDisplay(false);
        if (e === true) {
            setAnswer(correctAnswer + 1);
        }
    }
    
    return (
        <div className={styles.QuestionScreen}>
            <div className={styles.leftInfoBlock}>
                <div className={styles.header}>
                    <span>{props.question.category}</span>
                </div>
                <p className={styles.question}>{str}</p>
                <div className={styles.questionsCountInfo}>
                    <span>Question {props.currentQuestion + 1} of {props.questionsCount} </span>
                    <span>Correct answer: {correctAnswer} of {props.questionsCount}</span>
                </div>
            </div>
            <div className={styles.rightInfoBlock}>
                <div className={styles.header}>
                    <span>Choose the correct answer</span>
                </div>
                <div className={styles.answersWrapper}>
                    {questionsReplaced.map(items => <button className={styles.pageButtons + ' ' + styles.answers + ' '
                        + `${items.isCorrect ? classNames.correctAnswer : classNames.incorrectAnswer}`}
                        onClick={(e) => checkCorrectAnswer(items.isCorrect)} value={items.answer}>{items.answer}</button>)}
                </div>
                <div className={styles.questionControlGroup}>
                    <button className={styles.pageButtons + ' ' + styles.questionControl}
                        onClick={() => { props.nextQuestion() }} disabled={display}>Next Question</button>
                </div>
            </div>
        </div>
    );

}
