import QuestionItem from '../QuestionItem/QuestionItem'
import {questionsList} from '../../const/listData'

import styles from './QuestionsList.module.css'

const QuestionsList = () => {
  return (
    <div className={styles.questionsListWrap}>
      {questionsList.map((elem, i) =>{
        return <QuestionItem key={i} title={elem.title} description={elem.description} />
      })}
    </div>
  )
}

export default QuestionsList
