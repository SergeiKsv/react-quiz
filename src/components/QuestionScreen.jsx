import styles from './Questions.module.css'



export const QuestionScreen = () => {

    return (
        <div className={styles.QuestionScreen}>
            <div className={styles.QuestionWrapper}>
                <div className={styles.leftInfoBlock}>
                    <div className={styles.header}>
                        <span className={styles.categoryName}>Название категории</span>
                    </div>
                    <hr></hr>
                </div>
            </div>
        </div>
    );
}
