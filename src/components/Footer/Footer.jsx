import styles from './Footer.module.css'
 
 export const Footer=()=>{
    return(
      <div className={styles.footer}>
        <div className={styles.footerText}>
          <span>Source code</span>
        </div>
        <div className={styles.footerText}>
          <span>API provided by Open Trivia Database</span>
        </div>
      </div>
    )
  }