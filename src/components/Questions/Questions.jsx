import FeaturesTitle from '../FeaturesTitle/FeaturesTitle'
import GetAnswer from '../GetAnswer/GetAnswer'
import QuestionsList from '../QuestionsList/QuestionsList'

import styles from './Questions.module.css'

const Questions = () => {
  return (
    <div className={styles.container}>
      <FeaturesTitle
        tittle='Frequently asked questions'
        textBottom='Choose any questions you need'
        />
      <QuestionsList/>
      <GetAnswer/>
    </div>
  )
}

export default Questions
