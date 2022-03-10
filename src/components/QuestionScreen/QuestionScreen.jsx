import styles from './Questions.module.css'



export const QuestionScreen = (props) => {

    let str=props.question.question.replace(/&amp;/g, '&')
    .replace(/&ldquo;/g, '<')
    .replace(/&rdquo;/g, '>')
    .replace(/&rsquo;/,"'")
    .replace(/&quot;/g, '"')
    .replace(/&#039;/g, "'");
    
    return (
        <div className={styles.QuestionScreen}>
            <div className={styles.leftInfoBlock}>
                <div className={styles.header}>
                    <span>{props.question.category}</span>
                </div>
                <p className={styles.question}>{str}</p>
                <div className={styles.questionsCountInfo}>
                    <span>Question 1 of 15</span>
                    <span>Answered questions: 0 of 15</span>
                </div>
            </div>
            <div className={styles.rightInfoBlock}>
                <div className={styles.header}>
                    <span>Choose the correct answer</span>
                </div>
                <div className={styles.answersWrapper}>
                    <button className={styles.answer + ' ' + styles.answers}>Вариант 1</button>
                    <button className={styles.answer + ' ' + styles.answers}>Вариант 2</button>
                    <button className={styles.answer + ' ' + styles.answers}>Вариант 3</button>
                    <button className={styles.answer + ' ' + styles.answers}>Вариант 4</button>
                </div>
                <div className={styles.questionControlGroup}>
                    <button className={styles.answer + ' ' + styles.questionControl}>Предыдущий вопрос</button>
                    <button className={styles.answer + ' ' + styles.questionControl} 
                    onClick={()=>{props.setCurrentQuestion()}}>Следующий вопрос</button>
                </div>
            </div>
        </div>
    );
}
