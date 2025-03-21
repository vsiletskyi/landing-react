import Button from '../Button/Button'

import styles from './GetAnswer.module.css'

const GetAnswer = () => {
  return (
    <div className={styles.getAnswerWrap}>
      <div className={styles.textWrap}>
        <h5>Can’t find the answer you’re looking for?</h5>
        <p>Reach out to our <a href="#">customer support</a> team.</p>
      </div>
      <div className={styles.btnWrap}>
        <Button text='Get in touch' variant='dark'/>
      </div>
    </div>
  )
}

export default GetAnswer
