import QuestionLayout from '../QuestionLayout/QuestionLayout'
import {questionsList} from '../../const/listData'

import styles from './QuestionsList.module.css'

const QuestionsList = () => {
  return (
    <div className={styles.questionsListWrap}>
      {questionsList.map((elem, i) =>{
        return <QuestionLayout title={elem.title} description={elem.description} key={i} />
      })}
    </div>
  )
}

export default QuestionsList
