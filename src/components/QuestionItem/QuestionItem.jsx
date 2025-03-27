import {useState} from 'react'

import PropTypes from 'prop-types'
import imgVector from './../../assets/img/Vector.svg'
import imgVectorPlus from './../../assets/img/plus.png'

import styles from './QuestionItem.module.css'

const QuestionItem = ({ title, description }) => {
  const [descOn, setDesc] = useState(true)

  return (
    <div className={styles.questionWrap}>
        <div className={styles.titleWrap}>
            <h4 className={styles.questionTitle}>{title}</h4>
            <div className={styles.imgWrap} onClick={()=>setDesc(prev => !prev)}>
              { descOn ? <img src={imgVector} alt="img"/> : <img src={imgVectorPlus} alt="img" className={styles.imgPlus} /> }
            </div>
        </div> 
        { descOn && <p className={styles.questionDesc}>{description}</p> }
    </div>
  )
}

QuestionItem.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string
}

export default QuestionItem
