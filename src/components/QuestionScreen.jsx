import styles from './Questions.module.css'



export const QuestionScreen = () => {


    return (
        <div className={styles.QuestionScreen}>
            <div className={styles.leftInfoBlock}>
                <div className={styles.header}>
                    <span className={styles.categoryName}>Название категории</span>
                </div>
                <p className={styles.question}>Тут будет вопрос на много много, или не много букоф</p>
                <div className={styles.questionsCountInfo}>
                    <span>Question 1 of 15</span>
                    <span>Answered questions: 0 of 15</span>
                </div>
            </div>
            <div className={styles.rightInfoBlock}>
                <div className={styles.header}>
                    <span className={styles.categoryName}>Выберите один из вариантов ответа</span>
                </div>
                <div className={styles.answersWrapper}>
                    <button className={styles.answer}>Вариант 1</button>
                    <button className={styles.answer}>Вариант 2</button>
                    <button className={styles.answer}>Вариант 3</button>
                    <button className={styles.answer}>Вариант 4</button>
                </div>
                <div className={styles.questionControlGroup}>
                    <button className={styles.answer}>Предыдущий вопрос</button>
                    <button className={styles.answer}>Следующий вопрос</button>
                </div>
            </div>
        </div>
    );
}
