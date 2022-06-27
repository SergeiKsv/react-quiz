import styles from './Footer.module.css'
 
 export const Footer=()=>{
    return(
      <div className={styles.footer}>
        <div className={styles.footerText}>
          <a href='https://github.com/SergeiKsv/react-quiz' target="_blank">Source code</a>
        </div>
        <div className={styles.footerText}>
          <a href='https://opentdb.com/' target="_blank">API provided by Open Trivia Database</a>
        </div>
      </div>
    )
  }